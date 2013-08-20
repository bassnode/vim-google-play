var currentTrackInfo = function() {
  return {
    song:   currentSong(),
    artist: currentArtist(),
    album:  currentAlbum(),
    state:  playPauseButton().className.indexOf('playing') === -1 ? 'paused' : 'playing'
  };
};

var fetchSafely = function(domId) {
    var el = document.getElementById(domId);
    return el ? el.innerHTML : '';
};

var playPauseButton = function() {
  return document.querySelector("button[data-id='play-pause']");
};

var currentSong = function() {
  return fetchSafely('playerSongTitle');
};

var currentArtist = function() {
  return fetchSafely('player-artist');
};

var currentAlbum = function() {
    var albums = document.getElementsByClassName('player-album');
    if(albums && albums.length > 0)
      return albums[0].innerHTML;

    return '';
};


var commands = {
  play: function() {
    var playBtn = playPauseButton();

    if(playBtn === undefined || playBtn.disabled)
      document.querySelector("div .header-tab-title[data-type='all']").click();

    playBtn.click();
  },
  next: function() {
    document.querySelector("button[data-id='forward']").click();
  },
  previous: function() {
    document.querySelector("button[data-id='rewind']").click();
  },
  shuffle: function() {
    // Click "My Library"
    document.querySelector("li[data-type='artists']").click();
    document.querySelector("button[data-id='shuffle-my-library']").click();
  },
  louder: function() {
    // no-op. handled on system for now
  },
  softer: function() {
    // no-op. handled on system for now
  }
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.command);
    commands[request.command]();
    var response = {
      track: currentTrackInfo()
    };

    sendResponse(response);
});

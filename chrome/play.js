console.log('loaded play.js');

var playPauseButton = function() {
  return document.querySelector("button[data-id='play-pause']");
};

var currentTrackInfo = function() {
  return {
    song: document.getElementById('playerSongTitle').innerHTML,
    artist: document.getElementById('player-artist').innerHTML,
    album: document.getElementsByClassName('player-album')[0].innerHTML,
    state: playPauseButton().className.indexOf('playing') === -1 ? 'paused' : 'playing'
  };
};

var commands = {
  play: function() {
    playPauseButton().click();
  },
  next: function() {
    document.querySelector("button[data-id='forward']").click();
  },
  previous: function() {
    document.querySelector("button[data-id='rewind']").click();
  },
  shuffle: function() {
    document.querySelector("li[data-type='artists']").click();
    document.querySelector("button[data-id='shuffle-my-library']").click();
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
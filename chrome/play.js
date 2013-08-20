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

var triggerKeypress = function(keyCode) {
  var event = document.createEvent("Events");

  event.initEvent("keydown", true, true);

  event.keyCode = keyCode;
  event.which = keyCode;

  document.body.dispatchEvent(event);
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
    triggerKeypress(187);
  },
  softer: function() {
    triggerKeypress(189);
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

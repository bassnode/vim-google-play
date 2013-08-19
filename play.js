console.log('loaded play.js');

var commands = {
  play: function() {
    document.querySelector("button[data-id='play-pause']").click();
  }
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.command);
    commands[request.command]();
    var response = {
      track: {
        artist: 'Kenny G',
        title: 'Sweet, sweet Sax',
        album: 'Saxaholic',
        state: 'stopped',
      }
    };

    sendResponse(response);
});

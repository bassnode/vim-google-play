var port = null;

//function sendNativeMessage(message) {
  //port.postMessage(message);
//}

function onNativeMessage(message) {
  console.log("Received message: ", message);
  var query = {url: '*://play.google.com/music/*'};
  chrome.tabs.query(query, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
      console.log("Play response", response);
      port.postMessage(response);
    });
  });
}

function connect() {
  var hostName = "vim_play";
  port = chrome.extension.connectNative(hostName);
  console.log("Connected to native messaging host");
  port.onMessage.addListener(onNativeMessage);
  //port.onDisconnect.addListener(onDisconnected);
}

document.addEventListener('DOMContentLoaded', function () {
  connect();
});

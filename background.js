var port = null;

function log(text) {
  console.log(text);
}

function sendNativeMessage() {
  message = {"text": document.getElementById('input-text').value};
  port.postMessage(message);
  log("Sent message: <b>" + JSON.stringify(message) + "</b>");
}

function onNativeMessage(message) {
  console.log("Received message: ", message);
  var query = {url: '*://play.google.com/music/*'};
  chrome.tabs.query(query, function(tabs) {
    console.log('tabs', tabs);
    chrome.tabs.sendMessage(tabs[0].id, {command: message}, function(response) {
      console.log(response);
    });
  });
}

//function onDisconnected() {
  //log("Failed to connect: " + chrome.runtime.lastError.message);
  //port = null;
//}

function connect() {
  var hostName = "vim_play";
  port = chrome.extension.connectNative(hostName);
  log("Connected to native messaging host");
  log(port);
  port.onMessage.addListener(onNativeMessage);
  //port.onDisconnect.addListener(onDisconnected);
}

document.addEventListener('DOMContentLoaded', function () {
  connect();
});

// other method
//var port = null;
//document.addEventListener('DOMContentLoaded', function () {
//  console.log('loadin');
//  port = chrome.runtime.connectNative('vim_play');
//
//  port.onMessage.addListener(function(msg) {
//    console.log("Received" + msg);
//  });
//
//  port.onDisconnect.addListener(function() {
//    console.log("Disconnected");
//  });
//});

//chrome.runtime.sendNativeMessage('echo',
  //{ text: "Hello" },
  //function(response) {
    //console.log("Received " + response);
//});

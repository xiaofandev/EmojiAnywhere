// service worker for google chrome extension
// handle when the extension is installed
// handle when message is received

// console.log when the extension is installed
chrome.runtime.onInstalled.addListener(function () {
  console.log("Extension installed");
});

// dispatch message to conent script when request.to is "content"
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.to === "content") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, request, function (response) {
        sendResponse(response);
      });
    });
  }
  return true;
});

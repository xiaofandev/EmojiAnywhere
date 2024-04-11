/* 
chrome extension content script
handle event when recieve message from popup.js

*/

// recieve message from popup.js when request.from is "popup"
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.from == "popup") {
    // find active input or area element and insert request.data to it
    var input = document.activeElement;
    if (input.tagName == "INPUT" || input.tagName == "TEXTAREA") {
      input.value += request.data;
    }
    sendResponse({
      message: "recieved message from popup.js",
    });
  }
});

/*
    This file is a chrome extension that help input emoji in the input box.
    handle on div with class name "emoji" on click:
        1. get the content of the div
        2. send message to the background script with the content,the action is "clickEmoji"

*/
(function () {
  const emojiDiv = document.querySelectorAll(".emoji");
  emojiDiv.forEach((div) => {
    div.addEventListener("click", () => {
      const emoji = div.innerText;
      chrome.runtime.sendMessage({
        from: "popup",
        to: "content",
        action: "clickEmoji",
        data: emoji,
      });
    });
  });
})();

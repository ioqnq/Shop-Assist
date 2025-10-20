chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "extractByTag") {
    // Forward the request to the active tab's content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "extractByTag", tags: msg.tags },
        (response) => {
          sendResponse(response);
        }
      );
    });

    // Must return true to keep the message channel open for async sendResponse
    return true;
  }
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "extractByTag") {
    const result = {};
    msg.tags.forEach(tag => {
      const elements = document.querySelectorAll(tag);
      result[tag] = Array.from(elements).map(el => el.innerText.trim()).filter(Boolean);
    });
    sendResponse({ texts: result });
    console.log("Extracted text:", result);
  }
});
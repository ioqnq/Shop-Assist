chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "extractByTag") {
    const elem = document.querySelector(msg.tag);

    const result = Array.from(elem)
      .map(el => el.innerText.trim())
      .filter(Boolean);

    sendResponse({ text: result });
    console.log("Extracted text:", result);
  }
});
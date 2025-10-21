document.getElementById("extract").addEventListener("click", () => {
  const tag = '.current-price-elem';

  chrome.runtime.sendMessage({ action: "extractByTag", tag }, (response) => {
    document.getElementById("output").textContent = response.text[0];
  });
});

// document.getElementById("extract").addEventListener("click", () => {
//   const tag = "h1";
//   chrome.runtime.sendMessage({ action: "extractByTag", tag }, (response) => {
//     const output = document.getElementById("output");
//     if (response && response.text && response.text.length > 0) {
//       output.textContent = response.text.join("\n");
//     } else {
//       output.textContent = "No elements found";
//     }
//   });
// });


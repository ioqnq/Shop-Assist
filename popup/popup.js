document.getElementById("extract").addEventListener("click", () => {
  const tags = document.getElementById("tags").value.split(",").map(t => t.trim());

  chrome.runtime.sendMessage({ action: "extractByTag", tags }, (response) => {
    document.getElementById("output").textContent = JSON.stringify(response.texts, null, 2);
  });
});

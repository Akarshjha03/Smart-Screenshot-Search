const captureBtn = document.getElementById('captureBtn');
const searchBtn = document.getElementById('searchBtn');
const preview = document.getElementById('preview');
const result = document.getElementById('result');

let capturedImage = null;

captureBtn.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: "capture" }, (response) => {
    capturedImage = response.screenshot;
    preview.innerHTML = `<img src="${capturedImage}" />`;
    searchBtn.style.display = "inline-block";
    result.textContent = "";
  });
});

searchBtn.addEventListener('click', () => {
  if (!capturedImage) return;

  searchBtn.disabled = true;
  searchBtn.textContent = "Searching...";

  fetch('http://localhost:3000/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: capturedImage })
  })
    .then(res => res.json())
    .then(data => {
      let output = "Labels:\n";
      data.labels.forEach(label => {
        output += `- ${label.description} (${(label.score * 100).toFixed(1)}%)\n`;
      });
      result.textContent = output;
    })
    .catch(err => {
      console.error(err);
      result.textContent = "Error connecting to server.";
    })
    .finally(() => {
      searchBtn.disabled = false;
      searchBtn.textContent = "Search with Vision";
    });
});

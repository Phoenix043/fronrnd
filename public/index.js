// index.js
document.addEventListener('DOMContentLoaded', function () {
  // Initialize CodeMirror editor and attach it to the textarea
  const codeInput = document.getElementById('input-code');
  const codeEditor = CodeMirror.fromTextArea(codeInput, {
    lineNumbers: true,
    mode: 'text/javascript', // Set the default mode to JavaScript
    theme: 'default', // You can use different themes (e.g., 'default', 'monokai', 'dracula', etc.)
    tabSize: 2, // Number of spaces per tab
  });
});


async function convertCode() {
  const code = document.getElementById("input-code").value;
  const language = document.getElementById("languages").value;
  console.log(code ,language)

  const response = await fetch(`https://teal-alert-swordfish.cyclic.app/convert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code, language }),
  });

  const data = await response.json();
  document.getElementById("output-panel").innerText = data.response;
}

async function debugCode() {
  const code = document.getElementById("input-code").value;

  const response = await fetch(`https://teal-alert-swordfish.cyclic.app/debug`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });

  const data = await response.json();
  document.getElementById("output-panel").innerText = data.response;
}

async function qualityCheck() {
  const code = document.getElementById("input-code").value;

  const response = await fetch(`https://teal-alert-swordfish.cyclic.app/quality`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });

  const data = await response.json();
  document.getElementById("output-panel").innerText = data.response;
}
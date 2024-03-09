import compileToSnippet from './src/converter';

document.addEventListener('DOMContentLoaded', function() {
  const copyButton = document.getElementById('copyButton');

  copyButton.addEventListener('click', function() {
    // Get the current value from the editor
    const editorValue = document.getElementById('editor').innerText;

    // Create a temporary textarea element to hold the text
    const textarea = document.createElement('textarea');
    textarea.value = editorValue;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    // Execute the copy command
    // Function is Depricated
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Give some feedback to the user
    alert('Text copied to clipboard: ' + editorValue);
  });

  document.getElementById('editor').addEventListener('input', () => {
    // Update the copyText variable every time the input event is triggered
    const editorValue = document.getElementById('editor').innerText;
    copyText = compileToSnippet(null, null, editorValue);
    console.log(compileToSnippet(null, null, editorValue));
  });
});

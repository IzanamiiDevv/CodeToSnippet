import compileToSnippet from './src/converter.js';

document.addEventListener('DOMContentLoaded', function() {
  const copyButton = document.getElementById('copyButton');

  copyButton.addEventListener('click', function() {
    const prefix = document.getElementById('pre').value;
    const description = document.getElementById('desc').value;
    window.location.href = '#Editor';
    // Get the current value from the editor
    const editorValue = document.getElementById('editor').innerText;

    // Create a temporary textarea element to hold the text
    const textarea = document.createElement('textarea');
    textarea.value = compileToSnippet(prefix, description, editorValue);

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
    copySucess()
  });

  document.getElementById('editor').addEventListener('input', () => {
    // Update the copyText variable every time the input event is triggered
    const editorValue = document.getElementById('editor').innerText;
    copyText = compileToSnippet(null, null, editorValue);
    console.log(compileToSnippet(null, null, editorValue));
  });
});

function copySucess(){
    console.log('Copied Successfull')
}

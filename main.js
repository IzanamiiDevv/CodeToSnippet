import compileToSnippet from './src/converter';

document.getElementById('editor').addEventListener('input',()=>{
    console.log(compileToSnippet(null,null,document.getElementById('editor').innerText))
});
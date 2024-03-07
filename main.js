document.getElementById('editor').addEventListener('input',()=> {
    const code = document.getElementById('editor').innerText
    const snippet = compileToSnippet('test','tst',code);

    console.log(snippet)
});

function compileToSnippet(prefix,description,script) {
    const lines = script.split('\n');
    const snippet = {
        'prefix': prefix,
        'body': lines,
        'description': description
    };

    return JSON.stringify(snippet, null, 2);
}
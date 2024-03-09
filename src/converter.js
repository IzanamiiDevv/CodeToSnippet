function compileToSnippet(prefix,description,script) {
    const lines = script.split('\n');
    const snippet = {
        'prefix': prefix,
        'body': lines,
        'description': description
    };

    return JSON.stringify(snippet, null, 2);
}

export default compileToSnippet;
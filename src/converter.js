function compileToSnippet(prefix,description,script) {
    // Split the String For Every '\n' or line
    const lines = script.split('\n');

    // Snippet Template
    const snippet = {
        'prefix': prefix,
        'body': lines,
        'description': description
    };

    // Returning the Snippet
    return JSON.stringify(snippet, null, 2);
}


// Export The Convert Method
export default compileToSnippet;
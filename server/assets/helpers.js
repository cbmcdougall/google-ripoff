const data = require('./data.json');

// Escapes RegExp characters in a string to be used in RegExp searches
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

// Search for a given search term
function findResults(search){
    // Just using String.prototype.includes() matches within words
    // Want to search for matches of whole words (so that e.g. "cat" doesn't match "domestiCATed dog")
    const searchTerm = search.toLowerCase().split('_'); // Space characters get passed in as underscores
    const results = data.filter(item => {
        const bodyTextWords = item.bodyText.toLowerCase();
        const findWords = searchTerm.map(term => {
            const regex = new RegExp(`\\b${escapeRegExp(term)}\\b`);
            const findWord = bodyTextWords.search(regex);
            return findWord;            
        });
        const noWordsFound = findWords.includes(-1);    // Gives true if no words were found
        return !noWordsFound
    });
    return results;
};

module.exports = findResults
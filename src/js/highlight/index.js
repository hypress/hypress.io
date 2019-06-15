const hljs = require('highlight.js');

module.exports = function() {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
}
const { marked } = require('marked');

function loadMarkdown(filePath, elementId) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text();
        })
        .then(text => {
            const html = marked(text);
            document.getElementById(elementId).innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the markdown file:', error);
        });
}

// 确保在页面加载完成后调用
window.onload = function() {
    loadMarkdown('article1.md', 'article1-content');
    loadMarkdown('article2.md', 'article2-content');
    loadMarkdown('article3.md', 'article3-content');
};

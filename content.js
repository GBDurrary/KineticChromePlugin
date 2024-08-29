const loadStyles = function() {
    var currentUrl = window.location.href.toLowerCase();
    var stylesFile = 'liveStyles.css'; 
    if (currentUrl.includes("kinetictest")) {
        stylesFile = 'testStyles.css';
    } else if (currentUrl.includes("kineticdev")) {
        stylesFile = 'devStyles.css';
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.runtime.getURL(stylesFile);
    document.head.appendChild(link);
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadStyles);
} else {
    loadStyles();
}
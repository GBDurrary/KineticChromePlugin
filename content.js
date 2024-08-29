document.addEventListener('DOMContentLoaded', function() {
    // var currentUrl = window.location.href.toLowerCase();
    // var stylesFile = 'styles.css'; 
    // if (currentUrl.includes("kinetictest")) {
    //     stylesFile = 'testStyles.css';
    // } else if (currentUrl.includes("kineticdev")) {
    //     stylesFile = 'devStyles.css';
    // }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.runtime.getURL('styles.css');
    document.head.appendChild(link);
});
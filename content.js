const loadStyles = function() {
    fetch (chrome.runtime.getURL('config.json'))
    .then(response => response.json())
    .then(config => {
        var currentUrl = window.location.href.toLowerCase();
        var stylesFile = 'liveStyles.css'; 
        if (currentUrl.includes(config["test_url_part"])) {
            stylesFile = 'testStyles.css';
        } else if (currentUrl.includes(config["dev_url_part"])) {
            stylesFile = 'devStyles.css';
        } else if (currentUrl.includes(config["pilot_url_part"])) {
            stylesFile = 'pilotStyles.css';
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = chrome.runtime.getURL(stylesFile);
        document.head.appendChild(link);

        // Chrome controlled settings
        chrome.storage.sync.get(["brash_colours", "compressed_grid", "accessible"], function(data) {
            if (data.brash_colours) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = chrome.runtime.getURL('brashColours.css');
                document.head.appendChild(link);
            }

            if (data.compressed_grid) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = chrome.runtime.getURL('compressedGrid.css');
                document.head.appendChild(link);
            }

            console.log("ACCESSIBLE");
            console.log(data);
            if (data.accessible) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = chrome.runtime.getURL('accessibility.css');
                document.head.appendChild(link);
            }
        })

    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadStyles);
} else {
    loadStyles();
}
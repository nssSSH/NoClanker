// Load blocklist when extension starts
fetch(chrome.runtime.getURL('blocked.txt'))
  .then(response => response.text())
  .then(text => {
    const blockedSites = text.split(';')
      .map(site => site.trim())
      .filter(site => site.length > 0);

    // Block requests to listed sites
    chrome.webRequest.onBeforeRequest.addListener(
      (details) => {
        const url = new URL(details.url);
        if (blockedSites.includes(url.hostname)) {
          return { redirectUrl: chrome.runtime.getURL('blocked.html') };
        }
      },
      { urls: ['<all_urls>'] },
      ['blocking']
    );
  });

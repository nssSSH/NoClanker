fetch(chrome.runtime.getURL("blocked.txt"))
  .then(res => res.text())
  .then(text => {
    const blockedSites = text
      .split(";")
      .map(s => s.trim().toLowerCase())
      .filter(Boolean);

    chrome.webRequest.onBeforeRequest.addListener(
      details => {
        let url;
        try {
          url = new URL(details.url);
        } catch {
          return;
        }

        const host = url.hostname.toLowerCase();

        if (blockedSites.some(site => host === site || host.endsWith("." + site))) {
          return {
            redirectUrl: chrome.runtime.getURL(
              `blocked.html?url=${encodeURIComponent(details.url)}`
            )
          };
        }
      },
      { urls: ["<all_urls>"] },
      ["blocking"]
    );
  })
  .catch(err => console.error("NoClanker blocklist load failed", err));

function addCurrentSiteToAtavi() {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    const title = tabs[0].title;
    const url = tabs[0].url;

    const message = {
      title,
      url
    };

    chrome.tabs.create({url: "https://atavi.com/", active: false}, (tab) => {
        setTimeout(() => {
          afterCreateTab(tab.id, message)
        }, 2000);
      }
    );

    function afterCreateTab(tabId, message) {
      chrome.tabs.sendMessage(
        tabId,
        message
      );
    }
  })


}

function createContextMenu() {

  chrome.contextMenus.create({
    "id": "addCurrentSiteToAtavi",
    "contexts": ["page"],
    "title": "add to atavi"
  });

  chrome.contextMenus.onClicked.addListener(addCurrentSiteToAtavi);
}

createContextMenu();
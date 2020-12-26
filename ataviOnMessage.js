chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(!sender.tab) {
            handleMessage(request)
        }
    });

    function handleMessage(message){
    const $addBtn = document.querySelector('.js-bookmark-add');
    $addBtn.click();
    const $inputUrl = document.querySelector('#Bookmark_url');
    const $inputNameSite = document.querySelector('#Bookmark_caption');
    const $addSiteBtn = document.querySelector('input.tp-button.fr');

    $inputUrl.value = message.url;
    $inputNameSite.value = message.title;

    $addSiteBtn.click();
    setTimeout ( window.close , 1000 );
}
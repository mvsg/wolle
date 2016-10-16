var on = true;
var current = 0;

//On page load check for status
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && on == false) {
    chrome.tabs.executeScript({file: "script.js"});
  }
});


// OnClick icon. Change status and browser icon.
chrome.browserAction.onClicked.addListener(function(tab) {

    if (on) {
        chrome.tabs.executeScript({file: "script.js"});
        on = false;
        current = 1;
    }
    else {
        chrome.tabs.executeScript({file: "script2.js"});
        on = true;
        current = 0;
    }
    chrome.browserAction.setIcon({path:"icon" + current + ".png"});
});
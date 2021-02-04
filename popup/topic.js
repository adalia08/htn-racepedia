document.getElementById("myButton").addEventListener("click", printLog);

function printLog() {
    console.log("hello ur mom")
}

function makeColumn() {
    chrome.tabs.executeScript({
        file: 'contentScript.js'
      });
}
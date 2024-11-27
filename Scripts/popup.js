document.getElementById('form_action').addEventListener('submit', (e) => {
    e.preventDefault();
    const locator = document.getElementById('locator').value;
    const strategy = document.getElementById('strategy').value;
    const action = document.getElementById('action').value;
    // console.log(locator);
    // Send the data to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { locator, strategy, action });
    });
});

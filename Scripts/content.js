chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { locator, strategy, action } = request;

    let element;
    switch (strategy) {
        case 'id':
            element = document.getElementById(locator);
            break;
        case 'css':
            element = document.querySelector(locator);
            break;
        case 'xpath':
            element = document.evaluate(
                locator,
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue;
            break;
        default:
            console.error('Unsupported strategy');
            return;
    }

    if (!element) {
        console.error('Element not found');
        return;
    }

    switch (action) {
        case 'click':
            element.click();
            break;
        case 'sendKeys':
            element.value = 'Your Text Here'; // Replace with dynamic text input
            break;
        case 'clear':
            element.value = '';
            break;
        default:
            console.error('Unsupported action');
    }
});

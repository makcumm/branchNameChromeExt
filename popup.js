let copyBranchButton = document.getElementById('copyBranchName');

function copyToClipboardAddBranchNameToPopup(element) {
    navigator.clipboard.writeText(element);

    document.getElementById('branchName').innerText = element;
}

copyBranchButton.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: 'copyBranchName'}, copyToClipboardAddBranchNameToPopup);
    });
};

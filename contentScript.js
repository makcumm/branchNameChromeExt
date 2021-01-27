'use strict';

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === "copyBranchName") {
        let issueNumber = document
            .querySelectorAll("[data-test-id='issue.views.issue-base.foundation.breadcrumbs.breadcrumb-current-issue-container']")[0]
            .querySelectorAll("div[class^='BreadcrumbsItem'] span")[1]
            .innerText;
        let assigne = document
            .querySelectorAll("div[class^='SingleLineTextInput']")[0]
            .innerText
            .match(/\b(\w)/g)
            .join('');
        let summary = document
            .querySelectorAll("h1[data-test-id='issue.views.issue-base.foundation.summary.heading']")[0]
            .innerText
            .replace(/^\W/i, '')
            .replace(/\W+/gi, '_');

        let branchName = issueNumber + '-' + assigne + '-' + summary;

        sendResponse(branchName);
    }
});

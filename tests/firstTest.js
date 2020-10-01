module.exports = {
    '@tags': ['hacker'],
    'My first test case'(browser) {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementPresent('.hnname', 10000)
            .assert.containsText(".hnname", "Hacker News");
    }
}
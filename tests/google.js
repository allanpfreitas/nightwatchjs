module.exports = {
    '@tags': ['google'],
    'Google Advanced Search: Elon Musk'(browser) {
        const mainQuery = "Elon Musk";
        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageSelector = '#lr_button';
        const languageValue = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdown = '#as_qdr_button';
        const lastUpdateDropdownValue = '.goog-menuitem[value="m"]';
        const submitButton = '.jfk-button[type="submit"]';
        const resultPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        const languageResultPage = '[aria-label="Search Italian pages"]';
        const timePeriodoResultPage = '[aria-label="Past month"]';
        
        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageSelector)
            .click(languageValue)
            .click(lastUpdateDropdown)
            .click(lastUpdateDropdownValue)
            .click(submitButton)
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
            .assert.urlContains('as_qdr=m', 'Params: Time period is Last Month')
            .assert.visible(resultPageQuerySelector, 'UI: Elon Musk is set in the search query')
            .assert.containsText(languageResultPage,'Search Italian pages', 'UI: Is displaying the language selected')
            .assert.containsText(timePeriodoResultPage, 'Past month', 'UI: Displays the time period selected')
            .saveScreenshot('tests_output/google.png')


    }
}
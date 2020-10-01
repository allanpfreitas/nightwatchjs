module.exports = {
    '@tags': ['google'],
    '@disabled': true,
    'Google Advanced Search: Elon Musk'(browser) {
        const mainQuery = "Elon Musk";

        const page = browser.page.googleAdvancedSearch(); // declaring the page, it will expose all the elements and custom commands

        const resultPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        const languageResultPage = '//div[normalize-space(text())="Pesquisar páginas em Italiano"]';
        const timePeriodoResultPage = '//div[normalize-space(text())="No último mês"]';
        
        page
            .navigate() //if i dont pass the url it will use the url defined in the page
            .setQuery(mainQuery)
            .selectFilter('@language', "lang_it")
            .selectFilter('@lastUpdateDropdown', "m")
            .search()

            //.perform(() => { debugger; })

        browser
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
            .assert.urlContains('as_qdr=m', 'Params: Time period is Last Month')
            .assert.visible(resultPageQuerySelector, 'UI: Elon Musk is set in the search query')
            .useXpath()
            .assert.containsText(languageResultPage,'Pesquisar páginas em Italiano', 'UI: Is displaying the language selected')
            .assert.containsText(timePeriodoResultPage, 'No último mês', 'UI: Displays the time period selected')
            .saveScreenshot('tests_output/google.png')


    }
}
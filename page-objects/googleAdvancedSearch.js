module.exports = {
    url: 'https://www.google.com/advanced_search',
    elements: {
        
        mainQueryInput : 'input[name="as_q"]',
        language : '#lr_button',
        //languageValue : '.goog-menuitem[value="lang_it"]',
        lastUpdateDropdown : '#as_qdr_button',
        //lastUpdateDropdownValue : '.goog-menuitem[value="m"]',
        submitButton : '.jfk-button[type="submit"]',
    },
    // to add custom commands
    commands: [{
        selectFilter(selector, value) {
            return this
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`);
        },

        setQuery(value) {
            return this
                .setValue('@mainQueryInput', value)
        },

        search() {
            return this
                .click('@submitButton')
        }

    }]
}
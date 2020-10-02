module.exports = {
    '@tags': ['aero'],
    'Check home page title'(browser) {
        browser
            .url(browser.launch_url)
            .assert.title("Aero | Book Luxury Semi-Private Jets All First Class with Direct Flights Mykonos, Ibiza, London & Nice");
    }
}
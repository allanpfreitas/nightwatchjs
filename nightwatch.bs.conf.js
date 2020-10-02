require('dotenv').config();

nightwatch_config = {
    src_folders: ["tests"],

    selenium: {
        "start_process": false,
        "host": "hub-cloud.browserstack.com",
        "port": 80
    },

    common_capabilities: {
        'build': 'nightwatch-aero',
        'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
        'browserstack.debug': true
    },

    test_settings: {
        default: {
            launch_url: 'https://staging.aero.com/'
        },
        chrome: {
            desiredCapabilities: {
                browser: "chrome"
            }
        },
        firefox: {
            desiredCapabilities: {
                browser: "firefox"
            }
        },
        safari: {
            desiredCapabilities: {
                os: "OS X",
                os_version: "Catalina",
                browser: "safari",
                browser_version: "13.0",
            }
        },
        ie: {
            desiredCapabilities: {
                os: "Windows",
                os_version: "10",
                browserName: "IE",
                browser_version: "11.0", 
            }
        }
    }
};

// Code to support common capabilites
for (var i in nightwatch_config.test_settings) {
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
    config['desiredCapabilities'] = config['desiredCapabilities'] || {};
    for (var j in nightwatch_config.common_capabilities) {
        config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
    }
}

module.exports = nightwatch_config;
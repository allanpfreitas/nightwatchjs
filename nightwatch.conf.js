require('dotenv').config();

module.exports =
{
  'src_folders': ['tests'],
  'page_objects_path': ['page-objects'],

  "webdriver": {
    "start_process": true,
    "server_path": require('chromedriver').path,
    "port": 9515
  },

  "test_settings": {
    "default": {
      'screenshots': {
        'enabled': true,
        'on_failure': true,
        'on_error': true,
        'path': 'tests_output/screenshots'
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        'chromeOptions': {
          'args': ['--headless']
        }
      }
    }
  }
};
/*
module.exports = (function (settings) {
  console.log(settings["test_settings"]["default"]["username"])
  if (process.env.LT_USERNAME) {
    settings["test_settings"]["default"]["username"] = process.env.LT_USERNAME;
  }
  if (process.env.LT_ACCESS_KEY) {
    settings["test_settings"]["default"]["access_key"] = process.env.LT_ACCESS_KEY;
  }
  if (process.env.SELENIUM_HOST) {
    settings.selenium.host = process.env.SELENIUM_HOST;
  }
  if (process.env.SELENIUM_PORT) {
    settings.selenium.host = process.env.SELENIUM_PORT;
  }
  return settings;
})(require('./nightwatch.json'));*/

/*nightwatch_config = {
  src_folders : [ "tests" ],

  webdriver : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },

  common_capabilities: {
    'build': 'nightwatch-browserstack',
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    'browserstack.debug': true
  },

  test_settings: {
    default: {},
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
        browser: "safari"
      }
    },
    ie: {
      desiredCapabilities: {
        browser: "internet explorer"
      }
    }
  }
};

// Code to support common capabilites
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
  config['desiredCapabilities'] = config['desiredCapabilities'] || {};
  for(var j in nightwatch_config.common_capabilities){
    config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
  }
}

module.exports = nightwatch_config;
*/
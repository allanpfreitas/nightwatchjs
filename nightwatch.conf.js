module.exports = 
{
    'src_folders' : ['tests'],
    'page_objects_path': ['page-objects'],
  
    "webdriver" : {
      "start_process": true,
      "server_path": "node_modules/.bin/chromedriver",
      "port": 9515
    },
  
    "test_settings" : {
      "default" : {
        "desiredCapabilities": {
          "browserName": "chrome",
          "chromeOptions": {
            "prefs": {
              "intl.accept_languages":"en-AU,en"
            },
            "args": [
              "--incognito",
              "window-size=1920,1080"
            ]
        }
      }
    }
  }
}
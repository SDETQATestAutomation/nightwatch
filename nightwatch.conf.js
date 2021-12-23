
module.exports = {
  nightwatchOutput: true,
  live_output: true,
  disable_colors: false,
  output_folder: "",
  custom_commands_path: "",
  page_objects_path: "",
  globals_path: "",

  test_workers: {
    enabled: false,
    workers: "auto"
  },
  webdriver: {
    start_process: true,
    server_path: require('selenium-webdriver').path,
    log_path: "./",
    host: "127.0.0.1",
    port: 4444,
    cli_args: {
      "webdriver.chrome.driver": "binaries/windows/chromedriver.exe",
    }
  },
  // selenium: {
  //   start_process: true,
  //   version2:false,
  //   server_path: "binaries/windows/selenium-server-standalone-4.0.0-alpha-2.jar",
  //   log_path: "./",
  //   host: "127.0.0.1",
  //   port: 4444,
  //   cli_args: {
  //     "webdriver.chrome.driver": "binaries/windows/chromedriver.exe",
  //   }
  // },
  test_settings: {
    default: {
      launch_url: "http://localhost",
      "selenium.host": "127.0.0.1",
      "selenium.port": 4444,
      silent: true,
      disable_colors: false,
      skip_testcases_on_fail: false,
      end_session_on_fail: false,
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: "./screenshots"
      },
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        elementScrollBehavior: 1,
        chromeOptions: {
          args: [
            "--allow-cross-origin-auth-prompt",
            "--allow-control-allow-origin",
            "-–allow-file-access-from-files",
            "--test-type",
            "disable-infobars",
            "--disable-extensions",
            "--start-maximized",
            "--lang=en"
          ],
          prefs: {
            credentials_enable_service: false,
            profile: { password_manager_enabled: false },
            extentions: {},
            download: {
              'prompt_for_download': false,
              'directory_upgrade': true,
              'default_directory': '/downloads',
            }
          }
        }
      }
    },
  }
};

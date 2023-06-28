
LT_USERNAME = "12981649hfhHRVxwA";      //Enter your LambdaTest username here
LT_ACCESS_KEY = "crcHe7XVoBJl9zNIHCuPvV7K1GHBjuOy0nNTC2Cyu0XmQD70c4";  //Enter your LambdaTest accessKey here

exports.capabilities = {
  'build': 'Mocha-Appium-Sample', //Build name
  'name': 'Mocha-Android', // Test name
  'platformName':'android', // OS name
  "browserName": "Chrome",
  "browserVersion": "114.0",
  'deviceName': 'Galaxy S10', // Device name
  'platformVersion': '11', // OS version
  'app' : 'lt://APP10160631101687539011095626',     // Add app (.apk) url here
  'isRealMobile' : true,
  'visual': true,  // To take step by step screenshot
  'network':true,  // To capture network Logs
  'console':true, // To capture console logs.
  'tunnel': false, // If you want to run the localhost than change it to true
  'locale':'ko',
  'language':'ko'
  }
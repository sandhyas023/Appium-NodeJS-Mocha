
LT_USERNAME = "sandhyas";        //Enter your LambdaTest username here
LT_ACCESS_KEY =  "Zxv9DJUj23o5R0lwZZIPbDkrmTw4Jny5JVBRg2IOzrynXhYQDH";    //Enter your LambdaTest accessKey here

exports.capabilities = {
  'build': 'Mocha-iOS-Sample', //Build name
  'name': 'Mocha-iOS', // Test name
  "browserName": "Safari",
	"browserVersion": "16.0",
  'platformName':'ios', // OS name
  'deviceName': 'iPhone 12 Pro', // Device name
  'platformVersion': '15', // OS version
  'app' : 'lt://APP10160591891684860146491105',     // Add app (.ipa) url here
  'isRealMobile' : true,
  'visual': true,  // To take step by step screenshot
  'network':true,  // To capture network Logs
  'console':true, // To capture console logs.
  'tunnel': false, // If you want to run the localhost than change it to true
  'locale':'FR',
  'language':'fr'
};
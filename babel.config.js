// This file is used to configure Babel for Jest, which is the test runner used.
//
module.exports = {
  // The env property defines different environments and their corresponding configuration settings.
  // env.test.presets property specifies an array of Babel presets to be applied in the test environment
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              // "current" ensures that the code is transpiled to a version
              // of JavaScript compatible with the current Node.js version 
              // used for testing.
              node: 'current'
            }
          }
        ]
      ]
    }
  }
}

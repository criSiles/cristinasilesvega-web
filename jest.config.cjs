// Jest configuration
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  // testEnvironment is needed for vue-test-utils to work with Jest 29
  // jsdom is the default environment for vue-test-utils
  // JSDOM, a JavaScript implementation of the web standards that simulates
  // a browser-like environment during testing.
  testEnvironment: 'jsdom',

  // transform is needed for vue-test-utils to work with Jest 29
  // it is also needed for babel to work with Jest
  // transform is used to transform files with the given extensions
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\js$': 'babel-jest'
  },

  // testRegex is needed for vue-test-utils to work with Jest 29
  // it is also needed for babel to work with Jest
  // testRegex is used to find test files
  // it searches for files located in the /test/ directory or those with a .test.js or .spec.js extension.
  // This pattern allows Jest to discover and run test files that match this criteria.
  testMatch: ['**/*.cjs'],

  // moduleFileExtensions is needed for vue-test-utils to work with Jest 29
  // it is also needed for babel to work with Jest
  // moduleFileExtensions is used to find files with the given extensions
  moduleFileExtensions: ['vue', 'js'],

  // moduleNameMapper is needed for vue-test-utils to work with Jest 29
  // moduleNameMapper is used to map modules to other modules
  // in this case, it is used to map @ to src
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  // coveragePathIgnorePatterns is used to ignore files from coverage
  // coverage means that the files are tested
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],

  // coverage reporters do the coverage report
  // coverage report is a report that shows the coverage of the files
  coverageReporters: ['text', 'json-summary'],

  // testEnvironmentOptions is needed for vue-test-utils to work with Jest 29
  // it is also needed for babel to work with Jest
  testEnvironmentOptions: {
    // customExportConditions means that the files with the given extensions
    // will be tested
    customExportConditions: ['node', 'node-addons']
  }
}

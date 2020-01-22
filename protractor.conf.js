exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      "browserName": 'firefox'
    },
    specs: ['features/*.feature'],
    cucumberOpts: {
      format: 'json:amazonTCReport.json',
      require: [
        'features/stepDefinitions/stepDefinition.js'
      ]
    }
  };
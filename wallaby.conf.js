module.exports = function() {
  process.env.NODE_ENV = 'test';
  return {
    files: [
      'lib/*.js',
      { pattern: '{,**/}*.test.js', ignore: true },
      { pattern: 'wallaby.conf.js', ignore: true }
    ],
    tests: [
      'test/*.js'
    ],
    env: {
      type: 'node'
    },
    testFramework: 'mocha',
    runMode: 'onsave'
  };
};

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: {
          version: '3.19',
          proposals: true
        }
      }
    ],
    [
      '@babel/react',
      {
        runtime: 'automatic'
      }
    ]
  ]
};

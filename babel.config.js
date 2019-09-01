const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage",
        "corejs": "3.0.0",
      },
    ],
  ];
  
  module.exports = function (api) {
    api.cache(true);
  
    // const presets = [ "es2015" ];
    const presets = [  ];
    // const plugins = [ "@babel/plugin-transform-arrow-functions","@babel/plugin-transform-block-scoping" ];
    const plugins = [  ];

    return {
      presets,
      plugins
    };
  }
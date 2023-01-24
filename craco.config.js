// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoAlias = require("craco-alias");
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "tsconfig.paths.json",
        debug: false,
      },
    },
  ],
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules = [
        {
          test: /\.tsx?$/,
          include: path.resolve(__dirname, './src'),
          use: ['ts-loader'],
        },
      ];
      webpackConfig.resolve = {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      };

      return webpackConfig;
    }
  }
};

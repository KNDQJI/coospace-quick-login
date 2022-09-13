/* eslint-disable no-undef */
const path = require("path")
const fs = require("fs")
const WebpackUserscript = require('webpack-userscript')
const dev = process.env.NODE_ENV == 'dev'
module.exports = {
  mode: dev ? 'development' : 'production',
  entry: fs.readdirSync('src').map(item => {
    const name = item.replace('.js', '')
    return { key: name, value: `./src/${item}` }
  }).filter(e=>e.key.includes('-public')||e.key=="index")
  .reduce((obj, item) => (obj[item.key] = item.value, obj), {}),
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].user.js',
    chunkFilename: '[name]',
    publicPath: '',
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new WebpackUserscript({
      headers: {
        name: '[name]',
        version: `[version].[buildTime]`,
        namespace: "http://github.com/KNDQJI/coospace-quick-login",
        match: "https://www.coosp.etr.u-szeged.hu/*",
        require: [],
        resource: [],
        grant: []
      },
      downloadBaseUrl: dev ? "http://localhost:8080" : "https://github.com/KNDQJI/coospace-quick-login/releases/download/latest/",
      updateBaseUrl: dev ? "http://localhost:8080" : "https://github.com/KNDQJI/coospace-quick-login/releases/download/latest/",
    })
  ]
}
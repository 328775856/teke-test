const local = require('../config/local')
const index = require('../config/index')

let conf = {}
switch (process.env.NODE_ENV) {
  case 'development':
    conf = index.dev
    break
  case 'production':
    conf = index.build
    break
}

const config = {
  api: local.api,
  assets: conf.assetsPublicPath
}

module.exports = config

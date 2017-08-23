const config = {}

config.mode = 'production'
config.port = (config.mode === 'production') ? 443 : 3000
config.path = (config.mode === 'production') ? 'http://localhost:' + config.port : 'https://thechun.xyz'

module.exports = config

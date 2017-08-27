const config = {}

config.mode = 'production'
config.port = (config.mode === 'production') ? 443 : 3000
config.path = (config.mode === 'production') ? 'https://thechun.xyz' : 'http://localhost:' + config.port

module.exports = config

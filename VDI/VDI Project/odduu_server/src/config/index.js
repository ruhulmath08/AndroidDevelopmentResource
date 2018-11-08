export default {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3001,
  isServer: process.env.IS_SERVER || false,
  isDev: true
}
//isDev: process.env.NODE_ENV !== 'production'
//isServer: process.env.IS_SERVER || false

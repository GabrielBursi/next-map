// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  chunks: true,
  exclude: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['media.graphassets.com']
  }
})
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com']
  },
}
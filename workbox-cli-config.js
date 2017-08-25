module.exports = {
  "globDirectory": "dist/",
  "swDest": "dist/sw.js",
  "globPatterns": [
    "**/*.{eot,svg,ttf,woff,woff2,jpg,png,mp4,css,js,html}"
  ],
  "globIgnores": [
    "../workbox-cli-config.js"
  ],
  "runtimeCaching": [{
    urlPattern: /.eot|svg|ttf|woff|woff2|png|jpg|mp4$/,
    handler: 'cacheFirst',
    options: {
      cacheName: 'media-cache'
    }
  },{
    urlPattern: /.js|html|css$/,
    handler: 'staleWhileRevalidate',
    options: {
      cacheName: 'data-cache'
    }
  },{
    urlPattern: /\.(?!(eot|svg|ttf|woff|woff2|png|jpg|mp4|js|html|css)).*$/,
    handler: 'networkFirst',
    options: {
      cacheName: 'other-cache',
      networkTimeoutSeconds: 3
    }
  }]
};

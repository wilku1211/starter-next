if (process.env.NODE_ENV === 'production') {
   module.exports = require('./prod.js');/* do deploy heroku jak dev inny '' */
   } else {
   module.exports = require('./dev.js')
   }
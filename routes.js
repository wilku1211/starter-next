const routes = require('next-routes')

      module.exports = routes()                         
.add('blog', '/blog/:slug') //ładuj pages/blog.js, url


//in page Router.pushRoute('/about')

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://salty-tor-53696.herokuapp.com' : 'http://localhost:3000'
}
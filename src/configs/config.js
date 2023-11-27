const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: path.join(__dirname, '../../.env'),
})

module.exports = {
  port: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
}

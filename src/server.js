import dotenv from 'dotenv'

// initialize env
dotenv.config({
  path: './.env',
})

console.log('Node.js server will start on port:', process.env.PORT)

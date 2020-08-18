require('dotenv').config()

let mongoUrl = process.env.MONGODB_URI
let PORT = process.env.PORT

if (process.env.NODE_ENV === 'test') {
    mongoUrl = process.env.TEST_MONGODB_URI
}

module.exports = { mongoUrl, PORT }
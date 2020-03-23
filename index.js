const {Client} = require('./lib/client')
const axios = require('axios')

const vtex = Client({ accountName: 'tste', appKey: "", appToken: "", environment:""})
module.exports = Client
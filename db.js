const Pool = require('pg').Pool
const pool = new Pool({

    user: "iceandrise",
    password: "123456",
    host: "localhost",
    port: "5432",
    database: "mdisubd"
})

module.exports=pool
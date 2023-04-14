const mysql =  require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    database: 'infoware',
    password:'7839',
    port: '3306'
}
)
db.connect((err)=>{
    if(err) throw err;
    console.log("database connected")
})



module.exports = db
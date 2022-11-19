import mysql from 'mysql2/promise';

const db_setting = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }


export default async function handler(req, res) {

    const word = `select * from t_products`;
    const connection = await mysql.createConnection(db_setting);
    const queryresult = await connection.query(word);
    res.status(200).json({ queryresult: queryresult})
    connection.end();

};




// export default ({ query: { word } }, res) => {
//     res.status(200).json({ message: `you requested for ${word} ` });
//    };
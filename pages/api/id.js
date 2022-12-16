import mysql from 'mysql2/promise';
import DbSetting from '../../components/lib/DbSetting';

const db_setting = new DbSetting();


export default async function handler(req, res) {
    const testId =req.query.id;
    const word = `select * from t_products where product_id = ${testId}`;
    const connection = await mysql.createConnection(db_setting);
    const queryresult = await connection.query(word);
    connection.end();
    res.status(200).json({ queryresult: queryresult})

};




// export default ({ query: { word } }, res) => {
//     res.status(200).json({ message: `you requested for ${word} ` });
//    };
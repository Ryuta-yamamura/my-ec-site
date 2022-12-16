import mysql from 'mysql2/promise';
import DbSetting from '../../components/lib/DbSetting';

const db_setting = new DbSetting();


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
import DbSetting from '../../../components/lib/DbSetting';
import mysql from 'mysql2/promise';


export default async function handler(req, res) {
    if(req.method === 'POST')  {
        const formInput = req.body.formInput
        // ここからDBに接続すること
        // console.log(formInput)
        const db_setting = new DbSetting();
        const word = `insert into t_products set ?`;
        const connection = await mysql.createConnection(db_setting);
        const queryresult = await connection.query(word,formInput);
        console.log(queryresult)
        connection.end();
    
        res.status(201).json(formInput)
}
}
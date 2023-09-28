import type { NextApiRequest, NextApiResponse } from 'next'

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE
});
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
  // simple query
  connection.query(
    'SELECT * FROM `attractions` WHERE `id` = ? ',[id],
    function(err, results, fields) {
      res.status(200).json(results)
    }
  );
  
}
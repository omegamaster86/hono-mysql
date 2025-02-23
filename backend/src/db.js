import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || ''
});

connection.connect((err) => {
  if (err) {
    console.error('データベース接続エラー:', err.stack);
    process.exit(1);
  }
  console.log('データベースに接続しました。');
});

export default connection;

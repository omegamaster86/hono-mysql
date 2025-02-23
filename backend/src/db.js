// db.js (ESモジュール形式)
import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',        // データベースのホスト名
    user: 'your_username',    // ユーザー名
    password: 'your_password',// パスワード
    database: 'your_database' // データベース名
});

connection.connect((err) => {
    if (err) {
        console.error('データベース接続エラー:', err.stack);
        process.exit(1); // エラー発生時にプロセス終了
    }
    console.log('データベースに接続しました。');
});

export default connection;

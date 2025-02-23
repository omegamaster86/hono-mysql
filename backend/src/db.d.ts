// src/db.d.ts
declare module './db.js' {
  import { Connection } from 'mysql2';
  const connection: Connection;
  export default connection;
}
export {};
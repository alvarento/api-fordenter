// prisma/seed.ts
import { readFileSync } from 'fs';
import { join } from 'path';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function main() {
   const db = await open({
      filename: './src/DB/database.db',
      driver: sqlite3.Database,
   });

   const sql = readFileSync(join(__dirname, '../src/DB/scripts', 'populate.sql'), 'utf8');

   await db.exec(sql);

   console.log('✅ Seed com populate.sql executado com sucesso!');
}

main().catch((e) => {
   console.error(e);
   process.exit(1);
});

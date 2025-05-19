import { readFile } from 'fs/promises';
import sqlite3 from 'sqlite3';
import path from 'path';
import chalk from 'chalk';

const DB_PATH = path.join(__dirname, '..', 'database.db');
const SQL_PATH = path.join(__dirname, 'populate.sql');


const runPopulate = async () => {
   try {
      const sql = await readFile(SQL_PATH, 'utf-8');
      const db = new sqlite3.Database(DB_PATH);

      db.exec(sql, (err) => {
         if (err) {
            console.error(chalk.red('❌ Erro ao executar populate.sql:'), err.message);
         } else {
            console.log(chalk.green('✅ Dados inseridos com sucesso no banco de dados!'));
         }
         db.close();
      });
   } catch (error: any) {
      console.error(chalk.red('❌ Erro geral:'), error.message);
   }
};

runPopulate();

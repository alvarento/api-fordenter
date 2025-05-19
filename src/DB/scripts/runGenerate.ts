// scripts/init-db.ts
import sqlite3 from 'sqlite3';
import { readFile } from 'fs/promises';
import path from 'path';
import chalk from 'chalk';

const DB_PATH = path.join(__dirname, '..', 'database.db')
const SCHEMA_PATH = path.join(__dirname, 'schema.sql')
const db = new sqlite3.Database(DB_PATH);


const runGenerate = async () => {
   try {
      const schema = await readFile(SCHEMA_PATH, 'utf-8');

      db.exec(schema, (err) => {
         if (err) {
            console.error('Erro ao criar o banco de dados:', err);
         } else {
            console.log(chalk.green('✅ Banco de dados criado com sucesso!'));
         }
         db.close();
      });
   } catch (error: any) {
      console.error(chalk.red('❌ Erro geral:'), error.message);
   }
}

runGenerate();

import { PrismaBetterSQLite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '../../prisma/generated/prisma';

const adapter = new PrismaBetterSQLite3({
   url: "file:./src/DB/database.db"
});
const prisma = new PrismaClient({ adapter });
export default prisma;
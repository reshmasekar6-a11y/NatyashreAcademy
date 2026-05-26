import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serverRoot = path.resolve(__dirname, '..');
const databaseDir = path.join(serverRoot, 'database');

function required(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}. Add it to server/.env first.`);
  }

  return value;
}

function splitSqlStatements(sql) {
  return sql
    .replace(/CREATE DATABASE[\s\S]*?;\s*/gi, '')
    .replace(/USE\s+[`"]?[\w-]+[`"]?\s*;\s*/gi, '')
    .split(/;\s*(?:\r?\n|$)/)
    .map((statement) => statement.trim())
    .filter(Boolean);
}

async function executeSqlFile(connection, fileName) {
  const filePath = path.join(databaseDir, fileName);
  const sql = await fs.readFile(filePath, 'utf8');
  const statements = splitSqlStatements(sql);

  for (const statement of statements) {
    await connection.query(statement);
  }

  console.log(`Imported ${fileName} (${statements.length} statements).`);
}

async function main() {
  const connection = await mysql.createConnection({
    host: required('DB_HOST'),
    port: Number(process.env.DB_PORT || 3306),
    user: required('DB_USER'),
    password: required('DB_PASSWORD'),
    database: required('DB_NAME'),
    ssl: { rejectUnauthorized: false }
  });

  try {
    await executeSqlFile(connection, 'schema.sql');
    await executeSqlFile(connection, 'seed.sql');
    console.log(`Database import complete for ${process.env.DB_NAME}.`);
  } finally {
    await connection.end();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});


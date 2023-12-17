import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
    await sql`CREATE TABLE Users (
        ID SERIAL PRIMARY KEY,
        GitHubUsername VARCHAR(255) UNIQUE,
        CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
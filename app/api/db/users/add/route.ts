import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const githubUsername = searchParams.get('githubUsername');
 
  try {
    if (!githubUsername) throw new Error('githubUsername required');
    await sql`INSERT INTO Users (githubUsername) VALUES (${githubUsername});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const Users = await sql`SELECT * FROM Users LIMIT 10;`;
  return NextResponse.json({ Users }, { status: 200 });
}
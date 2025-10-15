import { NextRequest, NextResponse } from 'next/server'

interface User {
  id: number
  name: string
  email: string
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
]

export async function GET() {
  return NextResponse.json({ users })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const newUser: User = {
    id: users.length + 1,
    ...body
  }
  users.push(newUser)
  return NextResponse.json({ user: newUser }, { status: 201 })
}
import { NextResponse } from 'next/server';
import User from '../../../models/User.js';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // Don't send password in response
    const userWithoutPassword = {
      id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
      age: user.age,
      occupation: user.occupation,
      bio: user.bio,
    };

    return NextResponse.json({ user: userWithoutPassword });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 
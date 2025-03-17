import '../lib/db.js';
import User from '../models/User.js';

const users = [
  {
    username: 'john_doe',
    password: 'password123',
    name: 'John Doe',
    email: 'john@example.com',
    age: 28,
    occupation: 'Software Engineer',
    bio: 'Passionate about coding and technology',
  },
  {
    username: 'jane_smith',
    password: 'password456',
    name: 'Jane Smith',
    email: 'jane@example.com',
    age: 32,
    occupation: 'Product Manager',
    bio: 'Leading product development teams',
  },
  {
    username: 'mike_wilson',
    password: 'password789',
    name: 'Mike Wilson',
    email: 'mike@example.com',
    age: 25,
    occupation: 'UX Designer',
    bio: 'Creating beautiful user experiences',
  },
  {
    username: 'sarah_brown',
    password: 'password321',
    name: 'Sarah Brown',
    email: 'sarah@example.com',
    age: 30,
    occupation: 'Data Scientist',
    bio: 'Analyzing data to solve real-world problems',
  },
];

async function seedDatabase() {
  try {
    // Clear existing users
    await User.deleteMany({});
    
    // Create new users
    const createdUsers = await User.create(users);
    
    console.log('Database seeded successfully');
    console.log('Created users:', createdUsers.map(user => user.username));
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 
import mongoose from 'mongoose';
import { userModel } from './user.js';

await mongoose.connect('mongodb://localhost:27017/iLearn');

// These are your inserted course IDs from your message:
const courseIds = {
  python:    '68662b8c008c33c1e4c59f35',
  design:    '68662b8c008c33c1e4c59f36',
  marketing: '68662b8c008c33c1e4c59f37',
  ml:        '68662b8c008c33c1e4c59f38',
  yoga:      '68662b8c008c33c1e4c59f39',
};

await userModel.create([
  {
    name: 'Alice',
    email: 'alice@example.com',
    password: 'alicepass123',
    gender: 'female',
    dob: new Date('1995-04-10'),
    isVerified: true,
    courses: [courseIds.python, courseIds.ml]
  },
  {
    name: 'Bob',
    email: 'bob@example.com',
    password: 'bobsecure456',
    gender: 'male',
    dob: new Date('1990-06-20'),
    isVerified: false,
    courses: [courseIds.design, courseIds.marketing]
  },
  {
    name: 'Charlie',
    email: 'charlie@example.com',
    password: 'charlie789',
    gender: 'male',
    dob: new Date('1985-11-05'),
    isVerified: true,
    courses: [courseIds.yoga]
  }
]);

console.log("✅ Users created with course references!");
await mongoose.disconnect();

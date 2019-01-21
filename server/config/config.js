const env = process.env.NODE_ENV || 'development';
const testString = 'test';
const devString = 'development';

// console.log(`Comparing [${env}] with [${testString}] and [${devString}]`);
if (env.trim() === devString) {
  process.env.PORT = 3000;
  console.log('Setting development environment');
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env.trim() === testString) {
  console.log('Setting test environment');
  process.env.PORT = 3001;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}

// console.log('Mongo DB URI set to ', process.env.MONGODB_URI );
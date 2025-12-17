const parseFile = require('./src/parsers.js');

try {
  const data1 = parseFile('__tests__/__fixtures__/file1.yml');
  const data2 = parseFile('__tests__/__fixtures__/file2.yml');
  
  console.log('Data from file1.yml:', data1);
  console.log('Data from file2.yml:', data2);
  console.log('Keys in file1:', Object.keys(data1));
  console.log('Keys in file2:', Object.keys(data2));
  console.log('proxy in file1?', data1.hasOwnProperty('proxy'));
  console.log('proxy in file2?', data2.hasOwnProperty('proxy'));
} catch (error) {
  console.error('Error:', error.message);
}

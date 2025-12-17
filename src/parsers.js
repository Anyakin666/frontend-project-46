const fs = require('fs');
const path = require('path');

function readFile(filepath) {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const content = fs.readFileSync(absolutePath, 'utf-8');
  const extension = path.extname(filepath).toLowerCase();
  
  if (extension !== '.json') {
    throw new Error(`Unsupported file format: ${extension}. Only .json is supported`);
  }
  
  return JSON.parse(content);
}

module.exports = { readFile };

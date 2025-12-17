const parseFile = require('./parsers.js');

const buildDiff = (obj1, obj2) => {
  const keys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])].sort();
  
  return keys.flatMap((key) => {
    const has1 = obj1.hasOwnProperty(key);
    const has2 = obj2.hasOwnProperty(key);
    
    if (!has2) {
      return `  - ${key}: ${obj1[key]}`;
    }
    
    if (!has1) {
      return `  + ${key}: ${obj2[key]}`;
    }
    
    if (obj1[key] !== obj2[key]) {
      return [`  - ${key}: ${obj1[key]}`, `  + ${key}: ${obj2[key]}`];
    }
    
    return `    ${key}: ${obj1[key]}`;
  });
};

const formatDiff = (diffLines) => `{\n${diffLines.join('\n')}\n}`;

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  
  const diffLines = buildDiff(data1, data2);
  
  if (format === 'stylish') {
    return formatDiff(diffLines);
  }
  
  return formatDiff(diffLines);
};

module.exports = genDiff;

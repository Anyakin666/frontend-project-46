import { readFile } from './parsers.js';

export default function genDiff(filepath1, filepath2, format = 'stylish') {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  
  return `File 1: ${JSON.stringify(data1, null, 2)}\nFile 2: ${JSON.stringify(data2, null, 2)}\nFormat: ${format}`;
}

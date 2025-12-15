import fs from 'fs';
import path from 'path';

export function readFile(filepath) {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const content = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(content);
}

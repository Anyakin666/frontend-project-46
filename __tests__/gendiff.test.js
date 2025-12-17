import { test, expect, describe } from '@jest/globals';
import path from 'path';
import genDiff from '../src/index.js';

// Простая функция для получения пути к фикстуре
const getFixturePath = (filename) => path.join('__tests__', '__fixtures__', filename);

describe('gendiff', () => {
  test('should compare two flat JSON files correctly', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');
    
    const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
    
    const result = genDiff(filepath1, filepath2);
    expect(result).toBe(expected);
  });
});

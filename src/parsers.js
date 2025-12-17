const { readFileSync } = require('fs');
const { extname } = require('path');
const yaml = require('js-yaml');

const parseJSON = (content) => JSON.parse(content);
const parseYAML = (content) => yaml.load(content);

const parsers = {
  '.json': parseJSON,
  '.yml': parseYAML,
  '.yaml': parseYAML,
};

const parseFile = (filepath) => {
  const content = readFileSync(filepath, 'utf-8');
  const extension = extname(filepath).toLowerCase();
  const parse = parsers[extension];
  
  if (!parse) {
    throw new Error(`Unsupported file format: ${extension}. Supported: .json, .yml, .yaml`);
  }
  
  return parse(content);
};

module.exports = parseFile;

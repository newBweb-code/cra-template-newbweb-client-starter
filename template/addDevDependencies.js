/**
 * addDevDependencies.js
 *
 * Because Create React App only supports merging "dependencies" into package.json, you can use this script
 * to merge the other required keys into your package.json file.
 *
 * Make sure to run npm install afterwards!
 */

const fs = require('fs');
const package = require('./package.json');

console.log('\nMerging devDependencies inside package.json ...');
const additions = {
  devDependencies: {
  ...package.devDependencies,
  "eslint-config-airbnb": "^18.2.0",
  "eslint-plugin-import": "^2.21.2",
  "eslint-plugin-jsx-a11y": "^6.3.1",
  "eslint-plugin-react": "^7.20.0",
  "eslint-plugin-react-hooks": "^4.0.4"
  },
  jest: {
    ...package.jest,
    "snapshotSerializers": ["enzyme-to-json/serializer"]
  },
};

fs.writeFileSync('package.json', JSON.stringify({
  ...package,
  ...additions
}, null, 2));

console.log('\nDone!\n');

const fs = require('fs');

const data = fs.readFileSync('.env', 'utf8');

console.log(data);


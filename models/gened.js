const fs = require('fs').promises;
const path = require('path');
const gened = require('../routes/gened');

class Gened {
    async find(criteria = () => true) {
        const genedPath = path.join(__dirname, 'gened.json');
        const data = await fs.readFile(genedPath, 'utf-8');
        const genedArray = JSON.parse(data);
        return genedArray.filter(criteria);
    }
}

module.exports = new Gened();
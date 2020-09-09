const indexPage = require('../pages/index.json');

const templater = require('../../templater.js');

document.body.insertAdjacentHTML('afterbegin', templater(indexPage));

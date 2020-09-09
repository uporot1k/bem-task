const indexPage = require('../pages/product.json');

const templater = require('../../templater.js');

document.body.insertAdjacentHTML('afterbegin', templater(indexPage));

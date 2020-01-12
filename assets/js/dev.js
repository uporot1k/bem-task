import '../../content.blocks';

const indexPage = require('~/stub/pages/index.json');

const templater = require('~/templater.js');

document.body.insertAdjacentHTML('afterbegin', templater(indexPage));

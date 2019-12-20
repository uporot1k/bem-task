const indexPage = require('~/stub/pages/index.json');

const templater = require('~/templater.js');

document.body.insertAdjacentHTML('afterbegin', templater(indexPage));


document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.querySelector('.onoffswitch');
  bindEvent.apply(themeSwitcher, ["click", switchPageTheme]);

  const historyTransactionCollection = document.querySelectorAll(".history__transaction");
  historyTransactionCollection.forEach(el => bindEvent.apply(el, ["click", toggleHistoryTransactionDetail]));
  
  console.log(historyTransactionCollection);

})

function bindEvent(event, f) {
  this.addEventListener(event, f);
}

function toggleHistoryTransactionDetail() {
  this.classList.toggle("history__transaction_open");
}

function switchPageTheme() {
  this.classList.toggle("onoffswitch_checked");

  const themeColorDefaultCollection = document.querySelectorAll(".theme_color_project-default");
  const themeColorInverseCollection = document.querySelectorAll(".theme_color_project-inverse");

  const themeSwitchableArr = [...themeColorDefaultCollection, ...themeColorInverseCollection];

  themeSwitchableArr.forEach(switchTheTheme);
}

function switchTheTheme(node) {
  if (node.classList.contains("theme_color_project-default")) {
    node.classList.remove("theme_color_project-default");
    node.classList.add("theme_color_project-inverse");
  } else {
    node.classList.remove("theme_color_project-inverse");
    node.classList.add("theme_color_project-default");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', switchPageTheme);
});

function switchPageTheme(e) {
  const node = e.target.closest(".onoffswitch");

  if(!node) return;

  node.classList.toggle("onoffswitch_checked");

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
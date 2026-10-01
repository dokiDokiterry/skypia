const themeToggle = document.querySelector(".theme-toggle");
const themeImage = themeToggle.querySelector("img");
const darkCd = document.querySelector("#dark-cd");

function setTheme(theme) {

  document.documentElement.dataset.theme = theme;

  if (theme === "dark") {

    themeImage.src = "assets/fotos/dans-light.png";
    darkCd.media = "all";

  } else {

    themeImage.src = "assets/fotos/dans-dark.png";
    darkCd.media = "not all";

  }
}


const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (systemDark) {
  setTheme("dark");
} else {
  setTheme("light");
}


themeToggle.addEventListener("click", function () {

  if (document.documentElement.dataset.theme === "dark") {

    setTheme("light");

  } else {

    setTheme("dark");

  }

});
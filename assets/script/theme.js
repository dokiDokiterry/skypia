const themeToggle = document.querySelector(".theme-toggle");
const themeImage = themeToggle.querySelector("img");
const darkCd = document.querySelector("#dark-cd");

function setTheme(theme) {
  // Pas het thema toe op de hele website
  document.documentElement.dataset.theme = theme;

  localStorage.setItem("theme", theme);

  if (theme === "dark") {
    themeImage.src = "assets/fotos/dans-light.png";

    if (darkCd) {
      darkCd.media = "all";
    }
  } else {
    themeImage.src = "assets/fotos/dans-dark.png";

    if (darkCd) {
      darkCd.media = "not all";
    }
  }
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  setTheme(savedTheme);
} else {
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  setTheme(systemDark ? "dark" : "light");
}

themeToggle.addEventListener("click", function () {
  const currentTheme = document.documentElement.dataset.theme;

  if (currentTheme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
});

/* MARK: Cookie dialog
 */

if (cookieDialog) {
  cookieDialog.showModal();
}

/* MARK: Foto's draaien
 */

const button = document.querySelector(".center-btn");

const images = document.querySelector(".img-circle");

if (button && images) {
  button.addEventListener("click", function () {
    images.classList.toggle("draaien");
  });
}
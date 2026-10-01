const themeToggle = document.querySelector(".theme-toggle");

const themeImage = themeToggle.querySelector("img");

const darkCd = document.querySelector("#dark-cd");

const cookieDialog = document.querySelector(".cookie-dialog");


function setTheme(theme) {

  document.documentElement.dataset.theme = theme;

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


const systemDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;


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
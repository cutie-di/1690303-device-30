const writeButton = document.querySelector(".write-us-button");
const writePopup = document.querySelector(".modal-feedback");
const buttonClose = writePopup.querySelector(".modal-close");
const writeForm = writePopup.querySelector(".modal-feedback-form");
const writeName = writePopup.querySelector("[name=your-name]");
const writeEmail = writePopup.querySelector("[name=your-email]");

const mapButton = document.querySelector(".contacts-button-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

const catalogMenuItem = document.querySelector(".catalog-menu-item");
const headerCatalogList = document.querySelector(".header-catalog-list");


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}


writeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");

  if (storage) {
    writeName.value = storage;
    writeEmail.focus();
  } else {
    writeName.focus();
  }
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
  writePopup.classList.remove("modal-error");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writePopup.classList.remove("modal-show");
      writePopup.classList.remove("modal-error");
    }
  }
});


writeForm.addEventListener("submit", function (evt) {
  if (!writeName.value || !writeEmail.value) {
    evt.preventDefault();

    writePopup.classList.remove("modal-error");
    writePopup.offsetWidth = writePopup.offsetWidth;
    writePopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", writeName.value);
    }
  }
});


mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});


catalogMenuItem.addEventListener("mouseover", function (evt) {
  evt.preventDefault();
  headerCatalogList.classList.add("header-catalog-show");
});

catalogMenuItem.addEventListener("mouseout", function (evt) {
  evt.preventDefault();
  headerCatalogList.classList.remove("header-catalog-show");
});

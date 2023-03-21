const contents = document.querySelector(".manu-conteiner");
const close = document.querySelector(".close");
const background = document.querySelector(".background");
const manu = document.querySelector(".menu");
const left = document.querySelector(".button-left");
const right = document.querySelector(".button-right");
const images = document.querySelector(".image");
const cartBox = document.querySelector(".card-box");
const purchise = document.querySelector(".purchise");
const mainImage = document.querySelector(".desktop-images-main-image");
const miniImage = document.querySelectorAll(".mini-image");
const desktopMiniImage = document.querySelector(".desktop-mini-image");
const absoluteImages = document.querySelectorAll(".absolute-mini-image");
const absoluteLeft = document.querySelector(".absolute-button-left");
const absoluteRight = document.querySelector(".absolute-button-right");
const logo = document.querySelector(".logo");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const productNumber = document.querySelector(".count");
const content = document.querySelector(".card-content");
const delate = document.querySelector(".delate-purchise-content");
const productImage = document.querySelector(".buy-image");
const priceBox = document.querySelector(".price-box");
const totalPrice = document.querySelector(".price");
const purchiseCount = document.querySelector(".purchise-count");
const addCart = document.querySelector(".add-to-cart-box");
const realPrice = document.querySelector(".real-price");
content.style.display = "flex";
let countCartBox = 0;
let countImage = 1;
let absoluteCount = 1;
let productCount = 0;

// reduce sneakers
minus.addEventListener("click", () => {
  if (productCount > 0) {
    productCount--;
    realPrice.innerHTML = `$ ${125 * productCount}.00`;
  }
  productNumber.innerHTML = productCount;
});

// add new sneakers
plus.addEventListener("click", () => {
  productCount++;
  productNumber.innerHTML = productCount;
  if (productCount > -1) {
    realPrice.innerHTML = `$${125 * productCount}.00`;
  }
});

// add purchise result in basket width add cart button listener
let countCart = 0;
addCart.addEventListener("click", () => {
  countCart++;
  let elem = document.createElement("div");
  elem.classList.add("card-content-first-box");
  elem.innerHTML = `
        <img class = "buy-image" src = ${
          document.querySelector(".menu").style.display == "flex"
            ? images.src
            : document.querySelector(".desktop-images-main-image").src
        }>
        <div class = "buy-description">
            <span class = "buy-name">
                Fall Limited Edition Sneakers
            </span>
            <span class = "price-box">
                $125.00 x ${Number(
                  document.querySelector(".count").innerHTML
                )} <span class = "price">${
    document.querySelector(".real-price").innerHTML
  }</span>
            </span>
            </div>
            <img src = "images/icon-delete.svg" class = "delate-purchise-content">
        </div> `;
  if (countCart > 0 && countCart == 1) {
    if (productCount > 0) {
      content.style.display = "flex";
      document.querySelector(".empty").style.display = "none";
      let check = document.createElement("button");
      check.classList.add("checkout");
      check.innerHTML = "Checkout";
      purchiseCount.style.display = "flex";
      purchiseCount.innerHTML = document.querySelector(".count").innerHTML;
      content.append(elem);
      content.append(check);
    }
  } else if (countCart < 3) {
    document.querySelector(".card-content-first-box").style.display = "none";
    document.querySelector(".checkout").style.display = "none";

    content.style.display = "none";
    let elemNext = document.createElement("div");
    elemNext.classList.add("card-content-first-box");
    elemNext.innerHTML = `
            <img class = "buy-image" src = ${
              document.querySelector(".menu").style.display == "flex"
                ? images.src
                : document.querySelector(".desktop-images-main-image").src
            }>
            <div class = "buy-description">
                <span class = "buy-name">
                    Fall Limited Edition Sneakers
                </span>
                <span class = "price-box">
                    $125.00 x ${Number(
                      document.querySelector(".count").innerHTML
                    )} <span class = "price">${
      document.querySelector(".real-price").innerHTML
    }</span>
                </span>
                </div>
                <img src = "images/icon-delete.svg" class = "delate-purchise-content">
            </div> `;
    content.style.display = "flex";
    document.querySelector(".empty").style.display = "none";
    let checkOne = document.createElement("button");
    checkOne.classList.add("checkout");
    checkOne.innerHTML = "Checkout";
    purchiseCount.style.display = "flex";
    purchiseCount.innerHTML = document.querySelector(".count").innerHTML;
    content.append(elemNext);
    content.append(checkOne);
  } else {
    cartBox.classList.add("cant");
  }
});

// open mobile manu
manu.addEventListener("click", () => {
  contents.classList.add("first-transition-content");
  background.classList.add("first-background-transition");
  background.classList.remove("background-transition");
  contents.classList.remove("transition-content");
  document.body.classList.add("overflow");
});

// close mobile manu
close.addEventListener("click", () => {
  contents.classList.add("transition-content");
  contents.classList.remove("first-transition-content");
  background.classList.add("background-transition");
  contents.classList.remove("first-transition-content");
  document.body.classList.remove("overflow");
});

// next image
right.addEventListener("click", () => {
  if (countImage < 4) {
    countImage++;
  }
  images.src = `https://bekachaduneli.github.io/ecommerce-product-page/images/image-product-${countImage}.jpg`;
});

// previous image
left.addEventListener("click", () => {
  if (countImage > 1) {
    countImage--;
  }
  images.src = `https://bekachaduneli.github.io/ecommerce-product-page/images/image-product-${countImage}.jpg`;
});

// cart box
purchise.addEventListener("click", () => {
  countCartBox++;
  if (countCartBox % 2 == 1) {
    cartBox.style.display = "flex";
  } else {
    cartBox.style.display = "none";
  }
});

logo.addEventListener("click", () => {
  countCartBox++;
  if (countCartBox % 2 == 1) {
    cartBox.style.display = "flex";
  } else {
    cartBox.style.display = "none";
  }
});

// image transition listeners
for (let i = 0; i < 4; i++) {
  miniImage[i].addEventListener("click", () => {
    miniImage[0].classList.remove("mini-image-hover");
    miniImage[1].classList.remove("mini-image-hover");
    miniImage[2].classList.remove("mini-image-hover");
    miniImage[3].classList.remove("mini-image-hover");
    miniImage[i].classList.add("mini-image-hover");
    mainImage.src = `https://bekachaduneli.github.io/ecommerce-product-page/images/image-product-${
      i + 1
    }.jpg`;
  });
  // add main image box on middle of screen
  mainImage.addEventListener("click", () => {
    document.querySelector(".absolute-desktop-images-box").style.display =
      "flex";
    document.querySelector(".desktop-background").style.width = "100%";
    document.querySelector(
      ".absolute-desktop-images-main-image"
    ).src = `https://bekachaduneli.github.io/ecommerce-product-page/images/image-product-${absoluteCount}.jpg`;
  });
}

// absolute image transition listener
for (let i = 0; i < 4; i++) {
  absoluteImages[i].addEventListener("click", () => {
    absoluteImages[0].classList.remove("mini-image-hover");
    absoluteImages[1].classList.remove("mini-image-hover");
    absoluteImages[2].classList.remove("mini-image-hover");
    absoluteImages[3].classList.remove("mini-image-hover");
    absoluteImages[i].classList.add("mini-image-hover");
    document.querySelector(
      ".absolute-desktop-images-main-image"
    ).src = `https://bekachaduneli.github.io/ecommerce-product-page/images/image-product-${
      i + 1
    }.jpg`;
  });
}

// absolute image transition width left button
absoluteLeft.addEventListener("click", () => {
  absoluteCount--;
  console.log(absoluteCount);
  if (absoluteCount == 0) {
    absoluteCount = 4;
  }
  document.querySelector(
    ".absolute-desktop-images-main-image"
  ).src = `https://bekachaduneli.github.io/ecommerce-product-page/images/image-product-${absoluteCount}.jpg`;
  absoluteImages[0].classList.remove("mini-image-hover");
  absoluteImages[1].classList.remove("mini-image-hover");
  absoluteImages[2].classList.remove("mini-image-hover");
  absoluteImages[3].classList.remove("mini-image-hover");
  absoluteImages[absoluteCount - 1].classList.add("mini-image-hover");
});

// absolute image transition width right button
absoluteRight.addEventListener("click", () => {
  console.log(absoluteCount);
  absoluteCount++;
  if (absoluteCount == 5) {
    absoluteCount = 1;
  }
  document.querySelector(
    ".absolute-desktop-images-main-image"
  ).src = `https://bekachaduneli.github.io/ecommerce-product-page/images/image-product-${absoluteCount}.jpg`;
  absoluteImages[0].classList.remove("mini-image-hover");
  absoluteImages[1].classList.remove("mini-image-hover");
  absoluteImages[2].classList.remove("mini-image-hover");
  absoluteImages[3].classList.remove("mini-image-hover");
  absoluteImages[absoluteCount - 1].classList.add("mini-image-hover");
});

// close absolute imagess
document.querySelector(".absolute-close").addEventListener("click", () => {
  document.querySelector(".absolute-desktop-images-box").style.display = "none";
  document.querySelector(".desktop-background").style.width = "0%";
});

// logo clicker
logo.addEventListener("click", () => {
  logo.classList.toggle("border");
});

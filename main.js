var myImgs = Array.from(document.querySelectorAll(".item img"));
console.log(myImgs);

var lightBoxContainer = document.querySelector("#light-box-container");

var lightBox = document.querySelector("#light-box");

var closeBtn = document.querySelector("#close-btn");

var nextBtn = document.querySelector("#next-btn");

var prevBtn = document.querySelector("#prev-btn");

var currentIndex = 0;

for (var i = 0; i < myImgs.length; i++) {
  myImgs[i].addEventListener("click", function (e) {
    var currentImgSrc = e.target.getAttribute("src");
    currentIndex = myImgs.indexOf(e.target);
    lightBoxContainer.classList.replace("d-none", "d-flex");
    lightBox.style.backgroundImage = `url(${currentImgSrc})`;
  });
}

closeBtn.addEventListener("click", close);

function close() {
  lightBoxContainer.classList.replace("d-flex", "d-none");
}

nextBtn.addEventListener("click", next);

function next() {
  currentIndex++;
  if (currentIndex >= myImgs.length) {
    currentIndex = 0;
  }
  lightBox.style.backgroundImage = `url(${myImgs[currentIndex].getAttribute(
    "src"
  )})`;
}

prevBtn.addEventListener("click", prev);

function prev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = myImgs.length - 1;
  }
  lightBox.style.backgroundImage = `url(${myImgs[currentIndex].getAttribute(
    "src"
  )})`;
}

document.addEventListener("keyup", function (e) {
  if (lightBoxContainer.classList.contains("d-flex")) {
    switch (e.key) {
      case "ArrowLeft":
        prev();
        break;
      case "ArrowRight":
        next();
        break;
      case "Escape":
        close();
        break;
    }
  }
});

document.addEventListener("click", function (e) {
  if (e.target == lightBoxContainer) {
    close();
  }
});

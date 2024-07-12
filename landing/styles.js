window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const screenWidth = window.innerWidth;

  if (screenWidth > 768) {
    if (window.scrollY > 20) {
      header.style.top = "0px";
    } else {
      header.style.top = "20px";
    }
  } else {
    header.style.top = "0px";
  }
});

function calculateTop() {
  const screenWidth = window.innerWidth;
  const imageElement = document.querySelector(".intro-bg-image-mobile");

  if (screenWidth <= 530) {
    const topValue = -0.2 * screenWidth - 520;
    imageElement.style.top = `${topValue}px`;
  } else {
    imageElement.style.top = "";
  }
}

window.addEventListener("resize", calculateTop);
calculateTop();

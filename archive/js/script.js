const header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if (scrollY > 50) {
        header.style.backgroundColor = "rgba(74, 108, 247, .2)"
        header.style.backdropFilter = "blur(15px)"
    }else {
        header.style.backgroundColor = "transparent"
        header.style.backdropFilter = "blur(0px)"
    }
})
const mood = document.getElementById("change-mood");
const root = document.getElementById("root")
mood.addEventListener("click", function (){
   if ( root.classList.contains("dark")){
       root.classList.remove("dark")
   } else {
       root.classList.add("dark")
   }
})


window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("container").addEventListener("click", e => {
    const tgt = e.target;
    if (!tgt.matches(".myImg") && !tgt.matches(".close")) return; // not the image or close
    const parent = tgt.closest("div.myndir-a4");
    const modal = parent.querySelector('.modal');
    if (tgt.matches(".close")) {
      modal.hidden = true;
      return;
    }
    const modalImg = parent.querySelector("img.modal-content");
    const captionText = parent.querySelector(".caption");
    modal.hidden = false;
    modalImg.src = tgt.src;
    captionText.innerHTML = tgt.alt;
  });
});

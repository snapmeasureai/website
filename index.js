document.addEventListener("DOMContentLoaded", function () {
  // Accordion logic
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const header = accordion;
    const content = accordion.querySelector(".accordion__content");
    const icon = accordion.querySelector(".accordion__icon");

    header.addEventListener("click", () => {
      const isVisible = content.classList.contains("visible");

      if (isVisible) {
        content.classList.remove("visible");
        content.classList.add("hidden");
        icon.classList.remove("accordion__icon--close");
        icon.classList.add("accordion__icon--open");
      } else {
        content.classList.remove("hidden");
        content.classList.add("visible");
        icon.classList.remove("accordion__icon--open");
        icon.classList.add("accordion__icon--close");
      }
    });
  });

  // Tab and pagination logic
  const tabs = document.querySelectorAll(".models__tab");
  const paginationItems = document.querySelectorAll(".models__pagination-item");
  const prevButtonMob = document.getElementById("prev-button-mob");
  const nextButtonMob = document.getElementById("next-button-mob");
  const prevButtonDesk = document.getElementById("prev-button-desk");
  const nextButtonDesk = document.getElementById("next-button-desk");
  const modelImage = document.getElementById("model-image");
  let currentIndex = 1;
  const totalTabs = tabs.length;

  const imageTexts = {
    1: "SnapMeasureAI can handle any body type, pose or background. Notice the multiple doors, outlets, rug, and desk in the background.",
    2: "Measurement accuracy within 0.70 cm or 0.27 in. Accurate across all length and circumference measurement types.",
    3: "After uploading images or a video, the output is an accurate 3D body avatar and precise body measurements.",
    4: "This body pose differs from the first image. SnapMeasureAI can handle any body pose.",
    5: "The user is turned around in this image. You can see the overlaid body model is also turned around, as the nose is not visible.",
    6: "SnapMeasureAI makes predictions of non-visible body parts. The final body model is a combination of all views. Visible body parts from other views have higher weights.",
  };

  function updateActiveTab(index) {
    tabs.forEach((tab) => {
      tab.classList.remove("models__tab-active");
    });
    const activeTab = document.querySelector(
      `.models__tab[data-tab="${index}"]`
    );
    activeTab.classList.add("models__tab-active");

    paginationItems.forEach((item) => {
      item.classList.remove("models__pagination-active");
    });
    const activePaginationItem = document.querySelector(
      `.models__pagination-item[data-page="${index}"]`
    );
    activePaginationItem.classList.add("models__pagination-active");

    modelImage.src = `./assets/images/models-${index}.webp`;

    currentIndex = index;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      const index = parseInt(event.currentTarget.getAttribute("data-tab"));
      updateActiveTab(index);
    });
  });

  paginationItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const index = parseInt(event.currentTarget.getAttribute("data-page"));
      updateActiveTab(index);
    });
  });

  prevButtonMob.addEventListener("click", () => {
    const newIndex = currentIndex > 1 ? currentIndex - 1 : totalTabs;
    updateActiveTab(newIndex);
  });

  nextButtonMob.addEventListener("click", () => {
    const newIndex = currentIndex < totalTabs ? currentIndex + 1 : 1;
    updateActiveTab(newIndex);
  });

  prevButtonDesk.addEventListener("click", () => {
    const newIndex = currentIndex > 1 ? currentIndex - 1 : totalTabs;
    updateActiveTab(newIndex);
  });

  nextButtonDesk.addEventListener("click", () => {
    const newIndex = currentIndex < totalTabs ? currentIndex + 1 : 1;
    updateActiveTab(newIndex);
  });

  updateActiveTab(currentIndex);

  // Modal logic for images
  const imageModal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const modalClose = document.getElementById("modal-close");
  const modalText = document.querySelector(".modal__text");

  function openImageModal(imageSrc, text) {
    modalImage.src = imageSrc;
    modalText.textContent = text;
    imageModal.style = "display: flex !important;";
  }

  function closeImageModal() {
    imageModal.style.display = "none";
    modalImage.src = "";
  }

  modelImage.addEventListener("click", () => {
    const imageSrc = modelImage.src;
    const text = imageTexts[currentIndex];
    openImageModal(imageSrc, text);
  });

  modalClose.addEventListener("click", closeImageModal);

  imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
      closeImageModal();
    }
  });

/*
  // Modal logic for videos
  const videoModal = document.getElementById("video-modal");
  const videoContainer = document.getElementById("video-container");
  const videoModalClose = document.getElementById("video-modal-close");
  const watchButton1 = document.getElementById("watch-button-1");
  const watchButton2 = document.getElementById("watch-button-2");
  const watchButton3 = document.getElementById("watch-button-3");
  const watchButton4 = document.getElementById("watch-button-4");

  function openVideoModal(videoSrc) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const maxWidth = viewportWidth * 0.8;
    const aspectRatio = 560 / 315; // Aspect ratio of the YouTube player

    let width = maxWidth;
    let height = maxWidth / aspectRatio;

    if (height > viewportHeight * 0.8) {
      height = viewportHeight * 0.8;
      width = height * aspectRatio;
    }

    const iframe = document.createElement("iframe");
    iframe.width = width;
    iframe.height = height;
    iframe.src = videoSrc;
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    videoContainer.innerHTML = "";
    videoContainer.appendChild(iframe);
    videoModal.style.display = "flex";
  }

  function closeVideoModal() {
    videoModal.style.display = "none";
    videoContainer.innerHTML = "";
  }

  watchButton1.addEventListener("click", () => {
    openVideoModal(
      "https://www.youtube.com/embed/mre_clTbn9U?si=otZqgqiigJr97FA2"
    );
  });

  watchButton2.addEventListener("click", () => {
    openVideoModal(
      "https://www.youtube.com/embed/RKO6Ss5aMbQ?si=_yXzWRGmJwsafzda"
    );
  });

  watchButton3.addEventListener("click", () => {
    openVideoModal(
      "https://www.youtube.com/embed/mre_clTbn9U?si=otZqgqiigJr97FA2"
    );
  });

  watchButton4.addEventListener("click", () => {
    openVideoModal(
      "https://www.youtube.com/embed/RKO6Ss5aMbQ?si=_yXzWRGmJwsafzda"
    );
  });

  videoModalClose.addEventListener("click", closeVideoModal);

  videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) {
      closeVideoModal();
    }
  });
*/

  document.addEventListener('dblclick', function(event) {
    event.preventDefault();
  }, { passive: false });
/*
  // Smooth scroll for links with offset
  const links = document.querySelectorAll(".header__nav-link");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = 105;

      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
*/

document.querySelector('#demo-video').addEventListener('click', () => {
  const target = document.getElementById('demo-video');
  target.scrollIntoView(true);
  /*const diff = target.getBoundingClientRect().top - target.getBoundingClientRect().bottom;
  if (diff < 0) {
    window.scrollBy(0, diff);
  }*/
});
});
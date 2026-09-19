const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImg.src = item.dataset.full;
    lightboxImg.alt = item.querySelector("img").alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}
closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if(e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeLightbox();
});

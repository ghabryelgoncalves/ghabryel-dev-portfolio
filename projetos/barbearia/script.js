const WHATSAPP_NUMBER = "5500000000000";
const WHATSAPP_MESSAGE = "Olá! Vi o site da Blade House e quero agendar um horário.";

document.querySelectorAll("[data-whatsapp]").forEach(a => {
  a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
});

const menu = document.querySelector(".menu");
const mobile = document.querySelector(".mobile-nav");
menu?.addEventListener("click", () => {
  mobile.classList.toggle("open");
  menu.textContent = mobile.classList.contains("open") ? "×" : "☰";
});
document.querySelectorAll(".mobile-nav a").forEach(a => a.addEventListener("click", () => {
  mobile.classList.remove("open");
  menu.textContent = "☰";
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");
document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImg.src = item.dataset.full;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}
document.querySelector(".close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeLightbox(); });

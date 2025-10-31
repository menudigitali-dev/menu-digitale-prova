// === ELEMENTI DELLA PAGINA ===
const exploreBtn = document.getElementById("explore-btn");
const homeSection = document.getElementById("home");
const menuSection = document.getElementById("menu");
const categoryButtons = document.querySelectorAll(".cat-btn");

// === EVENTO: clic su "Esplora il menu" ===
if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    // Nasconde la home e mostra il menu
    homeSection?.classList.add("hidden");
    menuSection?.classList.remove("hidden");

    // Scorre in alto in modo fluido
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// === EVENTO: clic su una categoria ===
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-section");

    // Se il pulsante ha un link esterno (es. "antipasti.html"), aprilo
    if (btn.dataset.link) {
      window.location.href = btn.dataset.link;
    }
    // Altrimenti gestisci il comportamento interno (se mai servirà)
    else if (target) {
      const sectionEl = document.getElementById(target);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

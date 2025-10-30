const exploreBtn = document.getElementById("explore-btn");
const menuSection = document.getElementById("menu");
const menuItemsContainer = document.getElementById("menu-items");
const categoryButtons = document.querySelectorAll(".cat-btn");

// Quando clicchi “Esplora il nostro menu”
exploreBtn.addEventListener("click", () => {
  document.getElementById("home").style.display = "none";
  menuSection.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Liste di piatti per categoria
const dishes = {
  antipasti: [
    { name: "Bruschetta al Pomodoro", desc: "Pane croccante con pomodoro fresco e basilico.", price: "€5,00", img: "images/bruschetta.jpg" },
    { name: "Tagliere di Salumi", desc: "Selezione di salumi e formaggi italiani.", price: "€9,00", img: "images/tagliere.jpg" }
  ],
  primi: [
    { name: "Spaghetti alla Carbonara", desc: "Con guanciale, uova e pecorino romano.", price: "€10,00", img: "images/carbonara.jpg" },
    { name: "Lasagna alla Bolognese", desc: "Con ragù di carne e besciamella fatta in casa.", price: "€11,00", img: "images/lasagna.jpg" }
  ],
  secondi: [
    { name: "Tagliata di Manzo", desc: "Servita con rucola e scaglie di grana.", price: "€15,00", img: "images/tagliata.jpg" },
    { name: "Pollo al Forno", desc: "Con patate e rosmarino.", price: "€12,00", img: "images/pollo.jpg" }
  ],
  dessert: [
    { name: "Tiramisù", desc: "Classico con mascarpone e caffè.", price: "€6,00", img: "images/tiramisu.jpg" },
    { name: "Panna Cotta", desc: "Con salsa ai frutti di bosco.", price: "€5,00", img: "images/pannacotta.jpg" }
  ],
  bevande: [
    { name: "Vino Rosso", desc: "Della casa, corposo e profumato.", price: "€4,00", img: "images/vino.jpg" },
    { name: "Acqua Naturale", desc: "Bottiglia da 0.5L.", price: "€1,50", img: "images/acqua.jpg" }
  ]
};

// Mostra i piatti di una categoria
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const section = btn.dataset.section;
    const selected = dishes[section];

    // Mostra la lista dei piatti
    menuItemsContainer.innerHTML = selected.map(dish => `
      <div class="menu-item">
        <img src="${dish.img}" alt="${dish.name}">
        <div class="menu-info">
          <h3>${dish.name}</h3>
          <p>${dish.desc}</p>
          <span class="price">${dish.price}</span>
        </div>
      </div>
    `).join("");

    menuItemsContainer.classList.remove("hidden");
    menuItemsContainer.scrollIntoView({ behavior: "smooth" });
  });
});


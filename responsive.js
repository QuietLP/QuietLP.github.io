const menu = document.querySelector(".menu-horizontal");

// Selecciona el botón para abrir el menú
const openMenuBtn = document.querySelector(".open-menu");

// Selecciona el botón para cerrar el menú
const closeMenuBtn = document.querySelector(".close-menu");

// Función para alternar la visibilidad del menú
function toggleMenu() {
  menu.classList.toggle("menu_opened"); // Agrega o quita la clase 'menu_opened'
  if (menu.classList.contains("menu_opened")) {
    openMenuBtn.style.display = "none"; // Oculta el botón de abrir
    closeMenuBtn.style.display = "block"; // Muestra el botón de cerrar
  } else {
    openMenuBtn.style.display = "block"; // Muestra el botón de abrir
    closeMenuBtn.style.display = "none"; // Oculta el botón de cerrar
  }
}

// Agrega un evento de clic al botón de abrir para llamar a 'toggleMenu'
openMenuBtn.addEventListener("click", toggleMenu);

// Agrega un evento de clic al botón de cerrar para llamar a 'toggleMenu'
closeMenuBtn.addEventListener("click", toggleMenu);

// Selecciona todos los enlaces del menú que apuntan a secciones de la página
const menuLinks = document.querySelectorAll('.menu-horizontal a[href^="#"]');

// Crea un observador que resalta el enlace correspondiente a la sección visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(
        `.menu-horizontal a[href="#${id}"]`
      );

      if (entry.isIntersecting) {
        // Remueve la clase 'selected' del enlace previamente seleccionado
        document
          .querySelector(".menu-horizontal a.selected")
          .classList.remove("selected");
        // Agrega la clase 'selected' al enlace correspondiente
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" } // Margen para la observación de intersección
);

// Agrega un evento de clic a cada enlace del menú para cerrar el menú al hacer clic
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened"); // Cierra el menú al hacer clic en un enlace
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target); // Observa la sección correspondiente al enlace
  }
});

// Escucha el evento de redimensionamiento de la ventana para ajustar el menú y los botones
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    // Cierra el menú y oculta los botones en pantallas grandes
    menu.classList.remove("menu_opened");
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "none";
  } else {
    // Muestra el botón de abrir en pantallas pequeñas
    openMenuBtn.style.display = "block";
  }
});

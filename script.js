ScrollReveal().reveal(".textbox, .personage-image, .navbar", {
  distance: "30px", // Distance de décalage lors de la révélation
  origin: "bottom", // Point d'origine de la révélation
  duration: 1000, // Durée de l'animation en millisecondes
  delay: 200, // Délai avant le début de l'animation en millisecondes
  easing: "cubic-bezier(0.5, 0, 0, 1)", // Courbe d'animation
  interval: 200, // Délai entre chaque élément révélé
});

const header = document.querySelector(".header");

// Ajoutez un écouteur d'événement de défilement
window.addEventListener("scroll", () => {
  // Vérifiez la position de défilement
  if (window.scrollY > 100) {
    // Modifiez la valeur en fonction de la position souhaitée pour changer la couleur
    header.style.color = "black"; // Couleur de texte lorsque vous faites défiler
  } else {
    header.style.color = "white"; // Couleur de texte par défaut
  }
});

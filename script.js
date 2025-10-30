document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    fr: {
      "nav-presentation": "Présentation",
      "nav-competences": "Compétences",
      "nav-projects": "Projets",
      "nav-contact": "Me Contacter",
      "title-main": "Portfolio Endy TURRIN",
      "presentation-text": "Bonjour, je me nomme <strong>Endy</strong> et je suis actuellement étudiant au <strong>CNAM ENJMIN</strong>. J’aimerais pouvoir, lors de mes études supérieures, me spécialiser dans la programmation de jeux vidéo. J’ai actuellement plusieurs compétences en programmation orientés jeux vidéo. Je maîtrise des logiciels tel que unity, je sais maîtriser des langages de programmation tel que <strong>le C#, le C++, le SQL, le python, le html, le CSS et le Java Script et je maitrise github et Unity</strong>. Je suis un passionné de jeux vidéo et j’adore le sport, le dessin, les échecs ainsi que les films et séries d’animation.",
      "skills-title": "Compétences",
      "projects-title": "Projets",
      "contact-title": "Contactez moi",
      "footer-text": "© 2025 Endy Turrin - Tous droits réservés",
      "label-name": "Nom",
      "label-email": "Email",
      "label-message": "Message",
      "invaders-goal": "But : reproduire le jeu Space Invaders",
      "invaders-tools": "Outils : Thonny",
      "invaders-lang": "Langage de programmation : Python",
      "invaders-time": "Temps : 12h",
      "platformer-goal": "But : créer mon premier platformer 2D à l’aide de tutos YouTube et apprendre à maîtriser le C# ainsi que Unity.",
      "platformer-tools": "Outils : Unity",
      "platformer-lang": "Langage de programmation : C#",
      "platformer-status": "En cours",
      "shootemup-goal": "But : créer un Shoot’Em Up, en autonomie, où le joueur doit survivre à des vagues de zombies.",
      "shootemup-tools": "Outils : Unity",
      "shootemup-lang": "Langage de programmation : C#",
      "shootemup-status": "En cours",
      "nsi-goal": "But : créer un algorithme en Python permettant de générer un paysage avec un nombre d’éléments aléatoire grâce au module Turtle.",
      "nsi-tools": "Outils : Thonny",
      "nsi-lang": "Langage de programmation : Python",
      "nsi-time": "Temps : 3h",
      "JAM-goal": "But : Ce jeu a été créé pour le JAM annuel du CNAM ENJMIN. Le thème était : Ça finit toujours comme ça.",
      "JAM-tools": "Outils : Unity",
      "JAM-lang": "Langage de programmation : C#",
      "JAM-time": "Temps : 3 days",
      "JAM-link": "Page itch: ",
      "solo": "(Seul)",
      "groupe": "(En groupe)",
      "legal-title": "Mentions légales",
      "legal-owner-label": "Propriétaire du site :",
      "legal-owner": "Endy TURRIN",
      "legal-contact-label": "Contact :",
      "legal-phone": "+33 7 66 14 79 70",
      "legal-host-label": "Hébergeur :",
      "legal-host": "GitHub Pages",
      "legal-credits-label": "Crédits :",
      "legal-credits": "Conception et développement par Endy TURRIN.",
      "legal-rights": "Les images, logos et vidéos présents sur ce site sont la propriété de leurs auteurs respectifs. Toute reproduction, même partielle, est interdite sans autorisation préalable.",
      "legal-btn": "© Mentions légales"
    },
    en: {
      "nav-presentation": "Presentation",
      "nav-competences": "Skills",
      "nav-projects": "Projects",
      "nav-contact": "Contact",
      "title-main": "Endy TURRIN Portfolio",
      "presentation-text": "Hello, my name is <strong>Endy</strong> and I am currently a student at <strong>CNAM ENJMIN</strong>. During my higher education, I would like to specialize in video game programming. I currently have several skills in game-oriented programming. I am proficient in software such as Unity, and I know programming languages including <strong>C#, C++, SQL, Python, HTML, CSS, and JavaScript, and I am proficient with GitHub and Unity</strong>. I am passionate about video games and I also love sports, drawing, chess, as well as animated films and series.",
      "skills-title": "Skills",
      "projects-title": "Projects",
      "contact-title": "Contact me",
      "footer-text": "© 2025 Endy Turrin - All rights reserved",
      "label-name": "Name",
      "label-email": "Email",
      "label-message": "Message",
      "invaders-goal": "Goal : Recreate the Space Invaders game",
      "invaders-tools": "Tools : Thonny",
      "invaders-lang": "Programming language : Python",
      "invaders-time": "Time : 12h",
      "platformer-goal": "Goal: Create my first 2D platformer using YouTube tutorials and learn to master C# and Unity.",
      "platformer-tools": "Tools : Unity",
      "platformer-lang": "Programming language : C#",
      "platformer-status": "In progress",
      "shootemup-goal": "Goal: Create a Shoot’Em Up, independently, where the player must survive waves of zombies.",
      "shootemup-tools": "Tools : Unity",
      "shootemup-lang": "Programming language : C#",
      "shootemup-status": "In progress",
      "nsi-goal": "Goal: Create a Python algorithm that generates a landscape with a random number of elements using the Turtle module.",
      "nsi-tools": "Tools : Thonny",
      "nsi-lang": "Programming language : Python",
      "nsi-time": "Time : 3h",
      "JAM-goal": "Goal : This game was created for the CNAM ENJMIN annual JAM. The theme was: It Always Ends Like This.",
      "JAM-tools": "Tools : Unity",
      "JAM-lang": "Programming language : C#",
      "JAM-time": "Time : 3 days",
      "JAM-link": "itch page : ",
      "solo": "(Alone)",
      "groupe": "(In group)",
      "legal-title": "Legal Notice",
      "legal-owner-label": "Website owner:",
      "legal-owner": "Endy TURRIN",
      "legal-contact-label": "Contact:",
      "legal-phone": "+33 7 66 14 79 70",
      "legal-host-label": "Host:",
      "legal-host": "GitHub Pages",
      "legal-credits-label": "Credits:",
      "legal-credits": "Design and development by Endy TURRIN.",
      "legal-rights": "Images, logos, and videos on this site are the property of their respective authors. Any reproduction, even partial, is prohibited without prior authorization.",
      "legal-btn": "© Legal notice"
    }
  };

  const buttons = document.querySelectorAll(".language button");

  function applyLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang][key]) {
        // Remplace tout le contenu HTML de l'élément, conserve les balises
        el.innerHTML = translations[lang][key];
        }
    });
  }


  // Gestion des boutons de langue
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyLanguage(lang);
      // Sauvegarde la langue choisie
      localStorage.setItem("lang", lang);
    });
  });

  const savedLang = localStorage.getItem("lang") || "fr";
  applyLanguage(savedLang);
  document.querySelector(`.language button[data-lang="${savedLang}"]`).classList.add("active");
});

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Ouvrir/fermer le menu
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Fermer le menu quand on clique sur un lien
navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // scroll vers le bas -> cacher header
        header.style.top = "-100px"; // cache le header
    } else {
        // scroll vers le haut -> montrer header
        header.style.top = "0";
    }

    lastScroll = currentScroll;
});


const legalBtn = document.getElementById("legal-btn");
const legalModal = document.getElementById("legal-modal");
const closeBtn = document.querySelector(".close");

legalBtn.onclick = function() {
  legalModal.style.display = "block";
}

closeBtn.onclick = function() {
  legalModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == legalModal) {
    legalModal.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    fr: {
      "nav-presentation": "Présentation",
      "nav-competences": "Compétences",
      "nav-contact": "Me Contacter",
      "nav-CV": "Mon CV",
      "nav-Accueil": "Accueil",
      "title-main-Portfolio": "Portfolio Endy TURRIN",
      "title-main": "Site Endy TURRIN",
      "presentation-text": "Bonjour, je me nomme <strong>Endy</strong> et je suis actuellement étudiant au <strong>CNAM ENJMIN</strong>. J’aimerais pouvoir, lors de mes études supérieures, me spécialiser dans la programmation de jeux vidéo. J’ai actuellement plusieurs compétences en programmation orientés jeux vidéo. Je sais maîtriser des langages de programmation tel que <strong>le C#, le SQL, le python, le html, le CSS et le Java Script et je maitrise github et Unity</strong>. Je suis un passionné de jeux vidéo et j’adore le sport, le dessin, les échecs ainsi que les films et séries d’animation.",
      "skills-title": "Compétences",
      "contact-title": "Contactez moi",
      "footer-text": "© 2025 Endy Turrin - Tous droits réservés",
      "label-name": "Nom",
      "label-email": "Email",
      "label-message": "Message",
      "invaders-goal": "J'ai appris à utiliser PyGame et j'ai essayé de créer un premier jeu vidéo en Python afin de m'entraîner et de développer mes compétences en utilisant de nouveaux modules.",
      "invaders-tools": "Outils : Thonny",
      "invaders-lang": "Langage de programmation : Python",
      "invaders-time": "Temps : 12h",
      "platformer-goal": "J'ai créé mon premier platformer 2D à l’aide de tutos YouTube et j'ai apprie à maîtriser le C# ainsi que Unity.",
      "platformer-tools": "Outils : Unity",
      "platformer-lang": "Langage de programmation : C#",
      "platformer-status": "Temps : 7 jours",
      "shootemup-goal": "J'ai créé un premier projet Unity afin d'apprendre les bases du moteur de jeux à l'aide de tutos YouTube, et j'ai testé des idées qui me sont passées par la tête afin de m'entraîner.",
      "shootemup-tools": "Outils : Unity",
      "shootemup-lang": "Langage de programmation : C#",
      "shootemup-status": "Temps : 4h",
      "nsi-goal": "J'ai fait un projet Python en groupe afin d'apprendre à m'organiser en codant à plusieurs et j'ai appris à utiliser le module Turtle.",
      "nsi-tools": "Outils : Thonny",
      "nsi-lang": "Langage de programmation : Python",
      "nsi-time": "Temps : 3h",
      "JAM-goal-1": "J'ai eu une première expérience de conception de jeu en groupe avec des masters dans le cadre de l'ENJAM, la GameJam annuelle de l'ENJMIN.",
      "JAM-goal-2": "J'ai appris les différentes étapes de la conception d'un jeu, les différents corps de métier et j'ai développé mes compétences en level design, en game design et en programmation sur Unity. Enfin j'ai appris les bases du métier de sound designer.",
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
      "nav-contact": "Contact",
      "nav-CV": "My CV",
      "nav-Accueil": "Reception",
      "title-main-Portfolio": "Endy TURRIN Portfolio",
      "title-main": "Endy TURRIN's website",
      "presentation-text": "Hello, my name is <strong>Endy</strong> and I am currently a student at <strong>CNAM ENJMIN</strong>. During my higher education, I would like to specialize in video game programming. I currently have several skills in game-oriented programming. I know programming languages including <strong>C#, SQL, Python, HTML, CSS, and JavaScript, and I am proficient with GitHub and Unity</strong>. I am passionate about video games and I also love sports, drawing, chess, as well as animated films and series.",
      "skills-title": "Skills",
      "contact-title": "Contact me",
      "footer-text": "© 2025 Endy Turrin - All rights reserved",
      "label-name": "Name",
      "label-email": "Email",
      "label-message": "Message",
      "invaders-goal": "I learned how to use PyGame and tried to create my first video game in Python to practice and develop my skills using new modules.",
      "invaders-tools": "Tools : Thonny",
      "invaders-lang": "Programming language : Python",
      "invaders-time": "Time : 12h",
      "platformer-goal": "I created my first 2D platformer using YouTube tutorials and I learned to master C# as well as Unity.",
      "platformer-tools": "Tools : Unity",
      "platformer-lang": "Programming language : C#",
      "platformer-status": "Time : 7 days",
      "shootemup-goal": "I created a first Unity project to learn the basics of the game engine using YouTube tutorials, and I tested ideas that came to mind to practice.",
      "shootemup-tools": "Tools : Unity",
      "shootemup-lang": "Programming language : C#",
      "shootemup-status": "Time : 4h",
      "nsi-goal": "I did a Python project in a group to learn how to organize myself when coding together and I learned how to use the Turtle module.",
      "nsi-tools": "Tools : Thonny",
      "nsi-lang": "Programming language : Python",
      "nsi-time": "Time : 3h",
      "JAM-goal-1": "I had my first experience designing a game in a group with master's students as part of the ENJAM, the annual Game Jam of the ENJMIN.",
      "JAM-goal-2": "I learned the different stages of game design, the various roles involved, and I developed my skills in level design, game design, and programming on Unity. Finally, I learned the basics of sound design.",
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

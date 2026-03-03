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
      "h3-1": "Recherche d’alternance",
      "alternance": "Je suis actuellement à la recherche d’une alternance à raison de quatre jours par semaine (du lundi au jeudi).",
      "h3-2": "Avantages de l'alternance",
      "info": "Pour plus d'informations",
      "avantage1": "Possibilité de n’avoir aucun reste à charge pour financer la formation",
      "h3-3": "Mon parcours",
      "parcours": "Je suis actuellement étudiant au CNAM-ENJMIN à Angoulême en licence informatique parcours jeux vidéo",
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
      "platformer": "Platformer 2D",
      "platformer-goal": "J'ai créé mon premier platformer 2D à l’aide de tutos YouTube et j'ai apprie à maîtriser le C# ainsi que Unity.",
      "platformer-tools": "Outils : Unity",
      "platformer-lang": "Langage de programmation : C#",
      "platformer-status": "Temps : 7 jours",
      "ShootEm_Up": "1er projet Unity",
      "shootemup-goal": "J'ai créé un premier projet Unity afin d'apprendre les bases du moteur de jeux à l'aide de tutos YouTube, et j'ai testé des idées qui me sont passées par la tête afin de m'entraîner.",
      "shootemup-tools": "Outils : Unity",
      "shootemup-lang": "Langage de programmation : C#",
      "shootemup-status": "Temps : 4h",
      "groupe_NSI": "projet de groupe NSI",
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
      "Mars2-goal": "Mon premier projet inter-Licence au sein du CNAM Enjmin à Angoulême. Un petit jeu de gestion dans lequel on gère une colonie alienne et où on doit faire augmenter la barre de prospérité de celle-ci. J'ai aidé principalement à la création de l'UI, du level design, du GameManager et à la gestion des personnages.",
      "Mars2-tools": "Outils : Unity",
      "Mars2-lang": "Langage de programmation : C#",
      "Mars2-time": "Temps : 1 semaine",
      "Editeur-perso-title" : "Editeur de perso 3D",
      "Editeur-perso-goal": "Un projet de Jam réalisé en deux semaines dans le cadre de mes cours au sein du CNAM Enjmin. J'ai réalisé la totalité de la partie programmation du projet et j'ai été aidé par deux artistes qui ont réalisé les assets visuels du personnage, du menu, de la skybox ainsi que du piédestal qui supporte le personnage.",
      "Editeur-perso-tools": "Outils : Unreal",
      "Editeur-perso-lang": "Système de scripting visuel : Blueprint",
      "Editeur-perso-time": "Temps : 2 semaine",
      "groupe_village": "projet de groupe Village fortifié 3D",
      "village-goal": "J'ai fais un projet de groupe où on devait réaliser un village fortifié à l'aide d'assets qu'on devait réaliser nous même sur blender dans le cadre de mes cours au sein du CNAM-ENJMIN. Voici ce que j'ai pu réaliser.",
      "village-tools": "Outils : Blender",
      "village-time": "Temps : 3h",
      "solo": "(Seul)",
      "groupe": "(En groupe)",
      "code" : "Code du jeu :",
      "BoutonCV": "voir",
      "nav-Portfolio": "Mon Portfolio",
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
      "nav-Accueil": "Home",
      "title-main-Portfolio": "Endy TURRIN Portfolio",
      "title-main": "Endy TURRIN's website",
      "presentation-text": "Hello, my name is <strong>Endy</strong> and I am currently a student at <strong>CNAM ENJMIN</strong>. During my higher education, I would like to specialize in video game programming. I currently have several skills in game-oriented programming. I know programming languages including <strong>C#, SQL, Python, HTML, CSS, and JavaScript, and I am proficient with GitHub and Unity</strong>. I am passionate about video games and I also love sports, drawing, chess, as well as animated films and series.",
      "h3-1": "Looking for an apprenticeship",
      "alternance": "I am currently looking for a apprenticeship of four days a week (Monday to Thursday).",
      "h3-2": "Advantages of apprenticeship",
      "info": "For more information",
      "avantage1": "Possibility of having no out-of-pocket expenses to finance the training",
      "h3-3": "My educational path",
      "parcours": "I am currently a student at CNAM-ENJMIN in Angoulême, studying for a Bachelor's degree in Computer Science with a specialization in Video Games.",
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
      "platformer": "2D Platformer",
      "platformer-goal": "I created my first 2D platformer using YouTube tutorials and I learned to master C# as well as Unity.",
      "platformer-tools": "Tools : Unity",
      "platformer-lang": "Programming language : C#",
      "platformer-status": "Time : 7 days",
      "ShootEm_Up": "First Unity project",
      "shootemup-goal": "I created a first Unity project to learn the basics of the game engine using YouTube tutorials, and I tested ideas that came to mind to practice.",
      "shootemup-tools": "Tools : Unity",
      "shootemup-lang": "Programming language : C#",
      "shootemup-status": "Time : 4h",
      "groupe_NSI": "NSI group project",
      "nsi-goal": "I did a Python project in a group to learn how to organize myself when coding together and I learned how to use the Turtle module.",
      "nsi-tools": "Tools : Thonny",
      "nsi-lang": "Programming language : Python",
      "nsi-time": "Time : 3h",
      "JAM-goal-1": "I had my first experience designing a game in a group with master's students as part of the ENJAM, the annual Game Jam of the ENJMIN.",
      "JAM-goal-2": "I learned the different stages of game design, the various roles involved, and I developed my skills in level design, game design, and programming on Unity. Finally, I learned the basics of sound design.",
      "JAM-lang": "Programming language : C#",
      "JAM-time": "Time : 3 days",
      "JAM-link": "itch page : ",
      "Mars2-goal": "My first inter-license project at CNAM Enjmin in Angoulême. A small management game in which you manage an alien colony and have to increase its prosperity bar. I mainly helped with the creation of the UI, level design, GameManager, and character management.",
      "Mars2-tools": "Tools : Unity",
      "Mars2-lang": "Programming language : C#",
      "Mars2-time": "Time : 1 week",
      "Editeur-perso-title" : "3D character editor",
      "Editeur-perso-goal": "A Jam project completed in two weeks as part of my courses at CNAM Enjmin. I handled all the programming for the project and was assisted by two artists who created the visual assets for the character, the menu, the skybox, and the pedestal that supports the character.",
      "Editeur-perso-tools": "Tools : Unreal",
      "Editeur-perso-lang": "Visual scripting system : Blueprint",
      "Editeur-perso-time": "Time : 2 week",
      "groupe_village": "3D Fortified Village Group Project",
      "village-goal": "I worked on a group project where we had to create a fortified village using assets that we had to create ourselves in Blender as part of my coursework at CNAM-ENJMIN. Here's what I was able to create.",
      "village-tools": "Tools : Blender",
      "village-time": "Time : 3h",
      "solo": "(Alone)",
      "groupe": "(In group)",
      "code" : "Game code :",
      "BoutonCV": "view",
      "nav-Portfolio": "My Portfolio",
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
        el.innerHTML = translations[lang][key];
        }
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyLanguage(lang);
      localStorage.setItem("lang", lang);
    });
  });

  const savedLang = localStorage.getItem("lang") || "fr";
  applyLanguage(savedLang);
  document.querySelector(`.language button[data-lang="${savedLang}"]`).classList.add("active");
});

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

const menuTogglePortfolio = document.getElementById("menu-toggle-portfolio");
const navMenuPortfolio = document.getElementById("nav-menu-portfolio");

if (menuTogglePortfolio && navMenuPortfolio) {
  menuTogglePortfolio.addEventListener("click", () => {
    navMenuPortfolio.classList.toggle("active");
  });

  navMenuPortfolio.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenuPortfolio.classList.remove("active");
    });
  });
}

let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        header.style.top = "-100px";
    } else {
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

const images = [
  "./assets/Images/RenduMurails.png",
  "./assets/Images/RenduTours.png",
];

let index = 0;

const img = document.getElementById("imageVillage");
const left = document.getElementById("left");
const right = document.getElementById("right");

right.addEventListener("click", () => {
  index = (index + 1) % images.length;
  img.src = images[index];
});

left.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  img.src = images[index];
});
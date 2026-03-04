document.addEventListener('DOMContentLoaded', function () {
  const traduceri = {
    ro: {
      'nav-acasa': 'Acasă',
      'nav-experienta': 'Experiență',
      'nav-educatie': 'Educație',
      'nav-aptitudini': 'Aptitudini',
      'hero-subtitle': 'Bun venit pe CV-ul meu',
      'hero-title': 'Programator & Digital Banking Expert',
      'hero-description':
        'Pasionat de tehnologie și dezvoltare web, motivat să contribui la proiecte reale și să îmi îmbunătățesc constant abilitățile.',
      'hero-btn': 'Vezi Experiența',
      'titlu-experienta': 'Experiență',
      'titlu-educatie': 'Educație',
      'titlu-aptitudini': 'Aptitudini',
      'cta-subtitlu': 'Disponibil pentru proiecte',
      'cta-titlu': 'Ai un proiect în minte?',
      'cta-text':
        'Sunt disponibil pentru colaborări freelance în development web, consultanță IT sau orice altă oportunitate interesantă. Hai să discutăm!',
      btnCTA: 'Trimite un Email',
    },
    en: {
      'nav-acasa': 'Home',
      'nav-experienta': 'Experience',
      'nav-educatie': 'Education',
      'nav-aptitudini': 'Skills',
      'hero-subtitle': 'Welcome to my CV',
      'hero-title': 'Developer & Digital Banking Expert',
      'hero-description':
        'Passionate about technology and web development, motivated to contribute to real projects and constantly improve my skills.',
      'hero-btn': 'View Experience',
      'titlu-experienta': 'Experience',
      'titlu-educatie': 'Education',
      'titlu-aptitudini': 'Skills',
      'cta-subtitlu': 'Available for projects',
      'cta-titlu': 'Have a project in mind?',
      'cta-text':
        "I am available for freelance collaborations in web development, IT consulting or any other interesting opportunity. Let's talk!",
      btnCTA: 'Send an Email',
    },
  };

  let limbaActuala = 'ro';
  const btnLimba = document.querySelector('#btnLimba');

  btnLimba.addEventListener('click', function () {
    if (limbaActuala === 'ro') {
      limbaActuala = 'en';
      btnLimba.textContent = 'RO';
    } else {
      limbaActuala = 'ro';
      btnLimba.textContent = 'EN';
    }

    const texte = traduceri[limbaActuala];

    for (let cheie in texte) {
      const element = document.querySelector('#' + cheie);
      if (element) {
        element.textContent = texte[cheie];
      }
    }
  });

  const header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

const observator = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      let bara = entry.target;
      let progres = bara.getAttribute('data-progres');
      bara.style.width = progres + '%';
    }
  });
});

const bare = document.querySelectorAll('.aptitudine-progres');
bare.forEach(function (bara) {
  observator.observe(bara);
});

const elementeAnimate = document.querySelectorAll(
  '.timeline-item, .aptitudine-card, .sectiune-titlu',
);

elementeAnimate.forEach(function (element) {
  element.classList.add('apare');
});

const observatorAparitie = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('vizibil');
      }
    });
  },
  {
    threshold: 0.1,
  },
);

elementeAnimate.forEach(function (element) {
  observatorAparitie.observe(element);
});

const texteTitle = [
  'Programator & Digital Banking Expert',
  'Front-End Developer',
  'Web Enthusiast',
];

let indexText = 0;
let indexLitera = 0;
let sterge = false;

function scrieText() {
  const elementTitle = document.querySelector('#hero-title');
  const textCurent = texteTitle[indexText];

  if (sterge) {
    elementTitle.textContent = textCurent.substring(0, indexLitera - 1);
    indexLitera--;

    if (indexLitera === 0) {
      sterge = false;
      indexText = (indexText + 1) % texteTitle.length;
    }

    setTimeout(scrieText, 50);
  } else {
    elementTitle.textContent = textCurent.substring(0, indexLitera + 1);
    indexLitera++;

    if (indexLitera === textCurent.length) {
      sterge = true;
      setTimeout(scrieText, 2000);
    } else {
      setTimeout(scrieText, 100);
    }
  }
}

scrieText();

const btnBurger = document.querySelector('#btnBurger');
const navLinks = document.querySelector('.nav-links');

btnBurger.addEventListener('click', function () {
  btnBurger.classList.toggle('activ');
  navLinks.classList.toggle('activ');
});

navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    btnBurger.classList.remove('activ');
    navLinks.classList.remove('activ');
  });
});

const canvas = document.getElementById('sakura');
const ctx = canvas.getContext('2d');

function redimensioneaza() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
redimensioneaza();
window.addEventListener('resize', redimensioneaza);

function deseneazaRamura(ramura, progres) {
  const x2 = ramura.x1 + (ramura.x2 - ramura.x1) * progres;
  const y2 = ramura.y1 + (ramura.y2 - ramura.y1) * progres;

  ctx.beginPath();
  ctx.moveTo(ramura.x1, ramura.y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = '#4a2c0a';
  ctx.lineWidth = ramura.grosime;
  ctx.lineCap = 'round';
  ctx.stroke();
}

function deseneazaFloare(flaore, opacitate) {
  const petale = 5;

  for (let i = 0; i < petale; i++) {
    const unghi = (i / petale) * Math.PI * 2;
    const px = flaore.x + Math.cos(unghi) * flaore.raza;
    const py = flaore.y + Math.sin(unghi) * flaore.raza;

    ctx.beginPath();
    ctx.arc(px, py, flaore.raza * 0.6, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 182, 193, ${opacitate})`;
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(flaore.x, flaore.y, flaore.raza * 0.4, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 220, 100, ${opacitate})`;
  ctx.fill();
}

let progresAnimatie = 0;
function animeaza() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const ramuri = [
    {
      x1: 0,
      y1: canvas.height,
      x2: canvas.width * 0.15,
      y2: canvas.height * 0.7,
      grosime: 6,
    },
    {
      x1: canvas.width * 0.15,
      y1: canvas.height * 0.7,
      x2: canvas.width * 0.25,
      y2: canvas.height * 0.4,
      grosime: 4,
    },
    {
      x1: canvas.width * 0.25,
      y1: canvas.height * 0.4,
      x2: canvas.width * 0.4,
      y2: canvas.height * 0.2,
      grosime: 3,
    },
    {
      x1: canvas.width * 0.25,
      y1: canvas.height * 0.4,
      x2: canvas.width * 0.35,
      y2: canvas.height * 0.35,
      grosime: 2,
    },
    {
      x1: canvas.width * 0.15,
      y1: canvas.height * 0.7,
      x2: canvas.width * 0.08,
      y2: canvas.height * 0.5,
      grosime: 2,
    },
  ];

  const flori = [
    { x: canvas.width * 0.4, y: canvas.height * 0.2, raza: 12, apar: 0.7 },
    { x: canvas.width * 0.35, y: canvas.height * 0.35, raza: 10, apar: 0.6 },
    { x: canvas.width * 0.08, y: canvas.height * 0.5, raza: 10, apar: 0.5 },
    { x: canvas.width * 0.25, y: canvas.height * 0.38, raza: 8, apar: 0.65 },
    { x: canvas.width * 0.18, y: canvas.height * 0.65, raza: 9, apar: 0.4 },
    { x: canvas.width * 0.3, y: canvas.height * 0.28, raza: 8, apar: 0.75 },
    { x: canvas.width * 0.12, y: canvas.height * 0.55, raza: 7, apar: 0.45 },
  ];

  progresAnimatie += 0.003;

  if (progresAnimatie > 1) {
    progresAnimatie = 1;
  }

  ramuri.forEach(function (ramura) {
    deseneazaRamura(ramura, progresAnimatie);
  });

  flori.forEach(function (flaore) {
    if (progresAnimatie >= flaore.apar) {
      const opacitate = (progresAnimatie - flaore.apar) / (1 - flaore.apar);
      deseneazaFloare(flaore, Math.min(opacitate, 1));
    }
  });

  if (progresAnimatie < 1) {
    requestAnimationFrame(animeaza);
  }
}

animeaza();

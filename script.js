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

  const btnTema = document.querySelector('#btnTema');
  let temaActuala = 'dark';

  btnTema.addEventListener('click', function () {
    if (temaActuala === 'dark') {
      temaActuala = 'light';
      document.documentElement.classList.add('light');
      btnTema.querySelector('i').className = 'fa-solid fa-sun';
    } else {
      temaActuala = 'dark';
      document.documentElement.classList.remove('light');
      btnTema.querySelector('i').className = 'fa-solid fa-moon';
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

const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenuOptions = document.querySelector('.navbar-bottom-items');

const programDiv = document.querySelector('.speakers');

mobileMenuButton.addEventListener('click', () => {
  mobileMenuButton.classList.toggle('menu-button-open');
  mobileMenuOptions.classList.toggle('visible-mobilemenu');
});
navBarItems.forEach((item) => {
  item.addEventListener('click', () => {
    logo.classList.toggle('logo-invisible');
    mobileMenuButton.classList.toggle('menu-button-open');
    mobileMenuOptions.classList.remove('visible-mobilemenu');
  });
});

const listOfProgram = [{
    Id: '1',
    Name: 'Franco Fernandez',
    MejorTitle: "Industrial Enginner",
    Profile: "Graduated from the Autonomous University of Mexico. He has been involved in industrial manufacturing since 2008 and started working on plastic transformation processes in 2011.",
    ProfileImg: 'images/speaker_01.png',
  }, {
    Id: '2',
    Name: 'Dr.-Ing. Miguel Garzón',
    MejorTitle: "Doctor Manufacturing Engineering",
    Profile: "Mechanical Engineer and Master from the Universidad de los Andes in Bogotá, Colombia. In addition, he obtained his doctorate from the WZL, Institute for Machine Tools and Production Engineering at RWTH Aachen University, in Germany.",
    ProfileImg: 'images/speaker_02.png',
  },{
    Id: '3',
    Name: 'Ana Rodriguez',
    MejorTitle: "Manufacturing Engineer",
    Profile: "Industrial Engineer from the University of Zaragoza, Green Belt in Lean Six Sigma, Master of Science from the Universität Karlsruhe (Germany) and MBA from the ESIC Business & Marketing School.",
    ProfileImg: 'images/speaker_03.png',
  },{
    Id: '4',
    Name: 'Alberto Ortega',
    MejorTitle: "Mechanic Engineer",
    Profile: "Industrial Engineer from the University of Barcelona, Green Belt in Lean Six Sigma Black Belt, Master of Science from the Universität Karlsruhe (Germany) and MBA from the ESIC Business & Marketing School.",
    ProfileImg: 'images/speaker_04.png',
  },{
    Id: '5',
    Name: 'Mark Brown',
    MejorTitle: "Electromechanic Engineer",
    Profile: "A mechanical engineer by training and since 2005 President and CEO of Burger & Brown Engineering, a company that manufactures engineering products related to mold cooling and sensing, and holds 10 patents for its products.",
    ProfileImg: 'images/speaker_05.png',
  },{
    Id: '6',
    Name: 'Juan Rosario',
    MejorTitle: "Industrial Engineer",
    Profile: "Actualmente es responsable de proyectos para la creación de productos y procedimientos de automoción, y de desarrollo de negocio para las industrias del plástico y caucho en el Instituto Tecnológico de Aragón (España).",
    ProfileImg: 'images/speaker_06.png',
  }]

  function cardSpeacker(item) {
    return `
    <article class="speacker-card">
    <div class="speaker-image">
    <img src="${item.ProfileImg}" alt="speacker-image">
    </div>
    <div class="speacker-title-mejor">
    <h3 class="speaker-name">${item.Name}</h3>
    <p class="speacker-profile">${item.MejorTitle}</p>
    <hr/ class="speacker-divider">
    <p>${item.Profile}</p>
    </div>
  </article>
    `;
  }

  programDiv.innerHTML = `${listOfProgram.map(cardSpeacker).join('')}`;
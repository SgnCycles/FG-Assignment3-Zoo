const zooEmployees = [];

function Employee(image, name, jobTitle, resume) {
  this.image = image,
  this.name = name,
  this.jobTitle = jobTitle,
  this.resume = resume,
  this.alt = name,
  zooEmployees.push(this)
}

let sofia = new Employee ("./images/employee_sofia.png", "Sofia Grant", "Herpetologist", "Sofia Grant is a 34-year-old herpetologist whose fascination with reptiles began when she rescued a wayward grass snake from her family's garden at age nine. She earned her Master's in Wildlife Biology from the University of Edinburgh and has spent the last 11 years specializing in reptile behavior and desert-dwelling species. Sofia joined the zoo six years ago, where she now leads the reptile team in designing innovative, climate-adaptive habitats. Her proudest achievement is spearheading a successful breeding program for a critically endangered gecko species, earning recognition across European conservation networks. Outside work, she's an avid rock climber and macro-photographer, known for capturing stunning close-ups of reptile scales and amphibian eyes. Sofia thrives on challenging fieldwork, enjoys mentoring new keepers, and dreams of co-authoring a global field guide to venomous snakes.");

let villiam = new Employee ("./images/employee_villiam.png", "Villiam Malcolm", "Primate Keeper", "At 37, Villiam Malcolm brings 15 years of primate-care experience to the zoo. Originally studying anthropology at the University of Copenhagen, he fell in love with primate behavior during a research trip to Borneo. After shifting his path to animal care, he completed specialized training in primate welfare and enrichment, eventually joining our zoo eight years ago. Villiam is particularly skilled in positive-reinforcement training and has developed communication protocols that help reduce stress in sensitive species such as gibbons and mandrills. His colleagues admire his calm presence—he's often the only person who can coax a grumpy orangutan into participating in a health check. Off-duty, Villiam enjoys woodworking and has crafted several custom climbing structures later installed in primate habitats. He also volunteers with a global rescue organization that rehabilitates orphaned primates. His long-term goal is to establish a sanctuary partnership that allows the zoo's primate team to support field conservation more directly.");

let oscar = new Employee ("./images/employee_oscar.png", "Oscar Hammond", "Bird Keeper", "Oscar Hammond, 32, has been immersed in avian care for nine years, with five of those spent at our zoo. He studied zoology in Bristol, where he quickly became known as “the bird guy,” often found sketching kestrels between lectures. Oscar specializes in birds of prey and complex flock dynamics, and he recently led the redesign of the raptor flight area to include more naturalistic hunting simulations. His work contributed to the successful rehabilitation of several injured owls now released into protected woodlands. Passionate about public engagement, Oscar runs the zoo's weekend bird-of-prey demonstrations, captivating visitors with his storytelling and calm rapport with even the most temperamental hawks. He spends his free time hiking, practicing wildlife illustration, and participating in citizen-science migration surveys. Oscar hopes to publish a collection of his drawings paired with real field notes from conservation projects he plans to join in South America.");

let signe = new Employee ("./images/employee_signe.png", "Signe Sattler", "Animal Welfare Officer", "At 35, Signe Sattler serves as the zoo's dedicated Animal Welfare Officer, a role she has excelled in for seven years. With a background in veterinary nursing and a degree in applied animal behavior, Signe ensures that every species—from tiny dart frogs to towering giraffes—receives the highest standard of welfare. Her meticulous welfare audits and enrichment strategies have become a model for other institutions. Known for her empathetic communication style, she bridges keepers, veterinarians, and curators to create unified care plans that prioritize both physical and psychological health. Signe previously spent three years working in wildlife rehabilitation, where she developed a special interest in trauma recovery and stress-reduction techniques. Outside the zoo, she practices yoga, leads workshops on ethical wildlife tourism, and fosters senior rescue dogs. Her long-term ambition is to develop a European-wide welfare certification program to help standardize care practices across zoos and sanctuaries.");

let sidebarEmployeeContent = document.querySelector(".sidebar-employee");
let mainEmployeeContent = document.querySelector(".about-us-main");
 
let employeeCard = document.querySelector(".about-card-container");

zooEmployees.forEach(employee => {
  let sidebarEmployeeItem = document.createElement("li");
  sidebarEmployeeItem.classList.add("sidebar-employee-button");
  sidebarEmployeeItem.textContent = employee.name;
  sidebarEmployeeContent.appendChild(sidebarEmployeeItem);

  sidebarEmployeeItem.addEventListener("click", () => {

    let isActive = employeeCard.classList.contains("active") && employeeCard.querySelector(".about-card-image img").alt === employee.name;

    document.querySelectorAll(".about-card.active").forEach(activeCard => activeCard.classList.remove("active"));

    employeeCard.querySelector(".about-card-image img").src = employee.image;
    employeeCard.querySelector(".about-card-image img").alt = employee.alt;
    employeeCard.querySelector(".about-card-name h2").textContent = employee.name;
    employeeCard.querySelector(".about-card-subtitle h3").textContent = employee.jobTitle;
    employeeCard.querySelector(".about-card-description p").textContent = employee.resume;
    
    if (!isActive) {
      employeeCard.classList.add("active");
      employeeCard.style.display = "flex";
      mainEmployeeContent.style.display = "none";
    } else { 
      employeeCard.classList.remove("active");
      employeeCard.style.display = "none";
      mainEmployeeContent.style.display = "block";
    }
  })
})

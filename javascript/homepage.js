const mainPageAnimals = [];

function AnimalMainPage(image, name, diet, type, href, description) {
  this.image = image,
  this.name = name,
  this.diet = diet,
  this.type = type,
  this.href = href,
  this.description = description,
  this.alt = `Image of ${name}`,
  mainPageAnimals.push(this)
}

let echidna = new AnimalMainPage ("./images/echidna.jpg", "Echidna", "Insectivore", "Mammal", "mammals.html", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs.");

let tasmanianDevil = new AnimalMainPage ("./images/tasmanian-devil.jpg", "Tasmanian Devil", "Carnivore", "Mammal", "mammals.html", "The Tasmanian devil is the world's largest surviving carnivorous marsupial, native to the Australian island state of Tasmania.");

let quokka = new AnimalMainPage ("./images/quokka.jpg", "Quokka", "Herbivore", "Mammal", "mammals.html", "The Tasmanian devil is the world's largest surviving carnivorous marsupial, native to the Australian island state of Tasmania.");

let frillNeckedLizard = new AnimalMainPage ("./images/frilled-neck-lizard.jpeg", "Frill-Necked Lizzard", "Insectivore", "Reptile", "reptiles.html", "A frill-necked lizard is a large, arboreal lizard from the family Agamidae, native to northern Australia and southern New Guinea, famous for the large, colorful frill around its neck.");

let hawksbillTurtle = new AnimalMainPage ("./images/hawksbill-turtle.jpeg", "Hawksbill Turtle", "Omnivore", "Reptile", "reptiles.html", "A Hawksbill turtle is a critically endangered sea turtle found in tropical waters worldwide, named for its bird-like beak which helps it feed on sponges in coral reefs.");

let perentie = new AnimalMainPage ("./images/perentie.jpeg", "Perentie", "Carnivore", "Reptile", "reptiles.html", "The Perentie is Australia’s largest lizard. Its body is rich brown with large cream or yellow markings. It has a forked tongue and numerous very sharp, slightly curved teeth.");

let cassowary = new AnimalMainPage ("./images/cassowary.jpg", "Cassowary", "Omnivore", "Bird", "birds.html", "A cassowary is a large, flightless bird native to the tropical forests of northeastern Australia and New Guinea, known for its colorful plumage, distinctive casque on its head, and powerful, dagger-like claws.");

let kookaburra = new AnimalMainPage ("./images/kookaburra.jpg", "Kookaburra", "Carnivore", "Bird", "birds.html", "A kookaburra is a large, ground-dwelling bird from Australia and New Guinea, famous for its 'laughing' call that sounds like human laughter and is used to mark territory.");

let yellowTailedBlackCockatoo = new AnimalMainPage ("./images/yellow-Tailed-Black-Cockatoo.jpg", "Yellow Tailed Black Cockatoo", "Omnivore", "Bird", "birds.html", "The Yellow-tailed Black Cockatoo is a large, black bird native to south-eastern Australia, distinguished by its yellow cheek patches and yellow panels on its long tail.");

let sidebarContent = document.querySelector(".sidebar-animals");
let mainContent = document.querySelector(".main");
 
let animalCard = document.querySelector(".main-animal");

mainPageAnimals.forEach(animal => console.log(animal.name));

mainPageAnimals.forEach(animal => {
  let sidebarItem = document.createElement("li");
  sidebarItem.classList.add("sidebar-animals-button");
  sidebarItem.textContent = animal.name;
  sidebarContent.appendChild(sidebarItem);

  sidebarItem.addEventListener("click", () => {

    let isActive = animalCard.classList.contains("active") && animalCard.querySelector(".main-animal-image img").alt === animal.name;

    document.querySelectorAll(".main-animal.active").forEach(activeCard => activeCard.classList.remove("active"));

    animalCard.querySelector(".main-animal-image img").src = animal.image;
    animalCard.querySelector(".main-animal-image img").alt = animal.name;
    animalCard.querySelector(".main-animal-diet p").textContent = animal.diet;
    animalCard.querySelector(".main-animal-class a").textContent = animal.type;
    animalCard.querySelector(".main-animal-class a").href = animal.href;
    animalCard.querySelector(".main-animal-short-description p").textContent = animal.description;

    if (!isActive) {
      animalCard.classList.add("active");
      animalCard.style.display = "flex";
      mainContent.style.display = "none";
    } else { 
      animalCard.classList.remove("active");
      animalCard.style.display = "none";
      mainContent.style.display = "block";
    }
  })

})
const mammals = []
let currentAnimal

const toggleReadMore = () =>{
  const fullIsHidden = descriptionLocation.classList.toggle("hidden")
  smallDescriptionLocation.classList.toggle("hidden")
  readMore.textContent = fullIsHidden ? "Read more" : "Read less";
}

function Mammal (name, life, group, food, small, description, length, weight, found, image) {
  this.name = name;
  this.life = life;
  this.group = group;
  this.food = food;
  this.small = small;
  this.description = description;
  this.length = length;
  this.weight = weight;
  this.found = found;
  this.image = image;
  mammals.push(this);
}

const Echidna = new Mammal("Echidna", 50, "Mammal", "Insects such as ants and termites, beetle larvae and worms", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs.", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or short-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.", 76, 10, "Throughout Australia", "images/echidna.jpg")

const TasmanianDevil = new Mammal("Tasmanian Devil", 5, "mammal", "A predator, then eat meat from other animals such as wallabies and wombats", "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina) is a carnivorous marsupial of the family Dasyuridae.", "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina) is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.", 70, 10, "Tasmania", "images/tasmanian-devil.jpg")

const Quokka = new Mammal("Quokka", 10, "Mammal", "Plant eaters, they munch on shrubs and grasses", "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'.", "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.", 50, 3, "Only found on Rottnest Island and a few places on mainland Western Australia", "images/quokka.jpg")

const introVisibility = document.querySelector(".wrapper-intro-mammal")
const visibility = document.querySelector(".wrapper-mammal")
const animalsLocation = document.querySelector(".sidebar-animals");
const imgLocation = document.querySelector(".image-mammal");
const nameLocation = document.querySelector(".name-mammal");
const smallDescriptionLocation = document.querySelector(".small-description-mammal")
const descriptionLocation = document.querySelector(".description-mammal");
const readMore = document.querySelector(".read-more");

mammals.forEach(mammal => {
  const animalButtonWrapper = document.createElement("div");
  animalsLocation.appendChild(animalButtonWrapper)
  const animalButton = document.createElement("div");
  animalButton.textContent = mammal.name;
  animalButton.classList.add("sidebar-animals-button")
  animalsLocation.appendChild(animalButton)

  animalButton.addEventListener("click", () => {
    if ( mammal.name === currentAnimal && visibility.classList.contains("wrapper-mammal-visible")) {
      visibility.classList.remove("wrapper-mammal-visible")
      introVisibility.classList.remove("wrapper-intro-mammal-visible")

    } else {
      introVisibility.classList.add("wrapper-intro-mammal-visible")
      visibility.classList.add("wrapper-mammal-visible")

      const img = document.createElement("img");
      img.src = mammal.image;
      imgLocation.replaceChildren(img);

      const name = document.createElement("h2");
      name.textContent = mammal.name;
      nameLocation.replaceChildren(name);

      const small = document.createElement("p")
      small.textContent = mammal.small;
      smallDescriptionLocation.replaceChildren(small)

      const description = document.createElement("p");
      description.textContent = mammal.description;

      const food = document.createElement("p")
      food.textContent = `Eats: ${mammal.food}`

      const group = document.createElement("p");
      group.textContent = `Group: ${mammal.group}`;

      const life = document.createElement("p");
      life.textContent = `Life span: ${mammal.life} years`;

      const length = document.createElement("p");
      length.textContent = `Length: ${mammal.length} cm`;

      const weight = document.createElement("p");
      weight.textContent = `Weight: ${mammal.weight} kg`;

      const found = document.createElement("p");
      found.textContent = `Found: ${mammal.found}`

      descriptionLocation.replaceChildren(description, life, length, weight, found, group, food);
      
      descriptionLocation.classList.add("hidden");
      smallDescriptionLocation.classList.remove("hidden");
      readMore.textContent = "Read more";
      currentAnimal = mammal.name;

    } 
  })
  animalButtonWrapper.appendChild(animalButton);
})

readMore.addEventListener("click", toggleReadMore);
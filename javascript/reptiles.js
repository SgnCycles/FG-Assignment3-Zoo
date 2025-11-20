function Reptile(name, lifespan, group, food, shortDescription, description, length, weight, found, image) {
  this.name = name;
  this.lifespan = lifespan;
  this.group = group;
  this.food = food;
  this.shortDescription = shortDescription;
  this.description = description;
  this.length = length;
  this.weight = weight;
  this.found = found;
  this.image = image
}

const frillNeckedLizard = new Reptile("Frill necked lizard", "20 years", "Reptile", "Small insects and spiders", "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses", "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.", "90cm", "1kg", "Northern Australia", "./images/frilled-neck-lizard.jpeg")
const hawksbillTurtle = new Reptile("Hawksbill Turtle", "50years", "Reptile", "other animals (sponges & jellyfish), sea plants", "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak", "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.", "80cm", "50kg", "Tropical coasts of queensland, Northern Terrirory and Western Australia", "./images/hawksbill-turtle.jpeg")
const perentie = new Reptile("Perentie", "20 years", "Reptile", "Carmivore, they eat animals like kangaroos, rabbits, lizards and birds", "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia.", "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor. Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.", "2.5m", "20kg", "Deserts", "./images/perentie.jpeg")

let reptileArray = [frillNeckedLizard, hawksbillTurtle, perentie]
let currentAnimal;

let sidebar = document.querySelector(".sidebar-animals")
let mainContent = document.querySelector(".wrapper-reptiles")

const introVisibility = document.querySelector(".reptiles-intro")

const showReptileInfo = reptile => {
  mainContent.innerHTML = "";

  introVisibility.classList.add("hide-intro")

  let reptileInfo = document.createElement("div")

  let name = document.createElement("h2")
  name.textContent = reptile.name

  let image = document.createElement("img")
  image.src = reptile.image
  image.classList.add("wrapper-image")

  let shortDescription = document.createElement("p")
  shortDescription.textContent = reptile.shortDescription

  let fullInfo = document.createElement("div")
  fullInfo.classList.add("hidden-info")

  let description = document.createElement("p")
  description.textContent = reptile.description

  let lifespan = document.createElement("p")
  lifespan.textContent = `Lifespan: ${reptile.lifespan}`

  let group = document.createElement("p")
  group.textContent = `Group: ${reptile.group}`

  let food = document.createElement("p")
  food.textContent = `Eats: ${reptile.food}`

  let length = document.createElement("p")
  length.textContent = `Length: ${reptile.length}`

  let weight = document.createElement("p")
  weight.textContent = `Weight: ${reptile.weight}`

  let found = document.createElement("p")
  found.textContent = `Found: ${reptile.found}`

  fullInfo.appendChild(description)
  fullInfo.appendChild(group)
  fullInfo.appendChild(lifespan)
  fullInfo.appendChild(food)
  fullInfo.appendChild(length)
  fullInfo.appendChild(weight)
  fullInfo.appendChild(found)

  const readMoreButton = document.createElement("button")
  readMoreButton.textContent = "Read More"
  readMoreButton.classList.add("read-more")

  readMoreButton.addEventListener("click", () => {
    fullInfo.classList.toggle("visible")
    if (fullInfo.classList.contains("visible")) {
      readMoreButton.textContent = "Read Less"
      shortDescription.style.display = "none";
    } else {
      readMoreButton.textContent = "Read More"
      shortDescription.style.display = "block";
    }
  })

  reptileInfo.appendChild(image)
  reptileInfo.appendChild(name)
  reptileInfo.appendChild(shortDescription)
  reptileInfo.appendChild(fullInfo)
  reptileInfo.appendChild(readMoreButton)

  mainContent.appendChild(reptileInfo)

  currentAnimal = reptile;
}

reptileArray.forEach(reptile => {

  let sidebarReptile = document.createElement("div")
  sidebarReptile.classList.add("sidebar-item")
  sidebarReptile.textContent = reptile.name

  sidebarReptile.addEventListener("click", () => {
    if (currentAnimal === reptile) {
      mainContent.innerHTML = "";
      introVisibility.classList.remove("hide-intro")
      currentAnimal = null;
    } else {
      showReptileInfo(reptile);
    }
  })

  sidebar.appendChild(sidebarReptile)
})


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

const frillNeckedLizard = new Reptile("Frill necked lizard", "20 years", "Reptile", "Small insects and spiders", "Short description", "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
  "90cm", "1kg", "Northern Australia", "../images/frilled-neck-lizard.jpeg")

const hawksbillTurtle = new Reptile("Hawksbill Turtle", "50years", "Reptile", "other animals (sponges & jellyfish), sea plants", "Short description", "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
  "80cm", "50kg", "Tropical coasts of queensland, Northern Terrirory and Western Australia", "../images/hawksbill-turtle.jpeg")

const perentie = new Reptile("Perentie", "20 years", "Reptile", "Carmivore, they eat animals like kangaroos, rabbits, lizards and birds", "Short description", "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor. Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
  "2.5m", "20kg", "Deserts", "../images/perentie.jpeg")


let reptileArray = [frillNeckedLizard, hawksbillTurtle, perentie]

let sidebar = document.querySelector(".sidebar")
let mainContent = document.querySelector(".general-info")


// visa info om djuren i click

const showReptileInfo = reptile => {
  mainContent.innerHTML = "";

  let reptileInfo = document.createElement("div")

  let name = document.createElement("h2")
  name.textContent = reptile.name

  let image = document.createElement("img")
  image.src = reptile.image
  image.classList.add("wrapper-image")      //är samma i html? 

  let description = document.createElement("p")
  description.textContent = reptile.description

  let lifespan = document.createElement("p")
  lifespan.textContent = `Lifespan: ${reptile.lifespan}`

  let group = document.createElement("p")
  group.textContent = `Group: ${reptile.group}`

  let food = document.createElement("p")
  food.textContent = `Eats: ${reptile.food}`

  let shortDescription = document.createElement("p")
  shortDescription.textContent = reptile.shortDescription

  let length = document.createElement("p")
  length.textContent = `Length: ${reptile.length}`

  let weight = document.createElement("p")
  weight.textContent = `Weight: ${reptile.weight}`

  let found = document.createElement("p")
  found.textContent = `Found: ${reptile.found}`








  reptileInfo.appendChild(name)
  reptileInfo.appendChild(image)
  reptileInfo.appendChild(description)
  reptileInfo.appendChild(group)
  reptileInfo.appendChild(lifespan)
  reptileInfo.appendChild(food)
  reptileInfo.appendChild(length)
  reptileInfo.appendChild(weight)
  reptileInfo.appendChild(found)

  

  mainContent.appendChild(reptileInfo)

}

// Click in sidebar

reptileArray.forEach(reptile => {

  let sidebarReptile = document.createElement("div")
  sidebarReptile.classList.add("sidebar-item")
  sidebarReptile.textContent = reptile.name

  sidebarReptile.addEventListener("click", () => {
    showReptileInfo(reptile)
  })

  sidebar.appendChild(sidebarReptile)
})



//read more button

const readMore = document.querySelector(".read-more")

readMore.addEventListener("click", () => {



})
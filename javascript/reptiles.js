
function Reptile(name, lifespan, group, food, description, length, weight, found, image) {
  this.name = name;
  this.lifespan = lifespan;
  this.group = group;
  this.food = food; 
  this.description = description;
  this.length = length; 
  this.weight = weight;
  this.found = found;
  this.image = image  
}

let frillNeckedLizard = new Reptile("Frill necked lizard", 20, "reptile","Small insects and spiders", "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
  90, 1, "Northern Australia", "../images/frilled-neck-lizard.jpeg")

let hawksbillTurtle = new Reptile("Hawksbill Turtle", 50, "reptile", "other animals (sponges & jellyfish), sea plants", "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.", 
  80, 50, "Tropical coasts of queensland, Northern Terrirory and Western Australia", "../images/hawksbill-turtle.jpeg")

let perentie = new Reptile("Perentie", 20, "reptile", "Carmivore, they eat animals like kangaroos, rabbits, lizards and birds", "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor. Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.", 
  2.5, 20, "Deserts", "../images/perentie.jpeg")

  


  
// Öva. hur man lägger till classList. från robs föreläsning. 

let animalTest = document.querySelector(".tab")
animalTest.classList.add("new-class") // behövs ingen punkt, vet att det är class

// jag tar html classen och lägger till en ny class.

animalTest.forEach(tab => tab.addEventListener("click", () => {        //tab är en class i Robs
  let activeTabs = document.querySelectorAll(".active").forEach(activeTab => activeTab.classList.remove("active"))

  tab.classList.add("active")
  
}))
// Här kollar man först vilka som har active för att ta bort dem, och sen lägger till active till den man klickar på.

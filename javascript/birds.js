const birds = [];
let currentBird;

function Bird(
  name,
  shortDescription,
  fullDescription,
  lifespan,
  group,
  food,
  length,
  weight,
  found,
  image
) {
  this.name = name;
  this.shortDescription = shortDescription;
  this.fullDescription = fullDescription;
  this.lifespan = lifespan;
  this.group = group;
  this.food = food;
  this.length = length;
  this.weight = weight;
  this.found = found;
  this.image = image;

  birds.push(this);
}

const toggleReadMore = () =>{
  const isHidden = fullDescription.classList.toggle("hidden")
  shortDescription.classList.toggle("hidden")
  readMore.textContent = isHidden ? "Read less" : "Read more";
}

new Bird(
  "Cassowary",
  "Its not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds.",
  "Its not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.",
  "20 years",
  "Birds",
  "Plants matter like fruit, insects and small animals like mice and lizards",
  "1.7m",
  "44kg",
  "Queensland",
  "./images/cassowary.jpg"
);

new Bird(
  "Kookaburra",
  "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length.",
  "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
  "20 years",
  "Birds",
  "Insects and small animals including snakes, frogs and lizards",
  "43cm",
  "300g",
  "Australia wide",
  "./images/kookaburra.jpg"
);

new Bird(
  "Yellow tailed black cockatoo",
  "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band.",
  "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula. Two subspecies are recognized, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
  "41 years",
  "Birds",
  "Fruit, seeds and other plant material",
  "65cm",
  "900g",
  "South-eastern Australia",
  "./images/yellow-Tailed-Black-Cockatoo.jpg"
);

const introWrapper = document.querySelector(".wrapper-intro-bird");
const wrapper = document.querySelector(".wrapper-bird");
const animalsLocation = document.querySelector(".sidebar-animals");
const imgLocation = document.querySelector(".image-bird");
const nameLocation = document.querySelector(".name-bird");
const shortDescription = document.querySelector(".short-description-bird");
const fullDescription = document.querySelector(".description-bird");
const readMore = document.querySelector(".read-more-bird")
const introTitle = document.querySelector(".intro-title")
const introText = document.querySelector(".intro-text")

introTitle.textContent = "Birds"
introText.textContent = "Birds are warm-blooded vertebrates with feathers, beaks, and highly efficient respiratory systems."


birds.forEach((bird) => {
  const buttonWrapper = document.createElement("div");
  animalsLocation.appendChild(buttonWrapper);

  const button = document.createElement("div");
  button.textContent = bird.name;
  button.classList.add("sidebar-animals-button");
  buttonWrapper.appendChild(button);

  button.addEventListener("click", () => {
const isSameBird = bird.name === currentBird
const isWrapperVisible = !wrapper.classList.contains("hidden")
    if (isSameBird && isWrapperVisible)
     {
      wrapper.classList.add("hidden");
      introWrapper.classList.remove("hidden");
    } else {
      introWrapper.classList.add("hidden");
      wrapper.classList.remove("hidden");

      const img = document.createElement("img");
      img.src = bird.image;
      img.alt = bird.name;
      imgLocation.replaceChildren(img);

      const name = document.createElement("h2");
      name.textContent = bird.name;
      nameLocation.replaceChildren(name);

      const shortPara = document.createElement("p");
      shortPara.textContent = bird.shortDescription;
      shortDescription.replaceChildren(shortPara);

      const fullPara = document.createElement("p");
      fullPara.textContent = bird.fullDescription;

      const life = document.createElement("p");
      life.textContent = `Lifespan: ${bird.lifespan}`;

      const length = document.createElement("p");
      length.textContent = `Length: ${bird.length}`;

      const weight = document.createElement("p");
      weight.textContent = `Weight: ${bird.weight}`;

      const found = document.createElement("p");
      found.textContent = `Found: ${bird.found}`;

      const food = document.createElement("p");
      food.textContent = `Eats: ${bird.food}`;

      const group = document.createElement("p");
      group.textContent = `Group: ${bird.group}`;

      fullDescription.replaceChildren(
        fullPara,
        life,
        length,
        weight,
        found,
        group,
        food
      );

      fullDescription.classList.add("hidden");
      shortDescription.classList.remove("hidden");
      readMore.textContent = "Read more";
      currentBird = bird.name;
    }
  });
});
readMore.addEventListener("click", toggleReadMore);


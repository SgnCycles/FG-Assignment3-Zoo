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
  (this.name = name),
    (this.shortDescription = shortDescription),
    (this.fullDescription = fullDescription),
    (this.lifespan = lifespan),
    (this.group = group),
    (this.food = food),
    (this.length = length),
    (this.weight = weight),
    (this.found = found);
  this.image = image;
}
let cassowary = new Bird(
  "Cassowary",
  "Cassowaries are large flightless birds with powerful legs that can run fast and swim well. They are shy and hard to spot in rainforests, not usually aggressive but can be dangerous if provoked",
  "Its not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
  "20 years",
  "Birds",
  "Plants matter like fruit, insects and small animals like mice and lizards",
  "1.7m",
  "44kg",
  "Queensland",
  "./images/cassowary.jpg"
);
let Kookaburra = new Bird(
  "Kookaburra",
  "The laughing kookaburra is the largest Kingfisher, known for its loud call and strong beak. It lives in eastern Australia and feeds on insects, small animals, and even small snakes.",
  "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
  "20 years",
  "Birds",
  "Insects and small animals including snakes, frogs and lizards",
  "43cm",
  "300g",
  "Australia wide",
  "./images/kookaburra.jpg"
);
let YellowTailedBlackCockatoo = new Bird(
  "Yellow tailed black cockatoo",
  "A large black cockatoo with yellow cheek patches and a yellow tail band. It has a slow, deep flight and loud wailing calls, and lives in forests across eastern and southern Australia",
  "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula. Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
  "41 years",
  "Birds",
  "Fruit, seeds and other plant material",
  "65cm",
  "900g",
  "South-eastern Australia",
  "./images/yellow-Tailed-Black-Cockatoo.jpg"
);
let birdsArray = [cassowary, Kookaburra, YellowTailedBlackCockatoo];
const sidebar = document.getElementById("bird-sidebar");
const main = document.getElementById("bird-main");

birdsArray.forEach((bird) => {
  let birdsContainer = document.createElement("div");
  birdsContainer.classList.add("sidebar-item");
  birdsContainer.textContent = bird.name;

  birdsContainer.addEventListener("click", () => {
    showShortSummary(bird);
  });

  sidebar.appendChild(birdsContainer);
});

function showShortSummary(bird) {
  const box = document.createElement("div");
  box.classList.add("short-summary");

  const title = document.createElement("h2");
  title.textContent = bird.name;

  const img = document.createElement("img");
  img.src = bird.image;
  img.alt = bird.name;
  img.width = 200;

  const desc = document.createElement("p");
  desc.textContent = bird.shortDescription;

  const food = document.createElement("p");
  food.textContent = "Food: " + bird.food;

  const group = document.createElement("p");
  group.textContent = "Group: " + bird.group;

  box.appendChild(title);
  box.appendChild(img);
  box.appendChild(desc);
  box.appendChild(food);
  box.appendChild(group);

  main.innerHTML = "";
  main.appendChild(box);
}

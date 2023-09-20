let collection = document.querySelector(".collection");

let objets = [
  {
    image: "/public/assets/img/stardew.jpg",
    nom: "Stardew Valley",
    parution: "26 févr. 2016",
    developpement:"ConcernedApe",
    edition:"ConcernedApe",
    description:
      "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? ",
    more: "learn more",
    lien: "https://store.steampowered.com/app/413150/Stardew_Valley/",
  },
  {
    image: "../public/assets/img/moonlighter.jpg",
    nom: "Moonlighter",
    parution: "29 mai 2018",
    developpement:"Digital Sun",
    edition:"11 bit studios",
    description:
      "Moonlighter est un jeu de rôle d'action comportant des éléments de rogue-lite. Découvrez le quotidien de Will, un marchand aventurier qui rêve de devenir un héros. ",
    more: "learn more",
    lien: "https://store.steampowered.com/app/606150/Moonlighter/",
  },
  {
    image: "./public/assets/img/isaac.jpg",
    nom: "The Binding of Isaac: Afterbirth",
    parution: "3 janv. 2017",
    developpement:"Edmund McMillen",
    edition:"Nicalis, Inc.",
    description:
      "The Binding of Isaac: Rebirth is a randomly generated action RPG shooter with heavy Rogue-like elements. Following Isaac on his journey players will find bizarre treasures that change Isaac’s form giving him super human abilities and enabling him to fight off droves of mysterious creatures, discover secrets ",
    more: "learn more",
    lien: "https://store.steampowered.com/app/570660/The_Binding_of_Isaac_Afterbirth/",
  },
  {
    image: "./public/assets/img/risk.jpg",
    nom: "Risk Of Rain 2",
    parution: "11 aout 2020",
    developpement:"Hopoo Games",
    edition:"Gearbox Publishing	",
    description:
      "Échappez à une planète étrangère chaotique en affrontant des hordes de monstres déchaînés, en solo ou entre amis. Combinez le butin de façon surprenante et maîtrisez chacun des personnages jusqu'à devenir vous-même le chaos que vous craigniez tant lors de votre premier écrasement. ",
    more: "learn more",
    lien: "https://store.steampowered.com/app/632360/Risk_of_Rain_2/",
  },
  {
    image: "./public/assets/img/hollow.jpg",
    nom: "Hollow Knight",
    parution: "24 févr. 2017",
    developpement:"Hopoo Games",
    edition:"Gearbox Publishing",
    description:
      "Choisissez votre destin dans Hollow Knight ! Une aventure épique et pleine d’action, qui vous plongera dans un vaste royaume en ruine peuplé d’insectes et de héros. Dans un monde en 2D classique, dessiné à la main. ",
    more: "learn more",
    lien: "https://store.steampowered.com/app/367520/Hollow_Knight/",
  },
  {
    image: "./public/assets/img/lamb.jpg",
    nom: "Cult of the Lamb",
    parution: "11 aout 2022",
    developpement:"Massive Monster",
    edition:"Devolver Digital",
    description:
      "Montez votre propre culte dans un pays de faux prophètes, parcourez des régions étonnantes et mystérieuses pour faire croître une communauté d'adeptes fidèles dans les bois et répandez la bonne parole pour devenir le seul culte véritable. ",
    more: "learn more",
    lien: "https://store.steampowered.com/app/1313140/Cult_of_the_Lamb/",
  },
  {
    image: "./public/assets/img/darkest.jpg",
    nom: "Darkest Dungeon®",
    parution: "19 janv. 2016",
    developpement:"Red Hook Studios",
    edition:"Red Hook Studios",
    description:
      "Darkest Dungeon est un JdR rogue-like au tour par tour, gothique et sans pitié, sur le stress psychologique de partir à l'aventure. Recrute, entraîne et mène une équipe d'anti-héros au travers de forêts déformées, de tanières oubliées, de cryptes en ruines et au-delà." ,
    more: "learn more",
    lien: "https://store.steampowered.com/app/262060/Darkest_Dungeon/",
  },
  {
    image: "./public/assets/img/darkest2.jpg",
    nom: "Darkest Dungeon® II",
    parution: "8 mai 2023",
    developpement:"Red Hook Studios",
    edition:"Red Hook Studios",
    description:
      "Darkest Dungeon II est un voyage maudit. Assemblez un groupe, équipez votre diligence et traversez un monde en ruines dans une course désespérée pour empêcher l’apocalypse. Mais méfiez-vous, car vos plus grands obstacles pourraient bien venir de l’intérieur… " ,
    more: "learn more",
    lien: "https://store.steampowered.com/app/1940340/Darkest_Dungeon_II/",
  },
  {
    image: "./public/assets/img/enter.jpg",
    nom: "Enter the Gungeon",
    parution: "5 avr. 2016",
    developpement:"Dodge Roll",
    edition:"Devolver Digital",
    description:
      "Enter the Gungeon est un jeu d'exploration d'un donjon où une horde d'aventuriers tiraille à tout va, pille, manie la roulade d'esquive et renverse les tables dans l'espoir de trouver la rédemption. " ,
    more: "learn more",
    lien: "https://store.steampowered.com/app/311690/Enter_the_Gungeon/",
  },
  {
    image: "./public/assets/img/exit.jpg",
    nom: "Exit the Gungeon",
    parution: "17 mars 2020",
    developpement:"Dodge Roll",
    edition:"Devolver Digital",
    description:
      "Exit the Gungeon est un petit jeu spin-off sympatoche d'action-arcade explosif qui se déroule juste après les aventures de Gungeonniers un peu barjots. " ,
    more: "learn more",
    lien: "https://store.steampowered.com/app/1209490/Exit_the_Gungeon/",
  },
]

objets.forEach((objet) => {
  const card = document.createElement("div");
  card.classList.add("flex","flex-col","bg-steamBlue","rounded-lg","shadow-md","mb-4","p-4");

  const nom = document.createElement("h2");
  nom.textContent = objet.nom;
  nom.classList.add("text-xl", "font-semibold", "text-center", "mb-2","text-steamWhite");
  card.appendChild(nom);

  const image = document.createElement("img");
  image.src = objet.image;
  image.classList.add("w-full", "h-auto");
  card.appendChild(image);

  const parution = document.createElement("p");
  parution.textContent = `Parution: ${objet.parution}`;
  parution.classList.add("text-steamWhite", "py-2");
  card.appendChild(parution);

  const description = document.createElement("p");
  description.textContent = objet.description;
  description.classList.add("py-2", "text-steamWhite");
  card.appendChild(description);

  const edition = document.createElement("p");
  edition.textContent = `Édition: ${objet.edition}`;
  edition.classList.add("py-2", "text-steamLightBlue");
  card.appendChild(edition);

  const developpement = document.createElement("p");
  developpement.textContent = `Développement: ${objet.developpement}`;
  developpement.classList.add("py-2", "text-steamLightBlue");
  card.appendChild(developpement);

  const more = document.createElement("a");
  more.textContent = objet.more;
  more.href = objet.lien;
  more.target = "_blank";
  more.classList.add("py-2", "text-steamGreen");
  card.appendChild(more);

  collection.appendChild(card);
});
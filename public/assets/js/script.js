let collection = document.querySelector(".collection");

// Ajoutez le sélecteur HTML pour choisir l'ordre de tri
const sortOrderSelect = document.getElementById("sortOrder");
  sortOrderSelect.addEventListener("change", () => {
    const sortOrder = sortOrderSelect.value;
    sortItems(sortOrder);
  });

// Fonction pour trier les objets
function sortItems(order) {
  objets.sort((a, b) => {
    if (order === "asc") {
      return a.nom.localeCompare(b.nom);
    } else if (order === "desc") {
      return b.nom.localeCompare(a.nom);
    }
  });

  // Effacez la collection existante
  collection.innerHTML = "";

  // Réaffichez les objets triés
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
      more.classList.add("py-2","px-1", "text-steamGreen", "bg-steamDarkBlue","rounded-lg","text-center", "hover:border", "hover:border-steamWhite", "hover:p-2", "hover:transition");
      card.appendChild(more);
    
    collection.appendChild(card);
      
  });
}

// Initialisez le tri avec l'ordre alphabétique croissant au chargement de la page
sortItems("asc");
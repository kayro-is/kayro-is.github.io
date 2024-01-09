function toggleColor() {
    if (this.style.backgroundColor === "black") {
      this.style.backgroundColor = "gray";
    } else {
      this.style.backgroundColor = "black";
    }
  }
  
  // Récupérer les éléments du DOM
  const gridSizeInput = document.getElementById("gridSize");
  const gridPixelsInput = document.getElementById("gridPixels");
  const confirmBtn = document.getElementById("confirm-btn");
  const gridContainer = document.getElementById("invader");
  // Ajouter un écouteur d'événement pour le bouton "Valider"
  confirmBtn.addEventListener("click", handleConfigurationSubmit);
  
  function handleConfigurationSubmit(event) {
    event.preventDefault(); // empêche le rechargement par défaut de la page
  
    // Récupérer les valeurs saisies
    // L'attribut value de l'élément de formulaire est utilisé pour obtenir la valeur actuelle entrée
    //par l'utilisateur dans le champ de saisie. Cette valeur est généralement une chaîne de caractères.
    const gridSize = parseInt(document.getElementById("gridSize").value);
    const gridPixels = parseInt(document.getElementById("gridPixels").value);
  
    generateGrid(gridSize, gridPixels);
  }
  const app = {
    styles: ['plain', 'empty', 'light', 'highlight'],
    currentStyleIndex: 0, // Indice du style actuel
  
    // Fonction pour changer la couleur du pixel en fonction du style actuel
    toggleColor: function () {
      // Récupérer l'index du style actuel
      let currentStyleIndex = app.currentStyleIndex;
  
      // Retirer toutes les classes de style existantes du pixel
      this.classList.remove(...app.styles);
  
      // Changer le style en suivant la séquence
      currentStyleIndex = (currentStyleIndex + 1) % app.styles.length;
  
      // Ajouter la nouvelle classe de style
      this.classList.add(app.styles[currentStyleIndex]);
  
      // Mettre à jour l'indice du style actuel dans l'objet app
      app.currentStyleIndex = currentStyleIndex;
    },
    }
  // ...
  
  // Fonction pour générer la grille en fonction des valeurs saisies
  function generateGrid(gridSize, gridPixels) {
    // Vérifier si les valeurs sont des nombres valides et positifs
    if (
      !isNaN(gridSize) &&
      !isNaN(gridPixels) &&
      gridSize > 0 &&
      gridPixels > 0
    ) {
      // Attribuer le layout au conteneur
      gridContainer.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)';
      gridContainer.style.gridTemplateRows = 'repeat(' + gridSize + ', 1fr)';
  
      // Générer la grille HTML
      gridContainer.innerHTML = ""; // Effacer la grille existante
  
      for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style.width = `${gridPixels}px`;
        gridItem.style.height = `${gridPixels}px`;
        gridContainer.appendChild(gridItem);
        gridItem.addEventListener("click",toggleColor);
      }
    } else {
      alert(
        "Veuillez entrer des valeurs valides et positives pour la taille de la grille et la taille des pixels."
      );
    }
  }
  
  generateGrid(8, 24);

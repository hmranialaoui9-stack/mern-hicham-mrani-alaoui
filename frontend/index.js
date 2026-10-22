

const API_URL = `${CONFIG.API_BASE_URL}/items`;


const form = document.getElementById("itemForm");
const nameInput = document.getElementById("name");
const descriptionInput = document.getElementById("description");
const priceInput = document.getElementById("price");
const itemsList = document.getElementById("itemsList");
const message = document.getElementById("message");
const loading = document.getElementById("loading");
const submitBtn = document.getElementById("submitBtn");
const refreshBtn = document.getElementById("refreshBtn");

// Afficher un message
function showMessage(text, type = "") {
  message.textContent = text;
  message.className = type;
  message.hidden = !text;
}

// Charger les éléments
async function loadItems() {
  loading.hidden = false;
  refreshBtn.disabled = true;
  itemsList.replaceChildren();
  showMessage("");

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    const data = await response.json();

    // Accepter une liste ou un objet contenant items
    const items = Array.isArray(data) ? data : data.items;

    if (!Array.isArray(items)) {
      throw new Error("Format de réponse invalide");
    }

    if (items.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty";
      empty.textContent = "Aucun élément pour le moment.";
      itemsList.appendChild(empty);
      return;
    }

    items.forEach((item) => {
      const article = document.createElement("article");
      article.className = "item";

      const title = document.createElement("h3");
      title.textContent = item.name || "Sans nom";
      article.appendChild(title);

      const description = document.createElement("p");
      description.textContent = item.description || "Sans description";
      article.appendChild(description);

      const price = document.createElement("p");
      price.textContent =
        `Prix : ${item.price ?? "Non renseigné"} DH`;
      article.appendChild(price);

      itemsList.appendChild(article);
    });
  } catch (error) {
    showMessage(
      `Impossible de charger les éléments : ${error.message}`,
      "error"
    );
  } finally {
    loading.hidden = true;
    refreshBtn.disabled = false;
  }
}

// Ajouter un élément
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  showMessage("");

  const name = nameInput.value.trim();
  const description = descriptionInput.value.trim();
  const price = Number(priceInput.value);

  if (!name || priceInput.value.trim() === "" ||
      !Number.isFinite(price) || price < 0) {
    showMessage("Veuillez saisir un nom et un prix valide.", "error");
    return;
  }

  submitBtn.disabled = true;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, description, price })
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(
        result.message || `Erreur HTTP ${response.status}`
      );
    }

    showMessage("Élément ajouté avec succès !", "success");
    form.reset();
    await loadItems();
  } catch (error) {
    showMessage(
      `Échec de l'ajout : ${error.message || "Erreur inconnue"}`,
      "error"
    );
  } finally {
    submitBtn.disabled = false;
  }
});

// Actualiser la liste
refreshBtn.addEventListener("click", loadItems);

// Chargement initial
loadItems();

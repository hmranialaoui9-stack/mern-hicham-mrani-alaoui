# Gestion des éléments — MERN

## 1. Objectif du projet

Ce projet est une application web de gestion des éléments. Elle permet de consulter la liste des éléments et d'en ajouter via une interface responsive.

Le projet utilise :
- **Frontend :** HTML, CSS et JavaScript natif.
- **Backend :** Node.js et Express.js.
- **Base de données :** MongoDB avec Mongoose.
- **Configuration :** variables d'environnement avec dotenv.
- **Communication :** API REST utilisant JSON et `fetch()`.

## 2. Prérequis

Avant de lancer le projet, installer :
- Node.js et npm.
- MongoDB Atlas ou une instance MongoDB accessible.
- Visual Studio Code (recommandé).
- Une extension comme Live Server pour exécuter le frontend en local.

## 3. Installation

### Cloner le dépôt

```bash
git clone https://github.com/hamrahiaoui-stack/mern-hicham-mrani-alaoui.git
cd mern-hicham-mrani-alaoui
```

### Installer les dépendances du backend

```bash
cd backend
npm install
```

Si Nodemon ou CORS n'est pas encore installé :

```bash
npm install --save-dev nodemon
npm install cors
```

### Configurer les variables d'environnement

Créer un fichier `backend/.env` :

```dotenv
PORT=3000
MONGODB_URI=mongodb+srv://<utilisateur>:<mot_de_passe>@<cluster>/<base>?retryWrites=true&w=majority
```

Remplacer les valeurs entre chevrons par les informations de connexion réelles. Ne jamais publier le fichier `.env` ni ses identifiants sur GitHub.

## 4. Commandes

Depuis le dossier `backend` :

### Démarrage normal

```bash
npm start
```

### Démarrage en développement

```bash
npm run hicham
```

Le serveur écoute sur le port défini par `PORT`, ou sur le port `3000` si cette variable n'est pas définie.

### Lancer le frontend

Ouvrir le dossier `frontend` dans VS Code, puis lancer `index.html` avec Live Server.

Le fichier `frontend/config.js` contient l'URL de base de l'API :

```javascript
const CONFIG = {
  API_BASE_URL: "http://localhost:3000/api"
};
```

Adapter cette URL à l'adresse du backend lors du déploiement.

## 5. Variables requises

| Variable | Description | Exemple local |
|---|---|---|
| `PORT` | Port du serveur Express | `3000` |
| `MONGODB_URI` | URI de connexion MongoDB | URI MongoDB Atlas |

Les variables sont chargées par `dotenv` dans le backend. `MONGODB_URI` doit rester secrète.

L'URL du frontend est définie dans `frontend/config.js`. Cette configuration est publique et ne doit contenir aucun secret.

## 6. Routes API

URL locale de base : `http://localhost:3000/api`

| Méthode | Route | Description |
|---|---|---|
| GET | `/api/health` | Vérifier le fonctionnement du serveur |
| GET | `/api/items` | Récupérer la liste des éléments |
| POST | `/api/items` | Valider et créer un élément |

### Exemple de requête POST

```json
{
  "name": "Clavier",
  "description": "Clavier USB",
  "price": 150
}
```

### Codes HTTP principaux

- `200 OK` : requête réussie.
- `201 Created` : élément créé.
- `400 Bad Request` : données invalides.
- `500 Internal Server Error` : erreur serveur.

## 7. Structure du projet

```text
mern-hicham-mrani-alaoui/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── index.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── index.html
│   ├── index.css
│   ├── index.js
│   └── config.js
└── README.md
```

## 8. Déploiement

Compléter les liens ci-dessous après le déploiement :

- **Dépôt GitHub :** https://github.com/hamrahiaoui-stack/mern-hicham-mrani-alaoui
- **Frontend en ligne :** à compléter après le déploiement.
- **Backend en ligne :** à compléter après le déploiement.
- **API de santé :** `<URL_BACKEND>/api/health`

Pour déployer le projet, publier le backend sur une plateforme compatible avec Node.js, configurer `PORT` et `MONGODB_URI` dans les variables d'environnement de cette plateforme, puis publier le frontend sur un hébergeur de sites statiques. Mettre à jour `frontend/config.js` avec l'URL publique du backend et configurer CORS pour autoriser le domaine du frontend.

## 9. Sécurité

- Ne pas versionner le fichier `.env`.
- Ne pas exposer les identifiants MongoDB dans le frontend.
- Configurer les autorisations réseau de MongoDB Atlas.
- Limiter CORS aux origines autorisées en production.

## 10. Auteur

**Hicham Mrani Alaoui**

Projet réalisé dans le cadre d'un exercice de développement web avec Node.js, Express et MongoDB.

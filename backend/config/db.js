
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connecté avec succès");
  } catch (error) {
    console.error("Erreur de connexion MongoDB :", error.message);
    throw error;
  }
}

module.exports = connectDB;

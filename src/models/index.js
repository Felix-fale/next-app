import mongoose from "mongoose";
import Post from "./Post";

const getModel = (name, schema) => {
  // Vérifier si le modèle existe déjà
  if (mongoose.modelNames().includes(name)) {
    return mongoose.model(name);
  } else {
    return mongoose.model(name, schema);
  }
};

const models = {
  Post: getModel("Post", Post),
  // Ajoutez d'autres modèles ici si nécessaire
};

export default models;

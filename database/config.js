const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão realizada com sucesso ao banco de dados.");
  } catch (error) {
    console.log(error);
    throw new Error("Não foi possível conectar ao servidor de base de dados.");
  }
};

module.exports = { dbConnection };

const mongoose = require("../dataBase/index"); //Nessa parte eu crio e envio para banco de dados
const jogoSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  imagem: {
    type: String,
    require: true,
  },
});

const Jogo = mongoose.model("Jogo", jogoSchema);

module.exports = Jogo;
import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        "id": {type:String},
        "nome": {type:String, required: true},
        "idade":  {type:String, required: true},
        "telefone":  {type:String, required: true},
        "e-mail": {type:String, required: true},
        "senha": {type:String, required: true},
        "permissão": {type:String, required: true},
    }
);

const usuario = mongoose.model("usuario", usuarioSchema);

export default usuario;
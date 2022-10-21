import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        "_id": {type:String},
        "email": {type:String, required: true},
        "senha": {type:String, required: true},
        "permissao": {type:String, required: true},
    }
);

const usuario = mongoose.model("usuarios", usuarioSchema);

export default usuario;
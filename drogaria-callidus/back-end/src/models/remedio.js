import mongoose from "mongoose";

const remedioSchema = new mongoose.Schema(
    {
        "id": {type:String},
        "nome": {type:String, required: true},
        "marca":  {type:String, required: true},
        "preco":  {type:Number, required: true}
    }
);

const remedio = mongoose.model("remedio", remedioSchema);

export default remedio;
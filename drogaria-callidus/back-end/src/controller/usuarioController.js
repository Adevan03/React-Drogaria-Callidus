import mongoose from "mongoose";
import usuario from "../models/usuario.js"

class UsuarioController {
    static logarUsuario = (req, res)=>{
        let user = req.params
        usuario.find(user).exec((err, usr) =>{
            if(err) {
                return res.status(406).send({message: `${err}`});
            }
            if(usr.senha === req.body.senha){
                return res.status(200).send(usr);
            }
            return res.status(400).send("Senha inválida");
        })
    }

    static criarUsuario = (req, res)=>{
        newUser = new mongoose(req.body);
        newUser.save((err)=>{
            if(err)
                res.status(500).send({message: `${err} - Não foi possível criar um novo usuário`});
            else
                res.status(201).send(newUser.toJson());
        })
    }
}

export default UsuarioController;
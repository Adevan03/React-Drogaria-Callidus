import usuario from "../models/usuario.js"

class UsuarioController {
    static logarUsuario = (req, res)=>{
        usuario.find({"email": req.body.email}, (err, usr)=>{
            if(err) res.status(406).send({message: `${err} - Não foi possível achar o usuário`});
            else{ 
                if(usr.body.senha == req.body.senha) res.status(200).send();
                else res.status(400).send({message: `Senha inválida`});
            }
        })
    }
}

export default UsuarioController;
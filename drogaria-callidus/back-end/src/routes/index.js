import express from "express";
import usuarioRoute from "./usuarioRoutes.js"

const routes = (app)=>{
    app.route("/").get((req, res)=>{
        res.status(200).send();
    })

    app.use(
        express.json,
        usuarioRoute
    )
}

export default routes;


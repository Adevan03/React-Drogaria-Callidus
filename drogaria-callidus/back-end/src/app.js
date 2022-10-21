import express from "express";
import db from "./config/connectDB.js";
import routes from "./routes/index.js";

const app = express();

db.on("error", ()=>console.log("Não foi possível conectar ao banco de dados"));
db.once("open", ()=>console.log("Conexão com o banco de dados estabelecida"));

routes(app);

export default app;


import mongoose from "mongoose";

mongoose.connect("mongodb+srv://callidus:123@drogaria-callidus.u2afego.mongodb.net/drogaria");
const db = mongoose.connection;

export default db;
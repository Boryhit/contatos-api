import express from "express";
import logMiddleware from "./middleware/logger.js";
import createContato from "./controllers/createContato.js";
import listContatos from "./controllers/listContatos.js";
import updateContato from "./controllers/updateContato.js";
import deleteContato from "./controllers/deleteContato.js";

const app = express();

const port = 3000;

app.use(express.json());
app.use(logMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/contatos", listContatos);

app.post("/contatos", createContato);

app.put("/contatos/:id", updateContato);

app.delete("/contatos/:id", deleteContato);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
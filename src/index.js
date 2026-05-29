import express from "express";
import mongoose from "mongoose";
import logMiddleware from "./middleware/logger.js";
import { createUserService, getAllUsersService, getUserByIdService, getUserByNameService, getUserByEmailService, getUserByPhoneService, updateUserService, updateNameService, updateEmailService, updatePhonesService, deleteUserService } from "./service/user.service.js";

const app = express();

const port = 3000;

mongoose.connect("mongodb+srv://mateusvog_db_user:mateus@lionsdev.by64mbg.mongodb.net/")

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

mongoose.connection.once("connected", () => {
  console.log("MongoDB connection established.");
});


app.use(express.json());
app.use(logMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app .get("/contatos", async (req, res) => {
  try {
    const users = await getAllUsersService();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/contatos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getUserByIdService(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

app.get("/contatos/name/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const user = await getUserByNameService(name);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

app.get("/contatos/email/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const user = await getUserByEmailService(email);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

app.get("/contatos/phone/:phone", async (req, res) => {
  try {
    const phone = req.params.phone;
    const user = await getUserByPhoneService(phone);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

app.post("/contatos", async (req, res) => {
  try {
    const newUser = await createUserService(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.put("/contatos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await updateUserService(id, req.body);
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.delete("/contatos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await deleteUserService(id);
    return res.status(200).json(deleteUser);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.patch("/contatos/name/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const updatedName = await updateNameService(req.params.id, name);
    return res.status(200).json(updatedName);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.patch("/contatos/email/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const updatedEmail = await updateEmailService(req.params.id, email);
    return res.status(200).json(updatedEmail);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.patch("/contatos/phones/:telefones", async (req, res) => {
  try {
    const telefones = req.params.telefones;
    const updatedPhones = await updatePhonesService(req.params.id, telefones);
    return res.status(200).json(updatedPhones);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

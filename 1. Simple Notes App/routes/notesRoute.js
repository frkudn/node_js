import express from "express";
import { fetchNotes, createNote, deleteNote, updateNote} from "../controller/notesController.js";

export const route = express.Router();

route.get("/notes/get", fetchNotes);
route.post("/notes/create", createNote);
route.delete("/notes/delete/:id", deleteNote);
route.patch("/notes/update/:id", updateNote);




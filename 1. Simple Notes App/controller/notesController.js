import express from "express";
import Note from "../models/notesModel.js";


// Fetch Notes
export const fetchNotes = async (req, res) => {
  try {
    // Get all notes from the database
    const notes = await Note.find();
    if (notes.length > 0 && notes != null) {
      res.status(200).json({
        notes,
      });
    } else {
      res.status(404).json({
        message: "No notes found",
      });
    }
  } catch (error) {
    res.status(200).json({
      "errorMessage": error.message
    });
  }
};


// Create Note
export const createNote = async (req, res) => {
  try {
    const data = req.body;
    const note = await new Note(data);
    await note.save();
    res.status(201).json({
      message: "Note created successfully",
      note,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Update Note
export const updateNote = async (req, res) => {
  try {
    const id = req.params.id;
    const noteExist = await Note.findById({ _id: id });
    if (noteExist) {
      const updatedNote = Note.findOneAndUpdate({ _id: id }, req.body);
      res.status(201).json(updateNote);
    } else {
      res.status(404).json({
        message: "Note not found",
      });
    }
  } catch (error) {}
};


// Delete Note
export const deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    const noteExist = await Note.findOneAndDelete({ _id: id });
    if (noteExist) {
      Note.findByIdAndDelete({ _id: id });
      res.status(200).json({
        message: "Note deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "Note not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};




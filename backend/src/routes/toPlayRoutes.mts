import express from "express";
import { gameList, getGames } from "../controllers/toplayController.mjs";

export const toPlayRouter = express.Router();

//read - GET /toplay
toPlayRouter.get("/", (req, res) => {
  try {
    const { search, sort } = req.query;
    const games = getGames(search, sort);

    res.status(200).json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal error", error });
  }
});

//read - GET /toplay/:id

//create - POST - /toplay

//delete - /toplay/:id

// update - PATCH/PUT /toplay/:id - body

import express from "express";
import {
  gameList,
  getGame,
  getGames,
} from "../controllers/toplayController.mjs";

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

//read - GET /toplay/1
toPlayRouter.get("/:id", (req, res) => {
  try {
    const { id } = req.params;

    const game = getGame(id);

    if (game) {
      res.status(200).json(game);
    } else {
      res.status(400).json({ message: "No game found with id: " + id });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

//create - POST - /toplay

//delete - /toplay/:id

// update - PATCH/PUT /toplay/:id - body

import { Router } from "express";
import db from "../../db";
import {isGuest} from '../../middlewares/auth-checkpoint'

const router = Router();

router.get("/", async (req: any, res) => {
  try {
    let books = await db.books.all();
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
});

router.get("/:id",async (req: any, res) => {
  try {
    let book = await db.books.one(req.params.id);
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
});

router.post("/",async (req: any, res) => {
  try {
    let book = await db.books.post(
      req.body.categoryid,
      req.body.title,
      req.body.author,
      req.body.price
    );
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
});

router.delete("/:id",async (req: any, res) => {
  try {
    let book = await db.books.destroy(req.params.id);
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
});

router.put("/:id",async (req: any, res) => {
  try {
    let edit = await db.books.edit(
      req.body.categoryid,
      req.body.title,
      req.body.author,
      req.body.price,
      req.params.id
    );
    res.json(edit);
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
});

export default router;


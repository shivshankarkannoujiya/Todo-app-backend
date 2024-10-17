import { Router } from "express";
import { createTodo } from "../controllers/createTodo.controller.js";
import { getTodo, getTodoById } from "../controllers/getTodo.controller.js";
import { updateTodo } from "../controllers/updateTodo.controller.js";
import { deleteTodo } from "../controllers/deleteTodo.controller.js";

const router = Router();


router.route("/create").post(createTodo)
router.route("/getTodos").get(getTodo)
router.route("/getTodos/:id").get(getTodoById)
router.route("/update/:id").put(updateTodo)
router.route("/delete/:id").delete(deleteTodo)


export default router
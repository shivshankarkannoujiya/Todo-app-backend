import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Todo } from "../models/Todo.models.js";

const createTodo = asyncHandler(async (req, res) => {
    const { title, description } = req.body;

    if (!(title && description)) {
        throw new ApiError(400, "All Fields are required !");
    }

    const todo = await Todo.create({
        title,
        description,
    });

    return res
        .status(201)
        .json(
            new ApiResponse(200, "Todo Created Successfully !!", todo)
        );
});

export { createTodo };

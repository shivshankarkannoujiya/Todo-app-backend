import { Todo } from "../models/Todo.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getTodo = asyncHandler(async (_, res) => {
    const todos = await Todo.find({});

    if (!todos) {
        throw new ApiError(404, "todos does not exist !!");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, "todos fetched Successfully !!", todos));
});

const getTodoById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    if (!todo) {
        throw new ApiError(404, "Todo does not exist !!");
    }

    return res
        .status(201)
        .json(new ApiResponse(200, `Fetched ${id} data Successfully`, todo));
});


export { getTodo, getTodoById };

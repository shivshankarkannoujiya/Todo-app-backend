import { Todo } from "../models/Todo.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const updateTodo = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!(title, description)) {
        throw new ApiError(400, "All fields required !!");
    }

    const todo = await Todo.findByIdAndUpdate(
        { _id: id },
        { title, description }
    );

    return res
        .status(201)
        .json(new ApiResponse(200, `Todo Updated Successfully !!`, todo));
});

export { updateTodo };

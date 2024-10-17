import { Todo } from "../models/Todo.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const deleteTodo = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        throw new ApiError("404", "Please enter the id");
    }

    await Todo.findByIdAndDelete({ _id: id });

    return res
        .status(201)
        .json(new ApiResponse(200, `Todo DELETED Successfully`));
});

export { deleteTodo };

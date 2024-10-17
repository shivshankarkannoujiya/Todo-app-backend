import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minLength: 3,
            index: true,
        },

        description: {
            type: String,
            required: String,
            minLength: 5,
        },
    },
    { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);
export { Todo };

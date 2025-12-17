import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            default: "",
        },
        email: {
            type: String,
            default: "",
        },
        imageUrl: {
            type: String,
            default: "",
        },
        cartItems: {
            type: Object,
            default: {},
        },
        role: {
            type: String,
            default: "user",
        },
    },
    { minimize: false, timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);

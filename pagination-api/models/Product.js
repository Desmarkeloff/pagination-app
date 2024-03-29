import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: () => {
            return this.createdAt.toLocaleDateString();
        }
    }
});

export default mongoose.model("Product", ProductSchema);
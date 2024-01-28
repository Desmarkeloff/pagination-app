import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        await newProduct.save();
        res.status(201).json({ uid: newProduct._id, title: newProduct.title, description: newProduct.description, price: newProduct.price });

    } catch (error) {
        res.status(400).json(error);
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const updateProducts = async (req, res) => {
    try {
        const product = Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteProducts = async (req, res) => {
    try {
        const product = Product.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
};
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

export const getLimitedProducts = async (req, res) => {

    try {
        const products = await Product.find();
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit);
        if (!limit) {
            return res.status(400).json({ ok: false, msg: "No hay límite en la url" });
        }

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const results = {
            pagination: {
                totalProducts: products.length,
                pageCount: Math.ceil(products.length / limit),
                next: endIndex < products.length ? { page: page + 1, limit } : null,
                prev: startIndex > 0 ? { page: page - 1, limit } : null
            },
            data: products.slice(startIndex, endIndex)
        };

        if (startIndex > 0) {
            results.prev = {
                page: page - 1,
                limit: limit
            };
        }

        res.json(results);
    } catch (error) {
        res.status(500).json(error);
    }
};
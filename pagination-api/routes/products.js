import express from "express";

import { check } from "express-validator";
import { validarCampos } from "../helpers/validarCampos.js";
import { createProduct, deleteProducts, getProducts, updateProducts } from "../controllers/products.js";

const router = express.Router();

//CREATE
router.post('/',
    [
        check("title", "El título es demasiado corto.")
            .not()
            .isEmpty()
            .isLength({ min: 8 }),
        check("description", "La descripción es demasiado corta")
            .not()
            .isEmpty()
            .isLength({ min: 5 }),
        check("price", "El precio mínimo es de 10 pesos crocantes.")
            .not()
            .isEmpty()
            .isLength({ min: 2 }),
        validarCampos
    ],
    createProduct
);

//READ
router.get('/', getProducts);
//UPDATE
router.put('/:id', updateProducts);
//DELETE
router.delete('/:id', deleteProducts);

export default router;
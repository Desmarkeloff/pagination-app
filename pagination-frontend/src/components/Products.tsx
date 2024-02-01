import { useEffect, useState } from "react";
import { useFetch } from "../hooks/UseFetch";
import "../styles/products.css";
import gokuPng from "../../public/goku.png";
import { Button, TextField } from "@mui/material";

export const Products = () => {

    interface Product {
        _id: number;
        title: string;
        description: string;
        price: number;
    }

    const [query, setQuery] = useState<string>("");

    const queryUrl: string = "http://localhost:3011/api/products/paginatedProducts";
    const { data } = useFetch(queryUrl);

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (data) {
            setProducts(data);
        }
    }, [data]);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = Array.isArray(products) ? products.slice(indexOfFirstProduct, indexOfLastProduct) : [];
    const totalPageCount = Array.isArray(products) ? Math.ceil(products.length / productsPerPage) : 0;


    const handlePageClick = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="products-container">
            <div className="products-wrapper">
                <TextField
                    style={{
                        "margin": "25px 0px 0px 0px",
                    }}
                    className="input-search"
                    id="outlined-basic"
                    label="Buscar productos"
                    variant="outlined"
                    name="query"
                // value=""
                />
                <div className="products-section-container">
                    <div className="products-section-wrapper">
                        {
                            currentProducts.length === 0
                                ? <h1>Loading...</h1>
                                : currentProducts.map((product) => (
                                    <div key={product._id} className="product">
                                        <img className="product-image" src={gokuPng} alt="" />
                                        <div className="product-info">
                                            <span className="product-title">{product.title}</span>
                                            <span className="product-price">${product.price}</span>
                                        </div>
                                    </div>
                                ))
                        }

                    </div>
                </div>
                <div className="pagination">
                    <Button
                        disabled={currentPage === 1}
                        onClick={() => handlePageClick(currentPage - 1)}
                    >
                        Prev
                    </Button>
                    {Array.from({ length: totalPageCount }, (_, index) => (
                        <Button
                            key={index + 1}
                            onClick={() => handlePageClick(index + 1)}
                            variant={currentPage === index + 1 ? "contained" : "outlined"}
                        >
                            {index + 1}
                        </Button>
                    ))}
                    <Button
                        disabled={currentPage === totalPageCount}
                        onClick={() => handlePageClick(currentPage + 1)}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};


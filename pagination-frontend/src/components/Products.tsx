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

    interface ApiResponse {
        data: Product[];
        pagination: {
            totalProducts: number;
            pageCount: number;
            next: {
                page: number;
                limit: number;
            } | null;
            prev: {
                page: number;
                limit: number;
            } | null;
        };
    }

    // const [query, setQuery] = useState<string>("");

    const productsPerPage: number = 5;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const queryUrl: string = `http://localhost:3011/api/products/paginatedProducts?limit=${productsPerPage}&page=${currentPage}`;

    const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
    const [products, setProducts] = useState<Product[] | null>();

    const { data } = useFetch(queryUrl);

    useEffect(() => {
        if (data) {
            setApiResponse(data);
            setProducts(data.data);
        }
    }, [data]);

    console.log(apiResponse);
    const totalPageCount: number | undefined = apiResponse?.pagination.pageCount;

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
                            !products
                                ? <h1>Loading...</h1>
                                : products.map((product) => (
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
                    {
                        !totalPageCount
                            ? "Loading..."
                            :
                            Array.from({ length: totalPageCount }, (_, index) => (
                                <Button
                                    key={index + 1}
                                    onClick={() => handlePageClick(index + 1)}
                                    variant={currentPage === index + 1 ? "contained" : "outlined"}
                                >
                                    {index + 1}
                                </Button>
                            ))}
                    <Button
                        disabled={currentPage === apiResponse?.pagination.pageCount}
                        onClick={() => handlePageClick(currentPage + 1)}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};


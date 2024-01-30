import { TextField } from "@mui/material";
import "../styles/products.css";
import gokuPng from "../../public/goku.png";
import { useFetch } from "../hooks/UseFetch";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export const Products = () => {

    interface Product {
        _id: number;
        title: string;
        description: string;
        price: number;
    }

    const queryUrl: string = "http://localhost:3011/api/products";
    const { data } = useFetch(queryUrl);

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (data) {
            setProducts(data);
        }
    }, [data]);

    const handlePageClick = (e: any) => {
        console.log(e);
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
                                ? <h1>Loading perringui</h1>
                                :
                                products.map((product) => (
                                    <div key={product._id} className="product">
                                        {/* Assuming you have an image URL in your product data */}
                                        <img className="product-image" src={gokuPng} alt="" />
                                        <div className="product-info">
                                            <span className="product-title">{product.title}</span>
                                            <span className="product-price">${product.price}</span>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                    <>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={8}
                            previousLabel="< previous"
                            renderOnZeroPageCount={null}
                            marginPagesDisplayed={2}
                            containerClassName="pagination justify-content-center"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            activeClassName="active"
                        />
                    </>
                </div>
            </div>
        </div>
    );
};

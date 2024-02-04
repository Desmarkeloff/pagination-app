import { Navbar } from "./Navbar";
import "../styles/product.css";
import gokuPng from "../../public/goku.png";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";

export const Product = () => {

    const navigate = useNavigate();
    const { product } = useContext(ProductContext);
    return (
        <>
            <Navbar />
            <div className="product-container">
                <div className="product-wrapper">
                    <div className="product-img-container">
                        <h3 className="goback-btn" onClick={() => navigate("/products")}>Atrás</h3>
                        <img src={gokuPng} alt="" className="product-img" />
                    </div>
                    <div className="product-data-container">
                        <div className="product-title">{product?.title}</div>
                        <div className="product-price">${product?.price}</div>
                        <div className="product-description">{product?.desc}</div>
                    </div>
                </div>
            </div>
        </>

    );
};

import { TextField } from "@mui/material";
import "../styles/products.css";
import gokuPng from "../../public/goku.png";

export const Products = () => {
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
                        <div className="product">
                            <img className="product-image" src={gokuPng} alt="" />
                            <div className="product-info">
                                <span className="product-title">Jajjaa mira un goku chikito</span>
                                <span className="product-price">$69420</span>
                            </div>
                        </div>
                        <div className="product">
                            <img className="product-image" src={gokuPng} alt="" />
                            <div className="product-info">
                                <span className="product-title">Jajjaa mira un goku chikito</span>
                                <span className="product-price">$69420</span>
                            </div>
                        </div>
                        <div className="product">
                            <img className="product-image" src={gokuPng} alt="" />
                            <div className="product-info">
                                <span className="product-title">Jajjaa mira un goku chikito</span>
                                <span className="product-price">$69420</span>
                            </div>
                        </div>
                        <div className="product">
                            <img className="product-image" src={gokuPng} alt="" />
                            <div className="product-info">
                                <span className="product-title">Jajjaa mira un goku chikito</span>
                                <span className="product-price">$69420</span>
                            </div>
                        </div>
                        <div className="product">
                            <img className="product-image" src={gokuPng} alt="" />
                            <div className="product-info">
                                <span className="product-title">Jajjaa mira un goku chikito</span>
                                <span className="product-price">$69420</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

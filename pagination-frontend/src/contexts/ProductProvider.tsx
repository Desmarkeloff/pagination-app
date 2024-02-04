import { useState } from "react";
import { ProductContext } from "./ProductContext";

export const ProductProvider: any = ({ children }: any) => {

    interface Product {
        _id: number,
        title: string,
        price: number,
        desc: string;
    }

    const [product, setProduct] = useState<Product | undefined>(undefined);

    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>

    );
};
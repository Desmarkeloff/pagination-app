import { Route, Routes } from "react-router-dom";
import { Product } from "./components/Product";
import "./styles/app.css";
import { Products } from "./components/Products";
import { ProductProvider } from "./contexts/ProductProvider";

function App() {

  return (
    <ProductProvider>
      <Routes>
        <Route path="/*" element={<Products />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </ProductProvider>
  );
}

export default App;

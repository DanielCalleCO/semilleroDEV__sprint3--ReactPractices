import React, { useState } from "react";
import CardProducts from "../../molecules/CardProducts/CardProducts";
import "./ProductsContainer.css";

const ProductsContainer = ({ data }) => {
    const [inputValue, setInputValue] = useState("");
    const [selectedProducts, setselectedProducts] = useState([]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const filterProducts = () => {
        const products = data.filter((producto) => {
            return producto.name
                .toLowerCase()
                .includes(inputValue.toLowerCase());
        });
        return products;
    };

    const addProducts = (product) => {
        setselectedProducts([...selectedProducts, product]);
        console.log(selectedProducts);
        localStorage.setItem("products", JSON.stringify(selectedProducts));
    };

    return (
        <div className="container">
            <input className="input" onChange={(e) => handleChange(e)} />
            <div className="content">
                {filterProducts().map((product, i) => (
                    <CardProducts
                        key={i}
                        title={product.name}
                        description={product.category}
                        price={product.cost}
                        image={product.img.hdUrl}
                        callAction={() => addProducts(product)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductsContainer;

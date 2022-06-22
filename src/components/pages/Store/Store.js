import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import "./Store.css";

const Store = () => {
    const { user } = useContext(UserContext);
    const products = localStorage.getItem("products");
    console.log(JSON.parse(products));
    return (
        <>
            <div>Este es tu carrito de compras {user.name}</div>
        </>
    );
};

export default Store;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import ProductList from "../pages/productList/ProductList";
import DetailedView from "../pages/detailedView/DetailedView";
import BasketPage from "../pages/basketPage/BasketPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/detailed" element={<DetailedView />} />
      <Route path="/basket" element={<BasketPage/>}/>
    </Routes>
  );
};

export default MainRoutes;

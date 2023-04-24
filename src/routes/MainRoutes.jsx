import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ActivatePage from "../pages/ActivatePage";
import AddProductPage from "../pages/AddProductPage";
import AuthPage from "../pages/AuthPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:slug" element={<EditProductPage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/activate" element={<ActivatePage />} />
    </Routes>
  );
}

export default MainRoutes;

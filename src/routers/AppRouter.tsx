import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Componentes from "../pages/Componentes";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/componentes" element={<Componentes />} />
            </Routes>
        </BrowserRouter>
    );
}

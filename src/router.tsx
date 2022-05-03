import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function MainRouter () {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </main>
    );

}

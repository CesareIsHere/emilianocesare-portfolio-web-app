import React, { useState } from "react";
import AppLayout from "./pages/app_layout";
import "./assets/styles/app/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route
            path="*"
            element={
              <div className="flex justify-center items-center h-screen">
                <h1 className="text-4xl">404 - Not Found</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const PageRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}
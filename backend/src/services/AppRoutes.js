import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Login from '../page/login';
import MenuList from '../page/menuList';
import Dashboard from '../page/Dashboard/Dashboard';

 

function AppRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Login />} /> 
                <Route path="/dashboard" element={<Dashboard />} /> 
                <Route path="/menu" element={<MenuList />} /> 
            </Routes>
        </Suspense>
    );
}

export default AppRouter;

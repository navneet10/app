import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Login from '../page/login';
import Dashboard from '../page/Dashboard/Dashboard';

 

function AppRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Login />} /> 
                    <Route path="/dashboard" element={<Dashboard />} /> 
            </Routes>
        </Suspense>
    );
}

export default AppRouter;

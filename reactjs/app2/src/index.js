import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login';
import ForgotPassword from './forgot_password';
import AddCategory from './add-category';
import AddProduct from './add-product';
import Category from './category';
import Dashboard from './dashboard';
import EditCategory from './edit-category';
import ViewProduct from './view-product';
import ViewOrder from './view-order';
import User from './user';
import PrintOrder from './print-order';
import Order from './order';
import EditProduct from './edit-product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './page-not-found';
import AdminChangePassword from './admin-change-password';
import Product from './product';

// Routing function with all routes
function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/category" element={<Category />} />
                <Route path="/category/add" element={<AddCategory />} />
                <Route path="/category/edit" element={<EditCategory />} />
                <Route path="/product/add" element={<AddProduct />} />
                <Route path="/product/view" element={<ViewProduct />} />
                <Route path="/product/edit" element={<EditProduct />} />
                <Route path="/product" element={<Product />} />
                <Route path="/orders" element={<Order />} />
                <Route path="/orders/view" element={<ViewOrder />} />
                <Route path="/orders/print" element={<PrintOrder />} />
                <Route path="/users" element={<User />} />
                <Route path="/change-password" element={<AdminChangePassword />}></Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);

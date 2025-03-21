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
import Logout from './logout';

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
                <Route path="/category/edit/:id" element={<EditCategory />} />
                <Route path="/product/add" element={<AddProduct />} />
                {/* dynamic */}
                <Route path="/product/view/:id" element={<ViewProduct />} />
                 {/* dynamic */}
                <Route path="/product/edit/:id" element={<EditProduct />} />
                <Route path="/product" element={<Product />} />
                <Route path="/orders" element={<Order />} />
                 {/* dynamic */}
                <Route path="/orders/view/:id" element={<ViewOrder />} />
                <Route path="/orders/print" element={<PrintOrder />} />
                <Route path="/users" element={<User />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/change-password" element={<AdminChangePassword />}></Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);

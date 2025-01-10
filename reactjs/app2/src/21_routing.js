import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyHome from './myhome';
import Science from './science';
import Commerce from './commerce';
import Arts from './arts';
import PageNotFound from './page-not-found';
function App() {
  return (<BrowserRouter>
    <Routes>
      <Route index path='/' element={<MyHome />} />
      <Route path='/science' element={<Science />} />
      <Route path='/commerce' element={<Commerce />} />
      <Route path='/arts' element={<Arts />} />
      <Route path='*' element={<PageNotFound />} />

    </Routes>
  </BrowserRouter>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
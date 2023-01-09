import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/main/ItemListContainer/itemListContainer'
import ItemDetail from './components/main/ItemDetail/ItemDetail';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route
          path='/'
          element={<ItemListContainer greeting={'Productos'}/>}
        />
        <Route
          path='/categoria/:idCategory'
          element={<ItemListContainer greeting={'Productos'}/>}
        />
        <Route 
          path='/producto/:idPrd'
          element={<ItemDetail />}
        />
      </Routes>
    </BrowserRouter>
  </>
);


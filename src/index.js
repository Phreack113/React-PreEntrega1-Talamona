import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/main/ItemListContainer/itemListContainer'
import ItemDetail from './components/main/ItemDetail/ItemDetail';
import CustomProvider from './components/Context/CustomProvider';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CustomProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route
            path='/React-Talamona/'
            element={<ItemListContainer greeting={'Productos'}/>}
            />
          <Route
            path='/React-Talamona/categoria/:idCategory'
            element={<ItemListContainer greeting={'Productos'}/>}
            />
          <Route 
            path='/React-Talamona/producto/:idPrd'
            element={<ItemDetail />}
            />
        </Routes>
      </BrowserRouter>
    </CustomProvider>
  </>
);


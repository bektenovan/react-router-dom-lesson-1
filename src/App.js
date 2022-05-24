import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Filter from './Components/Filters/Filter';
import ProductsList from './Components/ProductsList/ProductsList';
import AddForm from './Components/AddForm/AddForm';
import axios from 'axios';

function App () {
  const API = 'http://localhost:8000/products'
//! CRUD = create, read, uptade, delete
//? для хранения полученных продуктов
const [products, setProducts] = useState([]);


//! create(post request)
 function addProduct(newProduct){
  axios.post(API, newProduct)
  }
//!read (get request)
async function getProducts(){
    let result = await axios.get(API)
    // console.log(result);
    setProducts(result.data)
  }
// console.log(products);


//? delete(delete rquest)
 async function deleteProduct(id){
 await axios.delete(`${API}/${id}`)
getProducts();
}


  return (
     <BrowserRouter>
 <Header />
  <Routes>
<Route path='/' element={ <> <Filter /> <ProductsList  getProducts={getProducts} products={products} deleteProduct={deleteProduct}/>  </>} />
<Route path='/add' element={<AddForm  addProduct={addProduct}  />} />
<Route path='/edit' element={<h1>Edit form</h1>} />
<Route path='/contacts' element={<h1>Contacts</h1>} />
</Routes>
<h1>Footer</h1>
     </BrowserRouter>
  );
}

export default App;

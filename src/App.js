// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import './App.css';
// import Count from './components/Count';
// import Tog from './components/Togg';
// import Multi from './components/Two';
// import User from './components/user';
// import Home from './Home';

// function App() {
//   return (
//     <>
//     {/* <Count />
//     <Tog />
//     <Multi /> */}
//     {/* <User /> */}
//     {/* <Home /> */}
//     </>
//   );
// }

// export default App;

import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from './components/Layout/MainLay';
import HelpLayout from './components/Layout/Help';
import ProductDetails from './components/Details';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import ProductList from './components/List';
import NotFoundPage from './components/PageNotFound';
const products = [
  { id: 1, name: 'Product 1', price: '$15', photo:'\other1.jpg', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', price: '$10', photo: '\other2.jpg', description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', price: '$20', photo: '\other3.jpg', description: 'Description of Product 3' },
  { id: 4, name: 'Product 4', price: '$30', photo: '\other4.jpg', description: 'Description of Product 4' },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<ProductList products={products} />} /> 
      <Route path="product/:id" element={<ProductDetails products={products} />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
        <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

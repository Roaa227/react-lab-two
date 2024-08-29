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
import ProductDetails from './components/Cards/Details';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import ProductList from './components/List';
import NotFoundPage from './components/Cards/PageNotFound';
import NotFond from './components/404/404';
import { DetailsLoader } from './components/Cards/Details';
import { ListLoader } from './components/List';
import Add from './components/Cards/add';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ProductList />} loader={ListLoader} errorElement={<NotFoundPage />} />
        <Route path="product/:id" element={<ProductDetails loader={DetailsLoader}/>} errorElement={<NotFoundPage />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* <Route path='*' element={<NotFoundPage />} /> */}
        <Route path='*' element={<NotFond />} />
        <Route path='add' element={<Add />} />
      </Route>
    </>

  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

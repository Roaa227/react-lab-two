import React from 'react';
import { Outlet } from 'react-router-dom';
import Navb from '../Nav';
import Breadcrumbs from '../crumbs';
const MainLayout = () => (
  <div className='d-flex flex-column min-vh-100'>
    <header>
      <Navb />
      <Breadcrumbs />
    </header>
    <main className='flex-fill mb-3'>
      <Outlet />
    </main>
    <footer className='bg-white p-4 mt-auto'>
      <p className='fw-bold' style={{ color: 'hotpink' }}>&copy; 2024 Shop Now</p>
    </footer>
  </div>
);

export default MainLayout;

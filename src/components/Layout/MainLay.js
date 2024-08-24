import React from 'react';
import { Outlet } from 'react-router-dom';
import Navb from '../Nav';
const MainLayout = () => (
  <div className='d-flex flex-column min-vh-100'>
    <header>
      <Navb />
    </header>
    <main className='flex-fill mb-3'>
      <Outlet />
    </main>
    <footer className='bg-light p-4 mt-auto'>
      <p className='fw-bold' style={{ color: 'hotpink' }}>&copy; 2024 Shop Now</p>
    </footer>
  </div>
);

export default MainLayout;

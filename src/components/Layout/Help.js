import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const HelpLayout = () => (
  <div>
    <h1 className='display-3 text-center my-5'>Help Center</h1>
    <div className='d-flex justify-content-center'>
    <Link to="faq" className='btn btn-secondary'>FAQ</Link>
    <Link to="contact" className='btn btn-secondary mx-4'>Contact Us</Link>
    </div>
    <Outlet />
  </div>
);

export default HelpLayout;

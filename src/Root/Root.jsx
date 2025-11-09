import React from 'react';
import Navbar from '../Componetn/Fiex/Navbar';
import Footer from '../Componetn/Fiex/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
           <header>
             <Navbar></Navbar>
           </header>
           <main>
            <Outlet></Outlet>
           </main>
           <footer>
            <Footer></Footer>
           </footer>
        </div>
    );
};

export default Root;
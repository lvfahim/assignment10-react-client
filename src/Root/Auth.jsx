import React from 'react';
import Navbar from '../Componetn/Fiex/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componetn/Fiex/Footer';

const Auth = () => {
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

export default Auth;
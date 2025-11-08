import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-base-300 text-base-content">
            <div className="w-11/12 md:w-10/12 mx-auto py-12">

                <div className="grid md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <Link to='/'> <h1 className="text-2xl font-bold">
                            M<span className="text-blue-500">o</span>t<span className="text-blue-500">o</span>ri<span className="text-blue-500">o</span>
                        </h1></Link>
                        <p className="mt-3 text-sm text-gray-500">
                            Your trusted car rental platform.
                            Rent anytime, anywhere — smooth & easy.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-4">
                            <a className="text-xl hover:text-blue-500 cursor-pointer"><FaFacebookF /></a>
                            <a className="text-xl hover:text-blue-500 cursor-pointer"><FaInstagram /></a>
                            <a className="text-xl hover:text-blue-500 cursor-pointer"><FaSquareXTwitter /></a>
                            <a className="text-xl hover:text-blue-500 cursor-pointer"><FaLinkedin /></a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h6 className="footer-title">Services</h6>
                        <Link className="link link-hover block">Car Booking</Link>
                        <Link className="link link-hover block">Car Listing</Link>
                        <Link className="link link-hover block">Rental Support</Link>
                        <Link className="link link-hover block">Insurance Help</Link>
                    </div>

                    {/* Company */}
                    <div>
                        <h6 className="footer-title">Company</h6>
                        <Link className="link link-hover block">About</Link>
                        <Link className="link link-hover block">Contact</Link>
                        <Link className="link link-hover block">Careers</Link>
                        <Link className="link link-hover block">Blog</Link>
                    </div>

                    {/* Contact */}
                    <div>
                        <h6 className="footer-title">Contact</h6>
                        <p>Email: support@motorio.com</p>
                        <p>Phone: +880 123 456 789</p>
                        <p>Location: Dhaka, Bangladesh</p>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 mt-10 pt-5 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Motorio — All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

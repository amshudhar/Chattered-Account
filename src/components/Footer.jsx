import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="w-full  bg-black  text-white p-12 text-center">
        <div className="row mx-0 justify-content-center flex">
            {/* Company Info */}
            <div className="col-md-4 mb-3 text-start flex-initial w-1/3">
              <h5 className='text-2xl mb-6'>About TallyWise</h5>
              <p>
              Chattered Accounts is your trusted partner for seamless accounting solutions, 
              offering professional services to manage finances,
               streamline processes, and ensure compliance with ease.
              </p>
            </div>
            {/* Quick Links */}
            <div className="col-md-4 mb-3 text-center w-1/3">
              <h5 className='text-2xl mb-6'>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                    Home
                </li>
                <li>Shop</li>
                <li>About Us </li>
                <li>  Contact Us </li>
              </ul>
            </div>
            {/* Social Media & Contact */}
            <div className="col-md-4 mb-3 text-center w-1/3">
              
              <p className="mt-3 text-center">
                Email: support@TallyWise.com <br />
                Phone: +123-456-7890
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p>
              &copy; TallyWise . All rights
              reserved.
            </p>
          </div>
      </footer>
    </div>
  )
}

export default Footer
import React from 'react'
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="">
    <div className=" min-h-screen flex flex-col items-center py-10">
      <div className="container mx-auto px-4 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-green-900 mb-6">--  Contact TallyWise  --</h1>
        <p className="text-center text-xl  mb-12">
        We’re here for you! Whether you have questions about our services, need assistance, or want to share your feedback, 
        don’t hesitate to get in touch with us.
        </p>
  
       
          {/* Contact Form */}
          <div>
            <form className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium ">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md  focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium ">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter the subject"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md  focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium 0">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message here"
                  rows="5"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md  focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-900 text-white py-2 rounded-md hover:bg-black transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
          
        
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default ContactUs
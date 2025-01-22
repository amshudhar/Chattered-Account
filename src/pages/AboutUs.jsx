import React from "react";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      
      <div className=" min-h-screen flex flex-col items-center py-10">
        <div className="container mx-auto px-4 lg:px-20">
          <h1 className="text-4xl font-bold text-center text-blue-950 mb-6">
            ---  About TallyWise  ---
          </h1>
          <p className="text-center text-xl mb-12">
          Chattered Accounts is your trusted partner for seamless accounting solutions, offering professional services to manage finances, 
          streamline processes, and ensure compliance with ease.
At TallyWise, we’re here to simplify your journey to financial clarity. Our platform connects individuals and businesses with certified Chartered Accountants, delivering tailored solutions for your unique financial needs.

          </p>
          













          <div className=" gap-8 items-center bg-white bg-opacity-50 p-5 rounded-lg shadow-lg">
            {/* Text Section */}
            <div>
              <h2 className="text-2xl font-bold text-green-900 mb-4">
                Our Aim
              </h2>
              <p className="text-lg mb-4">
              We dream of a future where accessing professional financial expertise is effortless, empowering individuals
               and businesses to achieve their goals. Through innovation and dedication, we aim to promote financial literacy 
               and set new standards in accountancy worldwide.

              </p>

              <h2 className="text-2xl font-bold text-green-900 mb-4">
                Our Goal
              </h2>
              <p className="text-lg mb-4">
              To be the bridge between you and the industry’s best Chartered Accountants. Our goal is to offer reliable, 
              precise, and efficient financial solutions that inspire trust and ensure success.

              </p>

              <h2 className="text-2xl font-bold text-green-900 mb-4">
                Why Choose TallyWise?
              </h2>
              <ul className="list-disc list-inside text-lg ">
                <li>
                Trusted Experts
                Work with certified accountants, carefully vetted for their expertise and reliability.
                </li>
                <li>
                Effortless Search
                Find the right accountant quickly with powerful search and filter options.
                </li>
                <li>
                Comprehensive Insights
                View detailed profiles, including skills, experience, and client reviews, to make informed decisions.
                </li>
                <li>
                  A user-friendly platform optimized for efficiency and
                  convenience.
                </li>
                <li>
                Always Here for You
                Benefit from 24/7 customer support, ensuring help is always just a click away.
                </li>
              </ul>
            </div>

           
            
          </div>

          {/* Additional Section */}
          <div className="mt-12 text-center bg-white bg-opacity-50 p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Join us Today!!!
            </h2>
            <p className=" text-lg mb-4">
            <p className=" text-lg">
            At the heart of CharteredPro is a commitment to making financial management accessible and stress-free. 
            Whether you're an individual, a freelancer, or running a business, we’re here to help you achieve your financial 
            goals with confidence.
            Join us today and experience the CharteredPro difference!
            </p>
            </p>
            
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
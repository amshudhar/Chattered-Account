
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>

            {/* hearo section start*/}
            <div className=" py-20 px-8 text-center border-b-2">
                <h1 className="text-4xl font-bold text-blue-950 mb-4">Let us help you find the perfect professionals for your needs</h1>
                <p className="text-lg mb-6">Connect with Expert Chartered Accountants Near You
                    Your go-to platform for reliable financial advice and tailored accounting services.
                    <br /> Chattered Accounts is your trusted partner for seamless accounting solutions, <br />
                    offering professional services to manage finances, streamline processes, and ensure compliance with ease.</p>
                <NavLink to="/account" className="bg-green-900 text-white px-6 py-2 font-medium rounded-md hover:bg-black">
                    Find Accounts
                </NavLink>
            </div>
            {/* hero section end */}



            {/*What We Offer section start  */}
            <div className=" py-10 px-8 bg-white bg-opacity-40">
                <h2 className="text-4xl font-bold text-center mb-6 text-green-900">Our services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-12" >
                    <div className="text-center p-5 bg-white bg-opacity-80 rounded-2xl shadow-lg">

                        <h3 className="text-xl font-semibold py-4">Certified Professionals</h3>
                        <p className="text-gray-600">All our accountants are fully verified, certified, and trusted for their expertise and reliability.</p>
                    </div>
                    <div className="text-center p-5 bg-white bg-opacity-70 rounded-lg shadow-lg">

                        <h3 className="text-xl font-semibold py-4">Smart Search Tools</h3>
                        <p className="text-gray-600">Quickly discover and filter accountants tailored to your specific requirements.</p>
                    </div>
                    <div className="text-center p-5 bg-white bg-opacity-70 rounded-lg shadow-lg">

                        <h3 className="text-xl font-semibold py-4">Detailed Profiles</h3>
                        <p className="text-gray-600">Explore detailed profiles with insights into each professional's expertise, experience, and client reviews.</p>
                    </div>
                    <div className="text-center p-5 bg-white bg-opacity-70 rounded-lg shadow-lg">

                        <h3 className="text-xl font-semibold py-4">Round-the-Clock Support</h3>
                        <p className="text-gray-600">Enjoy 24/7 assistance from our dedicated support team, ready to help whenever you need it.</p>
                    </div>
                </div>
            </div>
            {/*What We Offer section end  */}




            {/* footer section start */}
            <Footer />
            {/* footer section end */}
        </div>
    )
}

export default HomePage
import React from 'react';

function IntroComponent() {
  return (
    <div className="bg-blue-500 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full p-4">
            <h2 className="text-3xl font-bold mb-2">Welcome to Doctor Appointment Booking</h2>
            <p className="text-lg mb-4">
              Our platform leverages the power of the Aeternity blockchain to ensure secure and transparent appointment bookings with your preferred doctors. Say goodbye to the hassle of traditional booking methods and enjoy seamless healthcare access.
            </p>
            <a href="/" className="inline-block bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-white font-bold py-2 px-4 rounded-lg transition duration-150 ease-in-out">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroComponent;

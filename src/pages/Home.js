import React from 'react';
import CustomButton from '../components/CustomButton';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Our App
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This is a modern React application with a clean and organized structure.
          </p>
          <div className="space-x-4">
            <CustomButton onClick={() => console.log('Get Started clicked')}>
              Get Started
            </CustomButton>
            <CustomButton variant="secondary" onClick={() => console.log('Learn More clicked')}>
              Learn More
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 
import React from 'react';
import Category from '../../Component/Rooms/Category';
import Rooms from '../../Component/Rooms/Rooms';

// Define the props interface


// Define the functional component
const Home: React.FC<any> = () => {
  return (
    <div className='min-h-screen max-w-screen-xl mx-auto'>
     <Category></Category>
     <Rooms></Rooms>
    </div>
  );
};

export default Home;
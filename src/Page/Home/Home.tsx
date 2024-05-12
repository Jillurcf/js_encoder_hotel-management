import React from 'react';
import Category from '../../Component/Rooms/Category';
import Rooms from '../../Component/Rooms/Rooms';
import RoomDetails from '../RoomDetails/RoomDetails';

// Define the props interface


// Define the functional component
const Home: React.FC<any> = () => {
  return (
    <div className='md:min-h-screen md:max-w-screen-xl md:mx-auto px-4 md:px-4 lg:px-0'>
      {/* <RoomDetails></RoomDetails> */}
     <Category></Category>
     <Rooms></Rooms>
    </div>
  );
};

export default Home;
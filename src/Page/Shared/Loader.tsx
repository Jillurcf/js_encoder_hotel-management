// import React from 'react'
// import { ScaleLoader } from 'react-spinners'

// const Loader: React.FC<any> = ({ smallHeight }) => {
//   return (
//     <div
//       className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
//       flex 
//       flex-col 
//       justify-center 
//       items-center `}
//     >
//       <ScaleLoader size={100} color='red' />
//     </div>
//   )
// }

// export default Loader

import React from 'react';
import { ScaleLoader } from 'react-spinners';

interface LoaderProps {
  smallHeight?: boolean;
  
}

const Loader: React.FC<LoaderProps> = ({ smallHeight }) => {
  return (
    <div
      className={`flex ${smallHeight ? 'h-[250px]' : 'h-[70vh]'} justify-center items-center`}
    >
      <ScaleLoader color='red' />
    </div>
  );
};

export default Loader;

import React from "react"
import Heading from "../../components/Shared/Heading"




const Header: React.FC<any> = ({ room }) => {
  return (
    <>
      {/* <Heading title={room.title} center={true} subtitle={room.location} /> */}
      <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
        <img
          className='object-cover w-full'
          src={room.image}
          alt='header image'
        />
      </div>
    </>
  )
}

export default Header
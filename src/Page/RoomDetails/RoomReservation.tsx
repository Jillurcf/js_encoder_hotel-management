import React from "react";
import { formatDistance } from "date-fns";
import { useState } from "react";
import Button from "../../Component/Button/Button";
import Calendars from "./Calender";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";



const RoomReservation: React.FC<any> = ({ room }) => {
 const {user} = UseAuth();
 


// Retrieve bookings from localStorage
const storedBookings: string | null = localStorage.getItem("room");
// Parse JSON or initialize with an empty array if null
const initialBookings = storedBookings ? JSON.parse(storedBookings) : [];
const [bookings, setBookings] = useState<any[]>(initialBookings); // Adjust any[] according to the type of 'room'

console.log(bookings);

const handleReservation = () => {
 
  const newBooking = { room };

  // Update 'bookings' state with the new booking
  setBookings(prevBookings => [...prevBookings, newBooking]);

  // Update localStorage with the new booking
  localStorage.setItem("room", JSON.stringify([...bookings, newBooking]));

  // Show success message using SweetAlert2
  Swal.fire("Room Booking Success");
};


  // Price calcualtion
  // Tootal days * Price
  const totalDays = parseInt(
    formatDistance(new Date(room?.to), new Date(room?.from)).split(" ")[0]
  );

  const totalPrice = totalDays * room?.price;
  const [value, setValue] = useState({
    
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection",
  });
console.log(value);
  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    host: room?.host?.email,
    location: room?.location,
    price: totalPrice,
    to: value.endDate,
    from: value.startDate,
    title: room?.title,
    roomId: room?._id,
    image: room?.image,
  });
  console.log(bookingInfo);
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-2 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">Night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calendars value={value}></Calendars>
      </div>
      <hr />
      <div className="p-4">
        <Button
          disabled={room.host.email === user?.email || room.booked}
    
          onClick={handleReservation}
          label="Reservation"
        ></Button>
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
      
    </div>
  );
};

export default RoomReservation;

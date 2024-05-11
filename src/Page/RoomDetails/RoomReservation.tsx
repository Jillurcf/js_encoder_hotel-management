import React from "react";
import { formatDistance } from "date-fns";
import { useState } from "react";
import Button from "../../Component/Button/Button";
import Calendars from "./Calender";
import UseAuth from "../../Hooks/UseAuth";



const RoomReservation: React.FC<any> = ({ room }) => {
 const {user} = UseAuth();
  // let [isOpen, setIsOpen] = useState(false);
  // const closeModal = () => {
  //   setIsOpen(false);
  // };
const [bookings, setBookings] = useState(
  JSON.parse(localStorage.getItem("room"))
)
console.log(bookings);
  const handleReservation = () => {
    localStorage.setItem("room", JSON.stringify([...bookings, {
    room
    }]))
  }

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
          // onClick={() => setIsOpen(true)}
          onClick={handleReservation}
          label="Reservation"
        ></Button>
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
      {/* <BookingModal
        closeModal={closeModal}
        isOpen={isOpen}
        bookingInfo={bookingInfo}
      ></BookingModal> */}
    </div>
  );
};

export default RoomReservation;

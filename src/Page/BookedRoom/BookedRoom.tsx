import React from "react";
// interface booked {
//     booked: object
// }
const BookedRoom: React.FC<any> = () => {
  const bookedRoom = localStorage.getItem("room");
  const bookedRoomParse = JSON.parse(bookedRoom);
  console.log(bookedRoomParse);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 p-12 min-h-screen max-w-screen-xl mx-auto">
      {bookedRoomParse.map((booked) => (
        <div key={booked.room._id}>
          <div className="flex flex-col gap-2 w-full">
            <div
              className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
            >
              <img
                className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
                src={booked.room?.image}
                alt="Room"
              />
              <div
                className="
            absolute
            top-3
            right-3
          "
              >
                {/* <HeartButton /> */}
              </div>
            </div>
            <div className="font-semibold text-lg">{booked.room?.location}</div>
            <div className="font-light text-neutral-500">5 nights</div>
            <div className="flex flex-row items-center gap-1">
              <div className="font-semibold">${booked.room?.price}</div>
              <div className="font-light">night</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookedRoom;

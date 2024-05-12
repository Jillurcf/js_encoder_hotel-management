import React, { useEffect, useState } from "react";
import { getRoomById } from "../../api/rooms";
import Header from "./Header";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";
import { useParams } from "react-router-dom";

interface Room {
    _id: string;
    location: string;
    title: string;
    category: string; // Ensure that 'category' property is defined in Room interface
}


const RoomDetails: React.FC<{ roomId: string }> = () => {
    const [room, setRoom] = useState<Room | null>(null);
    const roomId = useParams()
    console.log(roomId);

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const roomData = await getRoomById(roomId.id);
                setRoom(roomData);
                console.log(room);
            } catch (error) {
                console.error("Error fetching room data:", error);
            }
        };

        fetchRoom();
    }, [roomId]);
   
    return (
        <div className="max-w-screen-lg mx-auto py-12">
           
            <div className="flex flex-col gap-6">
                {room && <Header room={room} />}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                {room && <RoomInfo room={room} />}
                <div className="md:col-span-3 order-first md:order-last mb-10">
                    {room && <RoomReservation room={room} />}
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;

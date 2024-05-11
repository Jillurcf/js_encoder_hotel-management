import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import Loader from "../../Page/Shared/Loader";
import { getAllRooms } from "../../api/rooms";
import Heading from "../../Page/Shared/Heading";

interface Room {
    _id: string;
    location: string;
    title: string;
    category: string; // Ensure that 'category' property is defined in Room interface
}

const Rooms: React.FC = () => {
    const [rooms, setRooms] = useState<Room[]>([]);
    console.log(rooms);
    const [params, setParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const category = params.get('category');

    useEffect(() => {
        setLoading(true);
        getAllRooms()
            .then(data => {
                let filteredRooms: Room[] = data || []; // Ensure data is not null or undefined
                if(category && category.trim() !== "") { // Check if category is provided and not empty
                    filteredRooms = filteredRooms.filter(room => room.category === category); // Filter rooms based on category
                }
                setRooms(filteredRooms);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching rooms data:", error);
                setLoading(false);
            });
    }, [category]);

    if(loading) {
        return <Loader />;
    }

    return (
        <div>
            {rooms && rooms.length > 0 ? (
                <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                    {rooms.map(room => <Card key={room._id} room={room} />)}
                </div>
            ) : (
                <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                    <Heading center={true} title="No Rooms Available in this Category" subtitle='Select Other Categories' />
                </div>
            )}
        </div>
    );
};

export default Rooms;

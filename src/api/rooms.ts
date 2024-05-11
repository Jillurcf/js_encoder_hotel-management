import axios from "axios";


    interface Room {
        _id: string;
        location: string;
        title: string;
        category: string
    }
    
export const getAllRooms = async (): Promise<Room[]> => {
    const {data} = await axios('/rooms.json')
    console.log(data[0].category);
    return data;
};


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



export const getRoomById = async (_id: string): Promise<Room | null> => {
    try {
        // Fetch the JSON file
        const response = await axios.get('/rooms.json');

        // Check if the response is successful and data exists
        if (response.status === 200 && response.data) {
            console.log("Data fetched:", response.data); // Log the fetched data
            // Filter the data to find the room with the matching _id
            for(let x of response.data){
                console.log(x._id === _id)
                
            }
            console.log(_id);
            const room = response.data.find((room: Room) => room._id === _id);
            console.log("Found room:", room); // Log the found room
            return room || null; // Return the room if found, otherwise null
        } else {
            console.error("Error fetching room data:", response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error fetching room data:", error);
        return null;
    }
};

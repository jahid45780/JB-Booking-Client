import axiosSecure from "."
  
// fetch all room from db
 export const getAllRooms = async ()=>{
      const { data } = await axiosSecure('/rooms')
      return data
}

// fetch all room for host
export const getHostRooms = async (email)=>{
      const {data} = await axiosSecure(`/rooms/${email}`)
      return data
}

// fetch single room from database
 export const getRoom = async (id) => {
       const {data} = await axiosSecure(`/room/${id}`)
       return data
}

// save room data in database
 export const addRoom = async (roomData)=>{
      const {data} = await axiosSecure.post('/rooms', roomData)
      return data
}
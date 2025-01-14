import axiosSecure from "."
// user save from database
 export const saveUser = async user =>{
     const currentUser = {
         email: user.email,
         role:'guest',
         status:'Verified'
     }
     const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)
     return data
}
// get token from server
 export const getToken = async email =>{
    const {data} = await axiosSecure.post(`/jwt`,{email})
    // console.log('token recvied from server', data);
    return data
}
// clear token from database
export const clearCookie = async () =>{
    const {data} = await axiosSecure.get('/logout')
    return data
}
// get user role
 export const getRole = async (email)=>{
      const { data } = await axiosSecure(`/user/${email}`)
      return data.role
 }

//  get all user
export const getAllUser = async ()=>{
     const {data} = await axiosSecure('/allUser')
     return data
}
// update user role
export const updateRole = async ({ email, role }) =>{
    const currentUser = {
        email,
        role,
        status:'Verified'
    }
    const {data} = await axiosSecure.put(`/allUser/update/${email}`, currentUser)
    return data
}
// req become a host
export const becomeHost = async email=>{
     const currentUser = {
        email,
     status:'Requested',
     }
     const {data} = await axiosSecure.put(`/users/${email}`, currentUser)
     return data
}
import axiosSecure from ".";
// Create Payment Intent
export const CreatePaymentIntent = async price =>{
      const {data} = await axiosSecure.post('/create-payment-intent', price)
      return data
}
// save booking info in database
export const saveBookingInfo = async paymentInfo =>{
     const {data} = await axiosSecure.post('/bookings', paymentInfo)
     return data
}
// update from status after booking in database
export const updateStatus = async (id, status) => {
     const {data} = await axiosSecure.patch(`/room/status/${id}`, {status})  
      return data  
}

// get all bookings for a guest by email
export const getBooking = async email =>{
       const { data } = await axiosSecure(`/booking?email=${email}`)
       return data
}

// get all host bookings for a host by email
export const getHostBooking = async email =>{
      const { data } = await axiosSecure(`/booking/host?email=${email}`)
      return data
}  


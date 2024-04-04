// import { formatDistance } from "date-fns";
import { useState } from "react";
import Button from "../Button/Button";
import Calender from "./Calender";
import { formatDistance } from "date-fns";
import BookingModal from "../Modal/BookingModal";
import useAuth from "../../hooks/useAuth";
import { FaCommentDollar } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";
import { FaSackDollar } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

const RoomReservation = ({room}) => {
    let [isOpen, setIsOpen] = useState(false)
     const { user } = useAuth()
   
     const closeModal = ()=>{
         setIsOpen(false)
    }

    const [value, setValue] = useState({
        startDate: new Date(room?.from),
        endDate: new Date(room?.to),
        key: 'selection',
      })
    

     //   Total days * price
    const totalDays = parseInt(
      formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]
    )
  // Total Price Calculation
    const totalPrice = totalDays * room?.price

    const handleDateChange = ranges => {
        // console.log(ranges)
        setValue({
          startDate: new Date(room?.from),
          endDate: new Date(room?.to),
          key: 'selection',
        })
      }
    
    //   booking  modal
    const [ bookingInfo, setBookingInfo ] = useState({
         guest: {name: user?.displayName,
             email:user?.email, 
             image:user?.photoURL },
            
             host: room?.host?.email,
             location:room?.location,
             price: totalPrice,
             to: value.endDate,
             from:value.startDate,
             title: room?.title,
             roomId: room?._id,
             image: room?.image

    })


    return (
        <div className=" rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white" >
            <div className=" flex justify-between gap-1 p-4" >
                <div className=" text-2xl font-semibold flex items-center gap-2 " >  <FaCommentDollar/> {room?.price} </div>
                <div className=" font-bold text-[#5b21b6] text-lg uppercase " >  <Marquee pauseOnHover={true} speed={7} > JB___|___Booking </Marquee>  </div>
                <div className="  mt-1 font-bold flex items-center gap-2" > <GiNightSleep className=" text-2xl" /> Per_Night </div>
            </div>
            <hr />
            <div className=" flex justify-center" > <Calender handleDateChange={handleDateChange} value={value}  ></Calender> </div>
            <hr />
            <div className=" p-4" >
                 
                <Button onClick={()=> setIsOpen(true) } 
                  disabled={room.host.email === user.email || room.booked}
                label={'Reserve'} ></Button>
            </div>
            <hr />
            <div className="  p-2 flex items-center justify-between font-semibold text-lg" >
                <div className=" flex items-center gap-2" > <FaSackDollar/>Total</div>
                <div className=" flex items-center gap-2" > <FaCommentDollar className=" text-2xl" /> {totalPrice} </div>
            </div>

    <BookingModal  closeModal={closeModal} 
    isOpen={isOpen} 
    bookingInfo={bookingInfo} />

        </div>
    );
};

export default RoomReservation;
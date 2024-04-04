import { ImManWoman } from "react-icons/im";
import { FaHouseUser } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";
const RoomInfo = ({ roomData }) => {
    return (
      <div className='col-span-4 flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <div
            className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
          >
            <div>Hosted by {roomData?.host?.name}</div>
  
            <img
              className='rounded-full'
              height='30'
              width='30'
              alt='Avatar'
              src={roomData?.host?.image}
            />
          </div>
          <div
            className='
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              '
          >
            <div className=" flex gap-2 items-center font-semibold  text-black" > <ImManWoman className=" text-2xl"/> Guests {roomData?.guests} </div>
            <div className="flex gap-2 items-center  font-semibold text-black" > <FaHouseUser/> Room {roomData?.bedrooms} </div>
            <div className="flex gap-2 items-center font-semibold text-black" >  <MdBathroom/> Bathrooms {roomData?.bathrooms} </div>
          </div>
        </div>
  
        <hr />
        <div
          className='
          text-lg font-light text-black font-sans'
        >
          {roomData?.description}
        </div>
        <hr />
      </div>
    )
  }
  
  export default RoomInfo
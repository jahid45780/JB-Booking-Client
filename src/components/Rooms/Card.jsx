import { Link } from "react-router-dom";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiNightSky } from "react-icons/gi";
const Card = ({room}) => {
      
    return (
        <Link to={`/room/${room?._id}`} className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col shadow-md gap-2 w-full'>
        <div
          className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
          <img
            className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
            src={room.image}
            alt='Room'
          />
          <div
            className='
            absolute
            top-3
            right-3
          '
          >
            
          </div>
        </div>
        <div className='font-semibold text-lg text-center'> {room.location} </div>
        {/* <div className='font-light text-neutral-500'>
          5 nights . June 19 - 26
        </div> */}
        <div className='flex flex-row justify-between m-2 items-center gap-1'>
          <div className='font-semibold flex items-center gap-1'> <FaHandHoldingDollar className=" text-2xl" /> {room.price} </div>
          <div className='font-semibold flex items-center gap-1'> <GiNightSky className=" text-xl" /> Per_Night</div>
        </div>
      </div>
    </Link>
    );
};

export default Card;
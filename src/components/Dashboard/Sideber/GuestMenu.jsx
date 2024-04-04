import { TbBrandBooking } from "react-icons/tb";
import MenuItem from "./MenuItem";
import useRole from "../../../hooks/useRole";
import { GrUserAdmin } from 'react-icons/gr'
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import HostModal from "../../Modal/HostRequestModal";
import { becomeHost } from "../../../api/auth";
import {toast} from 'react-hot-toast'
const GuestMenu = () => {
    const [role] = useRole()
    const {user} = useAuth()
    const [isOpen, setIsOpen]= useState(false)

    const closeModal = async ()=>{
        setIsOpen(false)
    }

    const modalHandler = async()=>{
        //  req to be a host
         try{
       const data = await  becomeHost(user?.email)
       console.log(data);
       if(data.modifiedCount > 0){
         toast.success('Success! Please wait for Admin brother Confirmation')
       }else{
         toast.success('Please! Wait for Admin Approve🖐 Maybe Admin Now Sleep🥱 Ok!')
       }
         }catch (err){
            toast.error(err.massage)
         } finally{
            setIsOpen(false)
         }
    }

    return (
        <>
            <MenuItem
                icon={TbBrandBooking}
                label='My Bookings'
                address='my-bookings'
              />

{role === 'guest' && (
        <div
         onClick={()=> setIsOpen(true)}
        className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>Request To Be A Host</span>
        </div>
      )}
     <HostModal closeModal={closeModal}
        isOpen={isOpen}
        modalHandler={modalHandler}
     />
        </>
    );
};

export default GuestMenu;
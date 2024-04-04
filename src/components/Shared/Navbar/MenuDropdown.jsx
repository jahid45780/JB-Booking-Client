import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'
import HostModal from '../../Modal/HostRequestModal'
import { becomeHost } from '../../../api/auth'
import toast from 'react-hot-toast'
import useRole from '../../../hooks/useRole'
import { IoIosContacts } from "react-icons/io";
import { LuLogIn } from "react-icons/lu";
import { RiLoginBoxLine,RiDashboardFill } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { IoHome } from "react-icons/io5";


const MenuDropdown = () => {
  const { user, logOut } = useAuth()
  const [role]= useRole()
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen]= useState(false)
  const closeModal = ()=>{
    setIsModalOpen(false)
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
        setIsModalOpen(false)
     }
}




  

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Become A Host btn */}
        <div
          
          className='hidden md:block'>
          {(!user || !role || role === 'guest')&&(
             <button
             onClick={()=> setIsModalOpen(true) }
             disabled={!user}
            className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-lg font-bold rounded-full  transition'>
              Request To Be A Host
            </button>
          )}
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[12vw] bg-green-500   overflow-hidden right-0 top-12 text-sm py-1 px-1'>
          <div className='flex flex-col cursor-pointer'>
          
            <Link
              to='/'
              className='text-xl flex items-center gap-2 mt-1   hover:bg-green-600 rounded-2xl hover:p-3'
            >
          <IoHome className=' text-2xl' />    Home
            </Link>

            <Link to='contact'
             className=' text-xl flex items-center gap-2 mt-1   hover:bg-green-600 rounded-2xl hover:p-3 '
            >
             <IoIosContacts className=' text-2xl' />  Contact
            </Link>

                {user? <> 
                  <Link
              to='/dashboard'
              className='text-xl flex items-center gap-2 mt-1   hover:bg-green-600 rounded-2xl hover:p-3'
            >
        <RiDashboardFill className=' text-2xl' />     Dashboard
            </Link>
            <button onClick={logOut}
               className='text-xl flex items-center gap-2 mt-1   hover:bg-green-600 rounded-2xl hover:p-3'
            >
            <BiLogOutCircle className=' text-2xl' />   Log Out
            </button>
                
                 </> : 
                
                <>
                <Link
              to='/login'
              className=' text-xl flex items-center gap-2 mt-1   hover:bg-green-600 rounded-2xl hover:p-3'
            >
           <LuLogIn className=' text-2xl' />   Login
            </Link>
            <Link
              to='/signup'
              className=' text-xl flex items-center gap-2 mt-1   hover:bg-green-600 rounded-2xl hover:p-3'
            >
          <RiLoginBoxLine className=' text-2xl' />    Sign Up
            </Link>
                </> }
            
          </div>
        </div>
      )}
      <HostModal isOpen={isModalOpen} closeModal={closeModal} modalHandler={modalHandler} />
    </div>
  )
}

export default MenuDropdown

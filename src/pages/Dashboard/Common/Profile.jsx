import useAuth from '../../../hooks/useAuth'
import useRole from '../../../hooks/useRole'
import { Helmet } from 'react-helmet-async'
import { FaCriticalRole } from "react-icons/fa6";

const Profile = () => {
  const { user } = useAuth()
  const [role] = useRole()
  // console.log(user)
  return (
    <div className='flex justify-center items-center h-screen'>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className=' bg-slate-100 shadow-lg rounded-2xl w-3/5'>
        <img
          alt='profile'
          src='https://i.ibb.co/TgM0rNT/61wfi-Ixp0-DL-AC-UL400.jpg'
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

         
          <p className='mt-2 text-xl text-orange-950 font-medium text-gray-800 '>
            User Id: {user.uid}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user.email}</span>
              </p>

              <div>
            {/*  */}
            <p className='p-2  flex items-center gap-2 text-xl font-bold  px-4 text-black  rounded-full'>
             <FaCriticalRole className=' text-3xl' />  {role && role.toUpperCase()}
          </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
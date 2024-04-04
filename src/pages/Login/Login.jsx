import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { getToken, saveUser } from '../../api/auth'
import toast from 'react-hot-toast'
import { TbFidgetSpinner } from 'react-icons/tb'


const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {signIn,signInWithGoogle, loading} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from.pathname || '/' 
  // form submit handler
  const handleSubmit = async event =>{

    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
  
    
    try{
    
    //  user login
    const result = await signIn(email,password)
  
    // server user data in database
    const dbResponse = await saveUser(result?.user)
    // console.log(dbResponse);
    // access token 
     await getToken(result?.user?.email)
     navigate(from,{replace:true} )
     toast.success(' Login Successfully ')
     } catch(err){
      toast.error(err?.message)
     }
   
    }
    //handle google singIn
    const handleGoogleSingIn = async ()=>{
      try{
      
         const result = await signInWithGoogle()   
      
      // server user data in database
      const dbResponse = await saveUser(result?.user)
    
      // access token 
       await getToken(result?.user?.email)
       navigate(from, {replace:true})
       toast.success(' Login Successfully ')
       } catch(err){
        toast.error(err?.message)
       }
    } 


  return (
     <div className=' m-1 bg-lime-100' >
       <Link to='/' > 
        <img  className=' text-center mx-auto mt-2'  width='200'
          height='100' src="https://i.ibb.co/47K0MKC/jb-removebg-preview.png" alt="" />
        </Link>
  <h1 className=' text-4xl font-bold text-center mt-2' > As-Salamu Alaikum </h1>

     <p className=' text-center text-3xl font-semibold text-indigo-700' > Welcome To JB Booking </p>

<div className=' grid lg:grid-cols-2 md:grid-cols-1  justify-center items-center' >
      
      <div className=' ml-0 md:ml-24'>
          {/* work 1 */}
      
  
  <img src="https://i.ibb.co/QPhBCTq/istockphoto-removebg-preview.png" alt="logo" />
      </div>
  
       {/* work 2 */}
       <div className=' mt-2 border-4 border-lime-300 border-t-0 border-e-0 border-b-0'>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 '>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl text-lime-800 uppercase font-bold'>Log In</h1>
            <p className='text-lg text-lime-800'>
              Sign in to access your account
            </p>
          </div>
          <form onSubmit={handleSubmit}
            noValidate=''
            action=''
            className='space-y-6 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-2 text-lime-800 text-lg'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <div className='flex justify-between'>
                  <label htmlFor='password' className='text-lime-800 text-lg mb-2'>
                    Password
                  </label>
                </div>
                <input
                  type= {  showPassword ? "text" : "password"}
                  name='password'
                  autoComplete='current-password'
                  id='password'
                  required
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                />
                 <span className=' text-2xl absolute mt-3 -ml-7' 
                onClick={() => setShowPassword(!showPassword) } >
                  {
                     
                      showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                     
                  }
                </span>
              </div>
            </div>
  
            <div>
            <button
                type='submit'
                className='bg-rose-500 w-full rounded-md py-3 text-white'
              >
                {loading? <TbFidgetSpinner className=' animate-spin mx-auto text-2xl' /> : 'Continue' }
              </button>
            </div>
          </form>
          <div className='space-y-1'>
            <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
              Forgot password?
            </button>
          </div>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3  text-lime-800 text-lg'>
              Login with social accounts
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>
          <div onClick={handleGoogleSingIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-lime-400 border-rounded cursor-pointer'>
            <FcGoogle size={32} />
  
            <p className='text-lime-800 text-md' >Continue with Google</p>
          </div>
          <p className='px-6  text-center text-lime-800 text-md'>
            Don&apos;t have an account yet?{' '}
            <Link
              to='/signup'
              className='hover:underline hover:text-rose-500 text-gray-600'
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
  
      </div>


     </div>
  )
}

export default Login

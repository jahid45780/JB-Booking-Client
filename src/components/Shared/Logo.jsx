import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to='/'>
        <img
          className=' md:block rounded-lg hover:animate-pulse'
          src='https://i.ibb.co/47K0MKC/jb-removebg-preview.png'
          alt='logo'
          width='200'
          height='100'
          
        />
      </Link>
    );
};

export default Logo;
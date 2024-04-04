import { Helmet } from "react-helmet-async"
import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"


const Home = () => {
   
  
  return (
    <div>

      <Helmet> <title> JB Booking Home </title> </Helmet>
              
           {/* catagory part */}

           <Categories></Categories>

           {/* Room part */}

            <Rooms></Rooms>
    </div>
  )
}

export default Home

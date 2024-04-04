import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async"
import Header from "../../components/RoomDitali/Header";
import RoomInfo from "../../components/RoomDitali/RoomInfo";
import RoomReservation from "../../components/RoomDitali/RoomReservation";


const RoomDetails = () => {
  
    const room = useLoaderData()
    

       return <Container>
          
          

          <div className=" max-w-screen-lg mx-auto" >

          <Helmet> <title> JB Booking Details </title> </Helmet>

         <div className="  flex flex-col gap-6" >
   
             <Header roomData={room} ></Header>
                      
              <div className="  grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-3" >
               
               <RoomInfo roomData={room} ></RoomInfo>

               {/* RoomReservation */}
               <div className=" md:col-span-3 order-first md:order-last" >
           
                  <RoomReservation room={room} ></RoomReservation>

               </div>

              </div>

              

         </div>

          </div>


          
          
    </Container>
};

export default RoomDetails;
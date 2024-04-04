import { IoLocationOutline } from "react-icons/io5";
import { MdPhonelinkRing } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
const Contact = () => {
    return (
        <div className="bg-purple-300 p-0" >
            
               <GoogleMap/>
            <section className=" max-w-4xl mx-auto text-center" >
                
                
                 <div className=" grid lg:grid-cols-3  md:grid-cols-2  grid-cols-1   gap-3 mt-5 m-3 " >
                    <div > 
                        <IoLocationOutline className=" text-9xl  bg-purple-600 p-2 rounded-full" />

                         <p className=" text-start font-bold text-3xl mt-2 uppercase " > Address </p>
                         <p className=" text-start font-semibold text-xl mt-1" > Dhaka 1212 </p>
                          <p className=" text-start text-xl mt-1" > Mazar Road, Mirpur-1  </p>

                         </div>
                    
                    <div >
                    <MdPhonelinkRing className=" text-9xl bg-purple-600 p-2 rounded-full" />
                    <p className="text-start font-bold text-3xl mt-2 uppercase" > Phone </p>
                    <p className="text-start  text-2xl font-bold mt-2" > JB Booking  </p>
                     <p className="text-start font-semibold text-xl mt-1" > CEO </p>
                    <p className="text-start text-xl mt-1" > 01763943446 </p>
                    <p className="text-start  text-2xl font-bold mt-2" > JB Booking  Service Department </p>
                    <p className="text-start font-semibold text-xl mt-1" > Office </p>
                    <p className="text-start text-xl mt-1" > +9999234567 </p>
                    </div>

                    <div >
                     <MdOutlineMarkEmailUnread className=" text-9xl bg-purple-600 p-2 rounded-full" />
                     <p className="text-start font-bold text-3xl mt-2 uppercase" > Email </p>
                     <p className="text-start font-semibold text-xl mt-1" > Req For Proposal </p>
                     <p className="text-start text-xl mt-1" > jbBooing@gmail.com </p>
                     
                    </div>
                 </div>
             </section>

      <section className=" max-w-4xl mx-auto mt-9  grid lg:grid-cols-2 md:grid-cols-1 gap-5 items-center justify-center" >
        <div>
          <h1 className=" text-4xl text-center text-purple-500 font-bold" >Massage Us 👋 </h1>
          <p className=" text-gray-500 mt-3" > Are you looking for Best Hostels in JB Booking, your search ends here. Find the best Hostels in JB Booking and save upto 50% on your bookings at MakeMyTrip. Pick from 1 fully serviced Hostels in JB Booking with prices starting as low as OMR 7 per night. Enjoy a comfortable stay with free WiFi, air-conditioned rooms, free on-site parking, fully-equipped kitchen and all modern amenities. View real-time prices for  JB Booking Hostels on MakeMyTrip  </p>
        </div>


    <div>
       <form>

      
       <div>
        <p className=" text-gray-500 text-lg" >Name</p>
        <input type="text" className="input rounded-lg input-bordered border-2 w-72 h-14 bg-purple-200 border-black" />
        </div>     

        <div>
        <p className="text-gray-500 text-lg" >Email</p>
        <input type="email" className="input rounded-lg input-bordered border-2 w-72 h-14 bg-purple-200 border-black" />
        </div>  

        <div>
        <p className="text-gray-500 text-lg" >Comments</p>
            <textarea  className=" input rounded-lg input-bordered border-2 bg-purple-200 border-black" cols="30" rows="10"></textarea>
        </div>
            
            <input className=" bg-purple-500 p-2 rounded  font-bold mb-1 hover:bg-purple-900" type="submit" value="Submit" />

         </form>

    </div>

      </section>

        </div>
    );
};

export default Contact;
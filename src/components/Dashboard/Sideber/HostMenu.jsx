import { MdAddHomeWork, MdOutlineManageHistory } from "react-icons/md";
import MenuItem from "./MenuItem";
import { FaHouseFire } from "react-icons/fa6";

const HostMenu = () => {
    return (
        <>
            
            <MenuItem
                icon={MdAddHomeWork}
                label='Add Room'
                address='add-room'
              />
              <MenuItem
                icon={FaHouseFire}
                label='My Listings'
                address='my-listings'
              />
              <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Bookings'
        address='manage-bookings'
      />

        </>
    );
};

export default HostMenu;
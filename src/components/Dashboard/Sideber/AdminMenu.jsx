import { GrUserAdmin } from "react-icons/gr";
import MenuItem from "./MenuItem";
const AdminMenu = () => {
    return (
        <>
            <MenuItem
                icon={GrUserAdmin}
                label='Manage Users'
                address='manage-users'
              />
        </>
    );
};

export default AdminMenu;
import { Link, Outlet } from "react-router-dom";

function Adminlayout() {
    return (
        <>
            <h1>Admin Layout</h1>
            <br /><br />

            <nav>
                <Link to="admindashboard">Admin Dashboard</Link><br />
                <Link to="adminsettings">Settings</Link><br />
                <Link to="usersdetails">User Details</Link><br /><br />
            </nav>

            <Outlet />
        </>
    );
}

export default Adminlayout;
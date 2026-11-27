import { Link, Outlet } from "react-router-dom";

function Teammanagerlayout() {
    return (
        <>
            <h1>Team Manager Layout</h1>
            <br /><br />

            <nav>
                <Link to="teammanagerdashboard">Team Manager Dashboard</Link><br />
                <Link to="teams">Teams</Link><br />
                <Link to="players">Players</Link><br /><br />
            </nav>

            <Outlet />
        </>
    );
}

export default Teammanagerlayout;
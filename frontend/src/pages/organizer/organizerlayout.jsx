import { Link, Outlet } from "react-router-dom";

function Organizerlayout() {
    return (
        <>
            <h1>Organizer Layout</h1>
            <br /><br />

            <nav>
                <Link to="organizerdashboard">Organizer Dashboard</Link><br />
                <Link to="tournaments">Tournaments</Link><br />
                <Link to="matches">Matches</Link><br /><br />
            </nav>

            <Outlet />
        </>
    );
}

export default Organizerlayout;
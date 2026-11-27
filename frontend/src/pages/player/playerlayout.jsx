import { Link, Outlet } from "react-router-dom";

function Playerlayout() {
    return (
        <>
            <h1>Player Layout</h1>
            <br /><br />

            <nav>
                <Link to="playerdashboard">Player Dashboard</Link><br />
                <Link to="playerprofile">Player Profile</Link><br />
                <Link to="matchschedules">Match Schedules</Link><br /><br />
            </nav>

            <Outlet />
        </>
    );
}

export default Playerlayout;
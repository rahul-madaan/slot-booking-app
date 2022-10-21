import React from "react";
import {useNavigate} from "react-router-dom";
import logo from '../logo192.png';

export const Navbar = (props) => {

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    return (<>
        <nav className="navbar navbar-dark bg-dark justify-content-center ">
            <div className="navbar-brand text-center ">
                     SNU Gym Booking
            </div>
        </nav>
        </>
    )
}

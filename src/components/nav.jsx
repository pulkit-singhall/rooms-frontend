import React from "react";
import logo from "../assets/logo.png";

function NavBar() {
    return (
        <nav>
            <div className="flex flex-row justify-between p-2 h-20 items-center bg-gray-50">
                <img className="h-16 w-16 m-2" src={logo} alt={"logo was here"} />
                <p className="m-2 pr-4 text-center text-lg text-blue-600">Be Random, Engage Randomly</p>
            </div>
        </nav>
    )
}

export default NavBar;
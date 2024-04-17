import React from "react";
import { useState } from "react";
import NavBar from "../components/nav";
import RoomCard from "../components/card";
import comedyLogo from "../assets/comedy.png";
import techLogo from "../assets/technology.png";
import sportsLogo from "../assets/sports.png";
import politicsLogo from "../assets/politics.png";
import { Link } from "react-router-dom";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:9000");

// function joinRoom(select, roomName) {
//     if (select) {
//         socket.emit("join-room", roomName, socket.id);
//     }
// }

function Home() {
    let [select, setSelect] = useState(false);
    let [roomName, setRoomName] = useState('');

    const selectRoom = (e) => {
        let room = e.target.children[1].innerHTML;
        console.log(room);
        if (!select) {
            setSelect(true);
        }
        setRoomName(room);
    }

    return (
        <>
            <NavBar />
            <div className="flex flex-col h-screen w-screen items-center justify-start">
                <div className="flex flex-row justify-evenly m-2 p-2">
                    <button onClick={selectRoom}><RoomCard name={"Comedy"} imagePath={comedyLogo} /></button>
                    <button onClick={selectRoom}><RoomCard name={"Technology"} imagePath={techLogo} /></button>
                    <button onClick={selectRoom}><RoomCard name={"Sports"} imagePath={sportsLogo} /></button>
                    <button onClick={selectRoom}><RoomCard name={"Politics"} imagePath={politicsLogo} /></button>
                </div>
                <button className={`mt-20 p-3 rounded-xl text-white ${select ? "bg-red-600" : "bg-red-400"}`}>
                    <Link to={`${select ? "/room" : "/"}`}>
                        {`Join room ${roomName} ${select}`}
                    </Link>
                </button>
            </div>
        </>
    );
}

export default Home;
import React from "react";

function RoomCard({name, imagePath}) {
    return (
        <>
            <div className="h-80 w-64 flex flex-col bg-slate-100 justify-evenly items-center rounded-2xl mr-6 ml-6">
                <img src={imagePath} alt="Image" className="h-36 w-40"/>
                <p className="text-3xl text-amber-900">{name}</p>
            </div>
        </>
    )
}

export default RoomCard;
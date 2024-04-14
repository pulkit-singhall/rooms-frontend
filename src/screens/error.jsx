import React from "react";

function Error() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-50">
                <p className="text-3xl p-1 mb-1">OOPS!</p>
                <p className="text-2xl p-1">Looks like you are on a wrong page. </p>
            </div>
        </>
    );
}

export default Error;
import React from "react";

function Button({childern}) {
    return (
        <button>
            <button className="text-xl font-medium text-white rounded px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-gray-500 hover:to-black-500 hover:text-black ">{childern}</button>
        </button>
    )
}
export default Button;

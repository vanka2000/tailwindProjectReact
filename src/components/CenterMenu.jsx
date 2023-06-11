import React from "react";

export default function CenterMenu(){

    const liStyle = "mr-[3rem] hover:cursor-pointer"

    return(
        <div className="menu flex">
            <ul className="flex w-full justify-between">
                <li className={liStyle}>Home</li>
                <li className={liStyle}>About</li>
                <li className={liStyle}>Preformer</li>
                <li className={liStyle}>Event Shedule</li>
            </ul>
        </div>
    )
}
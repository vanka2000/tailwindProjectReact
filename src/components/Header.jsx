import React from "react";
import CenterMenu from "./CenterMenu";

export default function Header(){
    const buttonStyle = "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]"
    return(
        <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
            <img src={require("../img/MuzicLogo.png")} alt="" className="logo w-[42px] h-[42px]" />
            <CenterMenu/>
            <div className="buttons flex gap-3">
                <button className={buttonStyle + ` bg-[#232A4E] hover:bg-[#616eb3]` }>Sing Up</button>
                <button className={buttonStyle + ` bg-[#232A4E] hover:bg-[#616eb3]`}>Log in</button>
            </div>
        </div>
    )
}
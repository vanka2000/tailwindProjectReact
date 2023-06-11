import React from "react";

export default function DownloadAds(){
    const downloadImgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'
    return(
        <div className="download">
            <div className="download_images flex gap-7">
                <img 
                src={require('../img/AppStore.png')}
                 alt=""
                     className={downloadImgStyle}
                  />
                   <img 
                src={require('../img/GooglePlay.png')}
                 alt=""
                    className={downloadImgStyle}
                  />
            </div>
        </div>
    )
}
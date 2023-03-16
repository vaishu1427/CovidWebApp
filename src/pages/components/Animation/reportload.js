import React from "react";
import { ShimmerThumbnail, ShimmerSectionHeader  } from "react-shimmer-effects";

function reportload(){
    
    return(
        <div className="continer-sm">
            <div className="m-4">
                <ShimmerSectionHeader />
            </div>
            <div className=" p-3 rounded" style={{width: "22rem"}}>
                <ShimmerThumbnail height={200} rounded />
            </div>
        </div>
    )
}

export default reportload;
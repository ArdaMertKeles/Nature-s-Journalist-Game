import React from "react";

export default function characterText({scene}){

    return(
        <div className="characterText">
            {scene && <p style={{fontSize: '3em'}}>{scene.text}</p>}
        </div>
    )
}
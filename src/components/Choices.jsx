import React from "react";

export default function Choices({scene, onChoice}){

    return(
        <div className="choices">
            {scene && scene.choices && scene.choices.map((choice, index) =>(
                <button key={index} onClick={() => onChoice(choice)}>
                    {choice.text}
                </button>
            ))}
        </div>
    )
}
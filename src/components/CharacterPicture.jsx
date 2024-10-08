import React from "react";

export default function CharacterPicture({ scene }) {

    return (
        <div className="characterPictureWrapper">
            {scene && scene.profilePicture && <img src={scene.profilePicture} alt="" />}
            {scene && scene.cpName && <div className="cpName"> {scene.cpName} </div>}
        </div>
    )
}
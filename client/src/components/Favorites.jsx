import React, { useState } from "react";
import "./Favorites.css";


const Favorites = (props)=> {
    const faves = props.faveList.map((item, index)=>{
        return (
            <div key={index}>
                <p>{item.title}</p>
                <p>{item.artist}</p>
                <p>{item.time}</p>
            </div>
        )
    })
    return (
        <div className="favorite-songs">
            <h2>Favorite Songs List</h2>
            {faves}
        </div>
    )
}
export default Favorites


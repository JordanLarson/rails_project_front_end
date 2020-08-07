import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SongDetails.css";

const SongDetails = ({ title, artist, time, id, handleSubmit }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteSong = async () => {
    const response = await axios({
      url: `http://localhost:3000/songs/${id}`,
      method: "DELETE",
    });
    console.log(response.data);
    setIsDeleted(true);
  };

  if (isDeleted) {
    console.log("deleted!");
  }

  const handleSubmitDetails = (e) => {
    console.log("in handlesubmitdetails");
    e.preventDefault();
    //filter over faves
    //if it exists - remove else - add
    let favoriteSong = {
      title: title,
      artist: artist,
      time: time,
      id: id,
    };
    handleSubmit(favoriteSong);
  };
  return (
    <div>
      <div className="songContainer">
        <p className="title">{title}</p>
        <p className="artist">{artist}</p>
        <p className="time">{time}</p>
      </div>

      <form onSubmit={handleSubmitDetails}>
        <button className="heart"></button>
      </form>
      <button className="deleteButton" onClick={deleteSong}>
        Delete
      </button>
    </div>
  );
};

export default SongDetails;

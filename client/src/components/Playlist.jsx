import React, { useState, useEffect } from "react";
import SongDetails from "./SongDetails";
import axios from "axios";
import "./Playlist.css";

const Playlist = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`http://localhost:3000/songs`);
        console.log(response);
        // console.log("Songs - useEffect - ", response);
        setList(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  // console.log(list);

  const songsArr = list.map((song) => (
    <SongDetails
      key={song._id}
      id={song._id}
      title={song.title}
      artist={song.artist}
      time={song.time}
      handleSubmit={props.handleSubmit}
    />
  ));

  return (
    <div>
      <h1>PLAYLIST 1</h1>
      <ul>{songsArr}</ul>
    </div>
  );
};

export default Playlist;

//Map over data - return song details component
//

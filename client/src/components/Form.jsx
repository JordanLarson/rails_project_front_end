import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

const Form = () => {
  const [input, setInput] = useState({ title: "", artist: "", time: "" });
  const [item, setItem] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3000/songs`,
      method: "POST",
      data: input,
    })
      .then((res) => {
        setItem({ createdItem: res.data.item });
      })
      .catch(console.error);
    console.log(input);
    setInput({ title: "", artist: "", time: "" });
    setIsSubmitted(true);
  };

  return (
    <>
      <h3 className="add_song">Add A New Song</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={input.title} name="title" onChange={handleChange} />

        <label>Artist</label>
        <input value={input.artist} name="artist" onChange={handleChange} />

        <label>Time</label>
        <input value={input.time} name="time" onChange={handleChange} />
        <button className="add_song_button" type="submit">
          Add New Song
        </button>
      </form>
    </>
  );
};
export default Form;

import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Playlist from "./components/Playlist";
import Favorites from "./components/Favorites";
import Form from "./components/Form";

function App() {
  const [faveList, setFaveList] = useState([]);

  const handleSubmit = (favesong) => {
    setFaveList([...faveList, favesong]);
  };
  return (


    <>
   
   <div>
     <Header/>
     <Playlist handleSubmit={handleSubmit} />
   <Favorites faveList={faveList} />
     <Form/>
   </div>
  
 </>
 );
}
export default App;

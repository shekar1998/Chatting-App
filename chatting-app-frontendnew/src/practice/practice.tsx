import socketIOClient from "socket.io-client";
import { useContext, useEffect, useState } from "react";
import { TextField } from '@material-ui/core';
import axios from 'axios'


const ENDPOINT = "localhost:4000";

function Practice() {
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");

  const [img, setImg] = useState();
  const [img1, setImg1] = useState("");

  const connect = () =>{
    const socket = socketIOClient(ENDPOINT, { transports: ["websocket"] });

    socket.on("connection", (data) => {
      console.log("here : ", data);
    });

    socket.on("message-sent", (data) => {
        // console.log(text)
      setText(message + "    >>>   " + data);
    });
  }

  useEffect(() => {
   
  }, []);

  const sendSocket = () => {
    axios.post("http://localhost:4000/",{message})
  };

  const handleClick = () =>{
   console.log(img)
  }

  return (
    <div>
      <h1>Message : {text}</h1>
      <input onChange={(e: any) => setMessage(e.target.value)}></input>
      <button onClick={sendSocket}>Click</button>
      <button onClick={connect}>Connect</button>
      {/* <input type="file" onChange={(e:any)=>{setImg(e.target.files[0])}} />
      <button onClick={handleClick}>Click</button> 
      <img src={img1} alt="djf"/> */}


    </div>
  );
}

export default Practice;

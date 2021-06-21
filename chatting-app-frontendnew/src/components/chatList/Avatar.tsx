import React from "react";
import './avatar.css'


function Avatar(props:any) {
  return (
    <div>
      <div className="avatar">
        <div className="avatar-img">
          <img className="avatar-image" src={"http://localhost:4000/" + props.image} alt="#" />
        </div>
        {props.isOnline !== "none" ? <span className={`isOnline ${props.isOnline}`}></span> : <span/>}
      </div>
    </div>
  )
}

export default Avatar

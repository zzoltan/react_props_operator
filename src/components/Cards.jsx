import React from "react";
import Details from "./Details";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>

        <Avatar image={props.img} />
      </div>
      <div className="bottom">
        <Details detailsInfo={props.telefone} />
        <Details detailsInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;

import React from "react";

function MessageCard(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.message}</p>
      <hr />
    </div>
  );
}

export default MessageCard;

import React from "react";
import Button from "./Button";

function Card({ title, description, icon, onAction }) {
return (
<div className="card">
<div className="card-icon">{icon}</div>

  <h3>{title}</h3>

  <p>{description}</p>

  <Button variant="outline" onClick={onAction}>
    Learn More
  </Button>
</div>

);
}

export default Card;
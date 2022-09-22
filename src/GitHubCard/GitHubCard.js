import React from "react";
import Card from "react.bootstrap/Card";
import Avatar from "./Avatar.png";

function GitHubCard() {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Avatar} />
        {"https://avatars.githubusercontent.com/u/103083443?v=4"}

        <Card.Body>
          <Card.Title>Neel Patel</Card.Title>
          <Card.Text>
            I am an entry level inspiring front-end/full stack developer who is
            experienced in creating functional content while wanting to learn
            more.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default GitHubCard;

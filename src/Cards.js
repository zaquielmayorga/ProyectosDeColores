import React from "react";

import { Card, CardColumns } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
// import { useFetch } from "./hooks";
// function Photos() {
//   const [data, loading] = useFetch("https://reqres.in/api/colors");
//   return
// const [toShowProject, setShowProject] = useState(false);
// function handleShowProject() {
// //   setShowProject(true);
// }
const Cards = () => {
  return (
    <div>
      {/* {toShowProject ? <Redirect to="/project" /> : null} */}

      <h1 className="textTitle">Copia y pega el color de la empresa</h1>
      <CardColumns>
        <Card className="card1">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card2">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card3">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card4">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card5">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card6">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
      {/* <Button type="submit" onClick={handleShowProject} buttonSize="btn_medium">
        <div className="dropdown-divider">{nickname}</div>
      </Button> */}
    </div>
  );
};

export default Cards;

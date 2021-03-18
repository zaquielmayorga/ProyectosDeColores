import React from "react";
import { useFetch } from "./../hooks";

import { Link } from "react-router-dom";

import { Card, CardColumns, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Card.css";

const Page1 = () => {
  const [data, loading] = useFetch("https://reqres.in/api/colors");

  return (
    <div>
      <h1 className="textTitle">Copia y pega el color de la empresa</h1>
      <CardColumns>
        <Card className="card1">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>
              {data.data[0].name}Card title that wraps to a new line
            </Card.Title>
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

      <Link to="/page2">
        <div className="button">
          <Button variant="primary" size="lg" active>
            Siguiente
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default Page1;

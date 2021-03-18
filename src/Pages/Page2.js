import React from "react";
import { useFetch } from "./../hooks";

import { Card, CardColumns, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Card.css";
import { Link } from "react-router-dom";

const Page2 = () => {
  const [data, loading] = useFetch("https://reqres.in/api/colors?page=2");
  return (
    <>
      <h1 className="textTitle">Copia y pega el color de la empresa</h1>
      {loading ? (
        "Loading..."
      ) : (
        <CardColumns className="text-align">
          <Card className="card1">
            <Card.Body>
              <Card.Title>{data.data[0].name}</Card.Title>
              <Card.Text>{data.data[0].year}</Card.Text>
              <Card.Text>{data.data[0].color}</Card.Text>
              <Card.Text>{data.data[0].panetone_value}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card2">
            <Card.Body>
              <Card.Title>{data.data[1].name}</Card.Title>
              <Card.Text>{data.data[1].year}</Card.Text>
              <Card.Text>{data.data[1].color}</Card.Text>
              <Card.Text>{data.data[1].panetone_value}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card3">
            <Card.Body>
              <Card.Title>{data.data[2].name}</Card.Title>
              <Card.Text>{data.data[2].year}</Card.Text>
              <Card.Text>{data.data[2].color}</Card.Text>
              <Card.Text>{data.data[2].panetone_value}</Card.Text>
            </Card.Body>
          </Card>

          <Card className="card4">
            <Card.Body>
              <Card.Title>{data.data[3].name}</Card.Title>
              <Card.Text>{data.data[3].year}</Card.Text>
              <Card.Text>{data.data[3].color}</Card.Text>
              <Card.Text>{data.data[3].panetone_value}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card5">
            <Card.Body>
              <Card.Title>{data.data[4].name}</Card.Title>
              <Card.Text>{data.data[4].year}</Card.Text>
              <Card.Text>{data.data[4].color}</Card.Text>
              <Card.Text>{data.data[4].panetone_value}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card6">
            <Card.Body>
              <Card.Title>{data.data[5].name}</Card.Title>
              <Card.Text>{data.data[5].year}</Card.Text>
              <Card.Text>{data.data[5].color}</Card.Text>
              <Card.Text>{data.data[5].panetone_value}</Card.Text>
            </Card.Body>
          </Card>

          <Link to="/">
            <div className="button">
              <Button variant="primary" size="lg" active>
                Atras
              </Button>
            </div>
          </Link>
        </CardColumns>
      )}
    </>
  );
};
export default Page2;

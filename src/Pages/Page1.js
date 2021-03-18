import React from "react";
import { useFetch } from "./../hooks";
import { Link } from "react-router-dom";
import { Card, CardColumns, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Card.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Page1 = () => {
  const [data, loading] = useFetch("https://reqres.in/api/colors");
  return (
    <>
      <h1 className="textTitle">Copia y pega el color de la empresa</h1>
      {loading ? (
        "Loading..."
      ) : (
        <CardColumns className="text-align">
          <CopyToClipboard text={data.data[0].color}>
            <Button className="card1">
              <Card className="card1">
                <Card.Body>
                  <Card.Title>{data.data[0].name}</Card.Title>
                  <Card.Text>{data.data[0].year}</Card.Text>
                  <Card.Text>{data.data[0].color}</Card.Text>
                  <Card.Text>{data.data[0].panetone_value}</Card.Text>
                </Card.Body>
              </Card>
            </Button>
          </CopyToClipboard>
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

          <Link to="/page2">
            <div className="button">
              <Button variant="primary" size="lg" active>
                Siguiente
              </Button>
            </div>
          </Link>
        </CardColumns>
      )}
    </>
  );
};

export default Page1;

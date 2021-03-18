import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Card.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Cardtemplate = (data) => {
  return (
    <div>
      <CopyToClipboard text={data.data.color}>
        <Card className={`card${data.data.id}`}>
          <Button
            style={{ backgroundColor: data.data.color }}
            className="button"
          >
            <Card.Body>
              <Card.Title>{data.data.name}</Card.Title>
              <Card.Text>{data.data.year}</Card.Text>
              <Card.Text>{data.data.color}</Card.Text>
              <Card.Text>{data.data.pantone_value}</Card.Text>
            </Card.Body>
          </Button>
        </Card>
      </CopyToClipboard>
    </div>
  );
};
export default Cardtemplate;

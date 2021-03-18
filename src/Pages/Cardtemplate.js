import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Card.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
const Cardtemplate = (data) => {
  const [copied, setCopied] = useState(false);
  return (
    <div>
      <CopyToClipboard text={data.data.color} onCopy={() => setCopied(true)}>
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
      {copied ? <span style={{ color: "red" }}>Copied</span> : null}
    </div>
  );
};
export default Cardtemplate;

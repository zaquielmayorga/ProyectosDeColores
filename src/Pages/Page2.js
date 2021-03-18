import React from "react";
import { useFetch } from "./../hooks";
import Cardtemplate from "./Cardtemplate";
import { CardColumns, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./../Card.css";
import { Link } from "react-router-dom";

const Page2 = () => {
  const [data, loading] = useFetch("https://reqres.in/api/colors?page=2");
  return (
    <>
      <h1 className="textTitle">ColoresApp</h1>
      <h3 className="textTitle">
        Selecciona una una tarjeta para copiar su color
      </h3>

      {loading ? (
        "Loading..."
      ) : (
        <>
          <CardColumns className="text-align">
            {data.data.map((data) => (
              <Cardtemplate data={data} />
            ))}
          </CardColumns>
          <Link to="/">
            <div className="button text-center">
              <Button variant="primary" className="btnwidth" size="lg" active>
                Atras
              </Button>
            </div>
          </Link>
        </>
      )}
    </>
  );
};
export default Page2;

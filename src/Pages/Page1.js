import React from "react";
import Cardtemplate from "./Cardtemplate";
import { useFetch } from "./../hooks";
import { Link } from "react-router-dom";
import { CardColumns, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const Page1 = () => {
  const [data, loading] = useFetch("https://reqres.in/api/colors");
  console.log(data);
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
          <Link to="/page2">
            <div className="button text-center">
              <Button variant="primary" className="btnwidth" size="lg" active>
                Siguiente
              </Button>
            </div>
          </Link>
        </>
      )}
    </>
  );
};

export default Page1;

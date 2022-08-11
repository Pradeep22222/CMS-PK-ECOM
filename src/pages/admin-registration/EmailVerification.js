import React, { useEffect, useState } from "react";
import { Alert, Card, Container, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { emailVerifyAdminUser } from "../../helpers/axiosHelper";

const EmailVerification = () => {
  const [queryParams] = useSearchParams();
  const [isPending, setIsPending] = useState(true);
  const [response, setResponse] = useState({});
  useEffect(() => {
    const obj = {
      emailValidationCode: queryParams.get("c"),
      email: queryParams.get("e"),
    };
    //   call axios to call the server
    (async () => {
      const result = await emailVerifyAdminUser(obj);
      console.log(result);
      setResponse(result);
      setIsPending(false);
    })();
  }, []);
  return (
    <div>
      <Header></Header>
      <Container className="page-main">
        {" "}
        {isPending && (
          <Card className="mt-5 p-2 m-auto" style={{ width: "20rem" }}>
            <Spinner
              variant="primary"
              animation="border"
              className="m-auto"
            ></Spinner>
            <h5>Email verification process begun, please wait...</h5>
          </Card>
        )}
        {response.message && (
          <Alert
            style={{ width: "20rem" }}
            className="mt-5 p-2 m-auto"
            variant={response.status === "success" ? "success" : "danger"}
          >
            {response.message}
          </Alert>
        )}
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default EmailVerification;

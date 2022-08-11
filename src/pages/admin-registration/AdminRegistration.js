import React, { useState } from "react";
import { Header } from "../../components/header/Header";
import { Alert, Container } from "react-bootstrap";
import { Footer } from "../../components/footer/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInputField } from "../../customInputField/CustomInputField";
import { postUser } from "../../helpers/axiosHelper";
export const AdminRegistration = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("password donot match");
    }
    const result = await postUser(rest);
    setResponse(result);
  };
  console.log(response);
  const fields = [
    {
      label: "first name",
      name: "fName",
      type: "text",
      placeholder: "enter first name",
      required: true,
    },
    {
      label: "last name",
      name: "lName",
      type: "text",
      placeholder: "enter last name",
      require: true,
    },
    {
      label: "email",
      name: "email",
      type: "email",
      placeholder: "enter email",
      required: true,
    },
    {
      label: "phone number",
      name: "phone",
      type: "number",
      placeholder: "enter number",
      required: true,
    },
    {
      label: "DOB",
      name: "dob",
      type: "date",
      placeholder: "enter date of birth",
      required: true,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "enter address",
      required: true,
    },
    {
      label: "password",
      name: "password",
      type: "password",
      placeholder: "enter password",
      required: true,
    },
    {
      label: "confirmPassword",
      name: "confirmPassword",
      type: "password",
      placeholder: "enter password",
      required: true,
    },
  ];
  return (
    <div>
      <Header></Header>
      <Container className="page-main">
        <div className="form">
          <Form onSubmit={handleOnSubmit}>
            <h1 className="text-center ">New Admin Registration</h1>
            {response.message && (
              <Alert
                variant={response.status === "success" ? "success" : "danger"}
              >
                {response.message}
              </Alert>
            )}
            {fields.map((item, i) => (
              <CustomInputField
                key={i}
                {...item}
                onChange={handleOnChange}
              ></CustomInputField>
            ))}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

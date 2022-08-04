import React, { useState } from "react";
import { Header } from "../../components/header/Header";
import { Container } from "react-bootstrap";
import { Footer } from "../../components/footer/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInputField } from "../../customInputField/CustomInputField";
export const AdminRegistration = () => {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const fields = [
    {
      label: "first name",
      name: "fName",
      type: "text",
      placeholder: "enter first name",
      require: true,
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
      require: true,
    },
    {
      label: "phone number",
      name: "phonenumber",
      type: "number",
      placeholder: "enter number",
      require: true,
    },
    {
      label: "DOB",
      name: "dob",
      type: "date",
      placeholder: "enter date of birth",
      require: true,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "enter address",
      require: true,
    },
    {
      label: "password",
      name: "password",
      type: "password",
      placeholder: "enter password",
      require: true,
    },
    {
      label: "confirmPassword",
      name: "confirmPassword",
      type: "password",
      placeholder: "enter password",
      require: true,
    },
  ];
  return (
    <div>
      <Header></Header>
      <Container className="page-main">
        <div className="form">
          <Form onSubmit={handleOnSubmit}>
            <h1 className="text-center ">New Admin Registration</h1>
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

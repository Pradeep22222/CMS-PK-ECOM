import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { CustomInputField } from "../../customInputField/CustomInputField";
import { loginUserAction } from "./userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const { user } = useSelector((state) => state.admin);
  useEffect(() => {
    user._id && navigate("/dashboard");
  }, [user, navigate]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(form));
  };
  return (
    <div>
      <Header></Header>
      <Container class="page-main">
        <div className="form">
          <h3>Welcome Back</h3>
          <Form onSubmit={handleOnSubmit}>
            <CustomInputField
              onChange={handleOnChange}
              label="email"
              name="email"
              required={true}
              placeholder="your@email.com"
              type="email"
            ></CustomInputField>
            <CustomInputField
              onChange={handleOnChange}
              label="password"
              name="password"
              required={true}
              placeholder="************"
              type="password"
            ></CustomInputField>
            <Button type="submit" variant="primary">
              Login
            </Button>
          </Form>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

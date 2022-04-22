import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/Actions/authAction.js";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [useInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUserInfo({ ...useInfo, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(register(useInfo, navigate));
    setUserInfo({ username: "", email: "", password: "" });
  };
  return (
    <Form style={{ width: "40%", margin: "auto" }} onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>name</Form.Label>
        <Form.Control
          type="text"
          onChange={handleChange}
          value={useInfo.username} placeholder="type your name"
          name="username"
          
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          onChange={handleChange}
          value={useInfo.email} placeholder="name@example.com"
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>password</Form.Label>
        <Form.Control
          type="password"
          onChange={handleChange}
          value={useInfo.password} placeholder="type your password"
          name="password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register;

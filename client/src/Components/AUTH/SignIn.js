import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Actions/authAction.js";
function SignIn() {
  const dispatch = useDispatch();
  const [useInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    setUserInfo({ ...useInfo, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login(useInfo, navigate));
    setUserInfo({ email: "", password: "" });
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth/register");
  };
  return (
    <Form style={{ width: "40%", margin: "auto" }} onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="email"
          value={useInfo.email}
          placeholder="name@example.com"
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>password</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="password"
          value={useInfo.password}
          placeholder="name@example.com"
          name="password"
        />
      </Form.Group>
      <Button variant="primary" onChange={handleChange} type="submit">
        Submit
      </Button>
      <p onClick={handleClick}>DO not have an account?</p>
    </Form>
  );
}

export default SignIn;

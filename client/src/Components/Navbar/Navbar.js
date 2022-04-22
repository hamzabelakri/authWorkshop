import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap";
import {logOut} from "../../Redux/Actions/authAction"

function CustomNavbar() {
  const navigate =useNavigate()
  const dispatch= useDispatch()
  const { isAuth } = useSelector((state) => state.authReducer);
  const { user } = useSelector((state) => state.authReducer);

 const handleDeconnect=()=>{
  dispatch(logOut(navigate))
 }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <h1>
          {" "}
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            HOME
          </Link>
        </h1>

        {isAuth ? (
          <div>
            <Button variant="danger" onClick={handleDeconnect}>Logout </Button>
            <p style={{color:"white"}}>{user && user.username}</p>
          </div>
        ) : (
          <Nav>
            <Link
              to="/auth/sign-in"
              style={{ textDecoration: "none", color: "white" }}
            >
              SignIN
            </Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

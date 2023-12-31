import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

const NavBarUser = () => {
  const { setAuth, id, setId } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${id}`, {
      state: { id: id },
    });
  };

  const logOut = async () => {
    try {
      setAuth(false);
      setId(0);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <Button
            variant="light"
            onClick={() => {
              handleClick();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </Button>
        </Col>
        <Col>
          <Button variant="light" onClick={logOut}>
            {" "}
            logOut
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default NavBarUser;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Container">
      <div className="Parent">
        <div>
          <Button variant="danger" onClick={handleShow}>
            SideBar
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <p>lorem ipsum dolor sit amet .</p>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div>
          <h1>Hello World</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

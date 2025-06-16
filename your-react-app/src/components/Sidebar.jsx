import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";

function Sidebar({ logo, links }) {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* League Logo (Hover to open sidebar) */}
      <img 
        src={logo} 
        alt="League logo" 
        style={{
          width: "200px",
          position: "fixed",
          top: "20px",  
          left: "10px",
          cursor: "pointer",
          zIndex: 1000
        }}
        onMouseEnter={() => setShow(true)}
      />

      {/* Sidebar */}
      <Offcanvas 
        show={show} 
        onHide={() => setShow(false)} 
        placement="start" 
        onMouseLeave={() => setShow(false)}  
        className="bg-dark text-warning"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} style={{ color: "inherit", textDecoration: "none" }}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;

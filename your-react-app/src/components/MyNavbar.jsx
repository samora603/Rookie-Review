import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import "../styles/navbar.css";
import rookieReviewLogo from "../images/RR images/rookie review logo.png";


function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark w-100 sticky-top">
      <Container fluid className="d-flex flex-column align-items-center">
        {/* Top Section: Logo, Title, and Tagline */}
        <div className="d-flex w-100 align-items-center py-2">
  <div className="d-block">
    <img 
      src={rookieReviewLogo}
      alt="The Rookie Logo" 
      style={{ height: "50px", marginRight: "15px" }} 
    />
  </div>
  <div className="text-center flex-grow-1">
    <h1 className="text-warning m-0" style={{ fontSize: "24px", fontWeight: "bold" }}>
      Welcome to Rookie Review
    </h1>
    <p className="text-warning m-0" style={{ fontSize: "14px" }}>
      Your Source for All Things Sports
    </p>
  </div>
  <div className="d-lg-none">
    <img 
      src="/path-to-your-logo.png" 
      alt="The Rookie Logo" 
      style={{ height: "50px", marginLeft: "15px" }} 
    />
  </div>
</div>


        {/* Bottom Section: Navigation Links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="text-white mx-3">Home</Nav.Link>
            <Nav.Link href="/news" className="text-white mx-3">News</Nav.Link>
            <NavDropdown title="Tournaments" id="basic-nav-dropdown" className="mx-3">
              <NavDropdown.Item href="epl">Premier League</NavDropdown.Item>
              <NavDropdown.Item href="laliga">Laliga</NavDropdown.Item>
              <NavDropdown.Item href="bundesliga">Bundesliga</NavDropdown.Item>
              <NavDropdown.Item href="seria-a">Seria-A</NavDropdown.Item>
              <NavDropdown.Item href="ligue-1">Ligue-1</NavDropdown.Item>
              <NavDropdown.Item href="ucl">Champions League</NavDropdown.Item>
              <NavDropdown.Item href="uel">Europa League</NavDropdown.Item>
              <NavDropdown.Item href="conference-league">Conference-league</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#scores" className="text-white mx-3">Scores and Fixtures</Nav.Link>
            <Nav.Link href="fan-zone" className="text-white mx-3">Fan Zone</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

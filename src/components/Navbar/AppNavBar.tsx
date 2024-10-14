import { Container, Nav, Navbar } from "react-bootstrap";

//import { sections } from "../../data/sections";

const AppNavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar-bg" >
      <Container style={styles.section}  >
        {/* Navbar brand */}
        <Navbar.Brand href="#home" className="nav-link">React Basics</Navbar.Brand>

        {/* Navbar toggle button for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible section */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home" className="nav-link" >Home</Nav.Link>
          <Nav.Link href="#link" className="nav-link">Link</Nav.Link>
          
            {/* <Nav.Link href="#fetch">Fetch Data</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


// styles for the component
const styles = {
    section : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       
        
        
      },
  
   

  };
export default AppNavBar;
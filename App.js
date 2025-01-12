import bootsrap from 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
  <Navbar bg="light" data-bs-theme="light">
   <Container>
    <Navbar.Brand href="#home">React Navbar</Navbar.Brand>
    <Nav className="me-auto">
     <Nav.Link href="#home">Home</Nav.Link>
     <Nav.Link href="#">Login</Nav.Link>
     <Nav.Link href="#">Register</Nav.Link>
    </Nav>
   </Container>
  </Navbar>
  );
}

export default App;

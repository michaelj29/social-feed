import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

const NavBar = (props) => {
    return ( 
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Thought Placer</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default NavBar;
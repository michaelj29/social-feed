import './NavBar.css'
import logo from './images/logo.png'

const NavBar = (props) => {
    return ( 
        <div className="navbar">
            <nav >
                <div className="container-fluid">
                    <img className='logo' src={logo}></img>
                    <a className="navbar-brand" href="#">Thought Picker</a>
                </div>
            </nav>
        </div>
     );
}
 
export default NavBar;
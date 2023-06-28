import './index.css'
import {Link , NavLink} from 'react-router-dom';

const Navbar = () => (
    <div className='nav-bar'>
        <Link className="logo" to="/">
            <p>SUHANI BAJAJ</p>
        </Link>
        <div className='links' >
        
            <NavLink exact activeStyle={{color: "#7716A5"}}  className="link" to="/"><p> About</p></NavLink>
            <NavLink activeStyle={{color: "#7716A5"}}  className="link" to="/"> <p>Expertise</p></NavLink>
            <NavLink activeStyle={{color: "#7716A5"}}  className="link" to="/"><p> Projects</p></NavLink>
            <NavLink activeStyle={{color: "#7716A5"}}  className="link" to="/"><p> Contact</p></NavLink>
         </div>
    </div>
);

export default Navbar;
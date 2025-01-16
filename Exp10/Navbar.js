import { Link } from "react-router-dom"; 
 
function Navbar() { 
    return ( 
        <div class="nav justify-content-center"> 
            <Link to="/" class="nav-link active">Home</Link> 
            <Link to="/about" class="nav-link">About</Link> 
            <Link to="/contact" class="nav-link">Contact</Link> 
        </div> 
    ); 
} 
 
export default Navbar;
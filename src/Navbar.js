import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Dojo Blog Navbar</h1>
            <div className="links">
                <Link to="/" style={{
                    color: "white",
                    backgroundColor: "blueviolet"
                }}
                >Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "blueviolet"
                }}
                >New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;
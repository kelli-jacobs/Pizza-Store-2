import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <nav style={{ padding: "10px", mouseover: "orange", background: "white"}}>
            <Link className="link" to="/" style={{ margin: "10px" }}>Home</Link>
            <Link className="link" to="/Menu" style={{ margin: "10px" }}>Menu</Link>
            <Link className="link" to="/Order" style={{ margin: "10px" }}>Order</Link>
        </nav>
    )
}
export default NavBar;
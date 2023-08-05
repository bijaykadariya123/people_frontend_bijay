import {Link} from "react-router-dom" // to link think like achor tag



function Header(props){
    return(
       <nav className="nav">
        <Link to="/">
            <div>People App</div>
        </Link>

       </nav>
    )
}

export default Header
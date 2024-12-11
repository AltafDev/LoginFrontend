import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"
const Header = () => {
  return (
    <>
    <nav>
        <div className="logo">
            <h1>Altaf tech</h1>
        </div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            
            <li>
                <Link to={"/"}>About</Link>
            </li>
            
            <li>
                <Link to={"/"}>Products</Link>
            </li>
            
            <li>
                <Link to={"/"}>Contacts</Link>
            </li>
        </ul>
        <div className="btns">
            <Link to={"/Signupform"}>
            <button >Signup</button>
            </Link>
            <Link to={"/loginform"}>
            <button >Login</button>
            </Link>

        </div>
    </nav>
    </>
  )
}

export default Header

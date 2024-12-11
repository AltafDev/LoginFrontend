import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { Link } from 'react-router-dom';
const MobileHeader = () => {
  return (
    <>
     <div className="mobilenav">
      <div className="mobileheader">
          <h1>Altaf tech</h1>
        <FiAlignJustify size={35} />
      </div>
      <div className="mobileroutes">
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
        <div className="mobilebtns">
          <button>Signup</button>
          <button>Signup</button>

        </div>
      </div>
   
      </div>   
    </>
  )
}

export default MobileHeader

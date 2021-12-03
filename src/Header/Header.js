import React from 'react';
import { Link, useHistory } from "react-router-dom";

const Header = (props) => {

    // console.log(props,"props",localStorage.getItem("isLoggedIn"))
    const history = useHistory();

    const logoutHandler =()=>{
        localStorage.removeItem("isLoggedIn")
        history.replace('/')
    }
    let headerContent = (
        <div className="header">
            <Link to="/" className="btn home-btn">Home </Link>
            <Link to="/login" className="btn nav-btn login-btn">Login

            </Link>
            <Link to="/signup" className="btn nav-btn signup-btn"> Signup

            </Link>
        </div>
    )
    if(localStorage.getItem("isLoggedIn") === "1"){
        // console.log("done")
         headerContent = (
            <div className="header">
                {/* <Link to="/" className="btn home-btn">Home </Link> */}
                {/* <Link to="/login" className="btn nav-btn login-btn">Logout
                </Link> */}
                <button className="signup-btn nav-btn btn" onClick={logoutHandler} >Logout</button>
                {/* <Link to="/signup" className="btn nav-btn signup-btn"> Signup
    
                </Link> */}
            </div>
        )
    }
    return (
        <>
            {headerContent}
        </>
    )
}
export default Header

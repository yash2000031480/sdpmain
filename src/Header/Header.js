import React from 'react';
import { Link, useHistory } from "react-router-dom";
import './Header.css';

const Header = (props) => {

    // console.log(props,"props")
    const history = useHistory();

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn")
        history.replace('/')
    }
    const cartHandler = () => {
        history.replace({
            pathname: "/cart",
            state: { selected: props.onSelected }
        })
    }
    let headerContent = (
        <div className="header">
            <div className="mini-head">
                <p className="item-name title">Bidding wars</p>
                <Link to="/" className="btn home-btn">Home </Link>
            </div>
            <div className="mini-head">
                <Link to="/login" className="btn nav-btn login-btn">Login</Link>
                <Link to="/signup" className="btn nav-btn signup-btn"> Signup</Link>
            </div>
        </div>
    )
    if (localStorage.getItem("isLoggedIn") === "1") {
        headerContent = (
            <div className="header ">
                <div className="mini-head">
                    <Link to="/homepage" className="btn home-btn">Home </Link>
                </div>
                <div className="mini-head">
                
                    <button className="signup-btn nav-btn btn" onClick={cartHandler} >Cart</button>
                    <button className="signup-btn nav-btn btn" onClick={logoutHandler} >Logout</button>
                    
                </div>
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

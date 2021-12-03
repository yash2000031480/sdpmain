import React from 'react'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import BidPic from '../images/bidpic.jpg'

const LandingPage = () => {
    return (
        <div>
            <Header />
            <div className="BidPic">
                <p className="welcome">  Welcome to Bidding system</p>
            </div>
            {/* <img src={BidPic} className="BidPic"/> */}
            <div className="footer">
                <div className="land-box ">
                    <p className="call">Call us @ +91- 9848012345</p>
                    <p className="mail">Mail us @ bidmail.gmail.com </p>
                    <p className="located">Located @  Hyderabad</p>
                </div>
                <div>
                    <div>
                        <p>Terms and Conditions</p>
                        <ul>
                            <li><Link to="/Faq">FAQ</Link></li>
                            <li><Link to="/Terms">Terms</Link></li>
                            <li><Link to="/Privacy">Privacy</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default LandingPage

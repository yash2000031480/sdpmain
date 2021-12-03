import React from "react";
import "./Signup.css";
import { Link, useHistory } from "react-router-dom";
// import login from "../../assests/images/homeimages/login_img.png";
import Card from "../UI/CardBox/Card.js";
import Header from "../Header/Header";
// import Header from "../../components/Header/Header";
// import Loader from '../../components/UI/Loader/Loader';

const Signup = (props) => {

    const history = useHistory();


    let submitHandler=(e)=>{
        e.preventDefault();
        history.replace('/homepage')
      
      
      }



    return (
        <>

            {/* {isLoading && <Loader/> } */}
            <Header />
            <div className="home-page ">
                <div className="home-page-img ">
                    {/* <img src={login} alt="logo" className="login-img" /> */}
                </div>
                <div className="login-right ">
                    <p className="home-title">Signup</p>
                    <Card className="home-page-cards">
                        <form className="login-form"
                         onSubmit={submitHandler}
                        >
                            <div className="mb-2 input-box">
                                <label htmlFor="login-frm-grp" className="ent-pwd-label home-page-label">
                                    Full Name
                                </label>
                                <input type="text" name="email" id="signin-email" className="form-control"
                                    placeholder="Enter your Name"
                                //  onChange={handleEmail}
                                // required
                                />
                            </div>
                            <div className="mb-2 input-box">
                                <label htmlFor="login-frm-grp" className="ent-pwd-label home-page-label">
                                    Email
                                </label>
                                <input type="text" name="email" id="signin-email" className="form-control"
                                    placeholder="Enter your Email"
                                //  onChange={handleEmail}
                                // required
                                />
                            </div>

                            <div className=" input-box">
                                <label htmlFor="re-login" className="ent-pwd-label  home-page-label">Password</label>
                                <input type="password" name="password" className="form-control"
                                    placeholder="Enter your Password"
                                //  onChange={handlePassword} onKeyUp={keyUpHandler}
                                // required
                                />
                            </div>
                            <div className=" input-box">
                                <label htmlFor="re-login" className="ent-pwd-label  home-page-label">Re enter Password</label>
                                <input type="password" name="password" className="form-control"
                                    placeholder="Enter your Password"
                                //  onChange={handlePassword} onKeyUp={keyUpHandler}
                                // required
                                />
                            </div>
                            <div className="home-fotter ">
                                <Link to="/login"
                                    className="nav-link">Login</Link>
                                <button type="submit" className="btn  home-form-btn" name="login"> Signup </button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Signup;



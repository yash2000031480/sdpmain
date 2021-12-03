import React,{useState} from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
// import login from "../../assests/images/homeimages/login_img.png";
import Card from "../UI/CardBox/Card.js";
import Header from "../Header/Header";
// import Header from "../../components/Header/Header";
// import Loader from '../../components/UI/Loader/Loader';
const LoginPage = (props) => {

  const history = useHistory();

  const [loginClicked,setLoginClicked]= useState(false);

  
let loginsubmitHandler=(e)=>{
  e.preventDefault();
  // console.log("done")
  // setLoginClicked(true)/
  localStorage.setItem("isLoggedIn",1)
  history.replace('/homepage')


}


  return (
    <>
       
      {/* {isLoading && <Loader/> } */}
      <Header  />
      <div className="home-page ">
        <div className="home-page-img ">
          {/* <img src={login} alt="logo" className="login-img" /> */}
        </div>
        <div className="login-right ">
          <p className="home-title">LOGIN</p>
          <Card className="home-page-cards">
            <form className="login-form"
             onSubmit={loginsubmitHandler}
             >
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
              <div className="home-fotter ">
                <Link to="/signup"
                  className="nav-link">Signup</Link>
                <button type="submit" className="btn  home-form-btn" name="login"> Login </button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginPage;



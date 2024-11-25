import React from "react";
import "./login.css";
 
import font from "./insta-font.png"
import facelogo from "./facebook-logo.png";
import google from "./insta-google.jpg";
import microsoft from "./insta-mrcrosoft.png";

const Loginpage = () => {
    return (
        <>


             

            <div className="main-header">
                <div className="header-text">
                     <img src={font} alt="" />
                </div>
                <div className="username">
                    <input type="text" placeholder="Phone number, username or email" />
                </div>
                <div className="password">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="login-btn">
                    <button>Log in</button>
                </div>
                <div className="partision">
                    <p>________________ </p>
                </div>
                <div className="middle-text">
                    <p>OR</p>
                </div>
                <div className="partision-2">
                    <p>________________ </p>
                </div>
                <div className="face">
                    <img src={facelogo} alt="" />
                </div>
                <div className="face-text">
                    <p>Log in with Facebook</p>
                </div>
                <div className="forget">
                    <label>Forgot password?</label>
                </div>

            </div>

            <div className="second">
                <div className="sing">
                    <p>Don't have an account?</p>
                </div>
                <div className="sing-up">
                    <p>Sing up</p>
                </div>
            </div>

<div className="apps">
    <label>Get the app.</label>
</div>
<div className="google">
    <img src={google} alt="" />
</div>
<div className="microsoft">
    <img src={microsoft} alt="" />
</div>

<div className="list">
    <label>Meta</label>
    <label>About</label>
    <label>Blog</label>
    <label>Jobs</label>
    <label>Help</label>
    <label>API</label>
    <label>Privacy</label>
    <label>Terms</label>
    <label>Location</label>
    <label>Instagram Lite</label>
    <label>Threads</label>
    <label>Contact Uploading & Non-Users</label>
    <label>Meta Verified</label>
</div>
<div className="last-area">
    <label>© 2024 Instagram from Meta</label>
</div>
        </>
    )
}
export default Loginpage;
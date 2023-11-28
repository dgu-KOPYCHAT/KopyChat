import React from "react";
//import { Link } from "react-router-dom";
import * as c from "./LoginPageCSS.js";
import TopBar from "../components/TopBar.js";

const LoginPage = () => {
    const handleGoogleLogin = async () => {
        window.location.href = "http://localhost:8000/user/auth/google";
    };

    return (
        <div>
            <c.Entire>
                <TopBar />
                <c.Content>
                    <c.LoginBtn onClick={handleGoogleLogin}>
                        <span>Google 계정으로 로그인</span>
                    </c.LoginBtn>
                </c.Content>
            </c.Entire>
        </div>
    );
};

export default LoginPage;


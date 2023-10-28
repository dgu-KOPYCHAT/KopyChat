import React from "react";
import { Link } from "react-router-dom";
import * as c from "./LoginPageCSS.js";
import TopBar from "../components/TopBar.js";

const LoginPage = () => {
	return (
		<div>
			<c.Entire>
				<TopBar />
				<c.Content>
					<c.LoginBtn>
						<span>Google 계정으로 로그인</span>
					</c.LoginBtn>
				</c.Content>
			</c.Entire>
		</div>
	);
};

export default LoginPage;

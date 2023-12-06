import React from "react";
import { Link } from "react-router-dom";
import './CSS/TopBar.css';
import * as c from "./CSS/TopBarCSS.js";
import * as s from "./CSS/ShareAssetCSS.js";
import LogoImage from "../images/kopychat.png";
import SearchIcon from "../images/search_icon_gray.png";

import { useEffect, useState } from "react";
import axios from "axios";

const TopBar = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		axios
			.post(
				"http://localhost:3000/user/auth/silent-refresh",
				{},
				{
					withCredentials: true,
				}
			)
			.then((res) => {
				console.log(res);
				const { accessToken } = res.data;
				console.log(accessToken);
				axios.defaults.headers.common[
					"Authorization"
				] = `Bearer ${accessToken}`;
				setIsLoggedIn(true);
			});
	}, []);

	const handleGoogleLogin = async () => {
        window.location.href = "http://localhost:8000/user/auth/google";
    };

	return (
		<div>
			<c.TopBar>
				<c.LeftSide>
					<Link to="/" style={{ textDecoration: "none" }}>
						<c.Logo>
							<s.Image
								src={LogoImage}
								size={"lg"}
								marginBottom={"5px"}
								marginRight={"10px"}
							></s.Image>
							<s.BoldText size={"lgxl"}>KOPYCHAT</s.BoldText>
						</c.Logo>
					</Link>
					<Link to="/quizsearch" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<s.BoldText size={"mdlg"}>문제</s.BoldText>
						</c.TopMenu>
					</Link>
					<Link to="/quizlist/main" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<s.BoldText size={"mdlg"}>문제집</s.BoldText>
						</c.TopMenu>
					</Link>
					<Link to="/editor" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<s.BoldText size={"mdlg"}>에디터</s.BoldText>
						</c.TopMenu>
					</Link>
					<Link to="/board" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<s.BoldText size={"mdlg"}>게시판</s.BoldText>
						</c.TopMenu>
					</Link>
					<Link to="/postwrite" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<s.BoldText size={"mdlg"}>글쓰기</s.BoldText>
						</c.TopMenu>
					</Link>
					<c.TopMenu>
						<s.Image size={"sm"} src={SearchIcon}></s.Image>
					</c.TopMenu>
				</c.LeftSide>

				<c.RightSide>
					<div onClick={handleGoogleLogin} style={{ textDecoration: "none" }}>
						<c.LoginMenu>
							<s.BoldText size={"mdlg"}>로그인</s.BoldText>
						</c.LoginMenu>
					</div>
					<Link to="/user" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<s.BoldText size={"mdlg"}>마이페이지</s.BoldText>
						</c.TopMenu>
					</Link>
				</c.RightSide>
				<input value={`${isLoggedIn}`}></input>
			</c.TopBar>
			<s.HrLine />
		</div>
	);
};

export default TopBar;

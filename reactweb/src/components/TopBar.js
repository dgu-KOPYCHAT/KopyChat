import React from "react";
import { Link } from "react-router-dom";
import * as c from "./TopBarCSS.js";
import * as s from "./ShareAssetCSS.js";
import LogoImage from "../images/kopychat.png";
import SearchIcon from "../images/search_icon_gray.png";

const TopBar = () => {
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
					<Link
						to="/quizlist/main"
						style={{ textDecoration: "none" }}
					>
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
					<Link to="/grouplist" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<s.BoldText size={"mdlg"}>그룹</s.BoldText>
						</c.TopMenu>
					</Link>
					<c.TopMenu>
						<s.Image size={"sm"} src={SearchIcon}></s.Image>
					</c.TopMenu>
				</c.LeftSide>
				<c.RightSide>
					<Link to="/login" style={{ textDecoration: "none" }}>
						<c.LoginMenu>
							<s.BoldText size={"mdlg"}>로그인</s.BoldText>
						</c.LoginMenu>
					</Link>
					<Link to="/user" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<s.BoldText size={"mdlg"}>마이페이지</s.BoldText>
						</c.TopMenu>
					</Link>
				</c.RightSide>
			</c.TopBar>
			<s.HrLine />
		</div>
	);
};

export default TopBar;

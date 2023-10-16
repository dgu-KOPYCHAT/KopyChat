import React from "react";
import { Link } from "react-router-dom";
import * as c from "./EditorTopBarCSS.js";
import LogoImage from "../images/kopychat.png";
import SearchIcon from "../images/search_icon.png";

const EditorTopBar = () => {
	return (
		<div>
			<c.TopBar>
				<c.LeftSide>
					<Link to="/" style={{ textDecoration: "none" }}>
						<c.Logo>
							<c.LogoImage src={LogoImage}></c.LogoImage>
							<c.LogoText>KOPYCHAT</c.LogoText>
						</c.Logo>
					</Link>
					<Link to="/editor" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<c.MenuText>문제</c.MenuText>
						</c.TopMenu>
					</Link>
					<c.TopMenu>
						<c.MenuText>문제집</c.MenuText>
					</c.TopMenu>
					<c.TopMenu>
						<c.MenuText>그룹</c.MenuText>
					</c.TopMenu>
				</c.LeftSide>
				<c.RightSide>
					<c.LoginMenu>
						<c.MenuText>로그인</c.MenuText>
					</c.LoginMenu>
				</c.RightSide>
			</c.TopBar>
		</div>
	);
};

export default EditorTopBar;

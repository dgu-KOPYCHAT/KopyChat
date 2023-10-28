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
					<Link to="/quiz" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<c.MenuText>문제</c.MenuText>
						</c.TopMenu>
					</Link>
					<Link
						to="/quizlist/main"
						style={{ textDecoration: "none" }}
					>
						<c.TopMenu>
							<c.MenuText>문제집</c.MenuText>
						</c.TopMenu>
					</Link>
					<Link to="/editor" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<c.MenuText>에디터</c.MenuText>
						</c.TopMenu>
					</Link>
					<Link to="/grouplist" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<c.MenuText>그룹</c.MenuText>
						</c.TopMenu>
					</Link>
				</c.LeftSide>
				<c.RightSide>
					<Link to="/login" style={{ textDecoration: "none" }}>
						<c.LoginMenu>
							<c.MenuText>로그인</c.MenuText>
						</c.LoginMenu>
					</Link>
				</c.RightSide>
			</c.TopBar>
		</div>
	);
};

export default EditorTopBar;

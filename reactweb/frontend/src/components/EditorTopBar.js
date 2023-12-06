import React from "react";
import { Link } from "react-router-dom";
import * as c from "./CSS/EditorTopBarCSS.js";
import * as s from "./CSS/ShareAssetCSS.js";
import LogoImage from "../images/kopychat.png";

const EditorTopBar = () => {
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
							<s.BoldText size={"lgxl"} color={"#bfbfbf"}>
								KOPYCHAT
							</s.BoldText>
						</c.Logo>
					</Link>
					<Link to="/quizsearch" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<s.BoldText size={"mdlg"} color={"#bfbfbf"}>
								문제
							</s.BoldText>
						</c.TopMenu>
					</Link>
					<Link
						to="/quizlist/main"
						style={{ textDecoration: "none" }}
					>
						<c.TopMenu>
							<s.BoldText size={"mdlg"} color={"#bfbfbf"}>
								문제집
							</s.BoldText>
						</c.TopMenu>
					</Link>
					<Link to="/editor" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<s.BoldText size={"mdlg"} color={"#bfbfbf"}>
								에디터
							</s.BoldText>
						</c.TopMenu>
					</Link>
					<Link to="/board" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<s.BoldText size={"mdlg"} color={"#bfbfbf"}>
								게시판
							</s.BoldText>
						</c.TopMenu>
					</Link>
					<Link to="/grouplist" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<s.BoldText size={"mdlg"} color={"#bfbfbf"}>
								그룹
							</s.BoldText>
						</c.TopMenu>
					</Link>
				</c.LeftSide>
				<c.RightSide>
					<Link to="/login" style={{ textDecoration: "none" }}>
						<c.LoginMenu>
							<s.BoldText size={"mdlg"} color={"#bfbfbf"}>
								로그인
							</s.BoldText>
						</c.LoginMenu>
					</Link>
				</c.RightSide>
			</c.TopBar>
		</div>
	);
};

export default EditorTopBar;

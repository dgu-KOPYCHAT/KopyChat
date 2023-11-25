import React from "react";
import { Link } from "react-router-dom";
import * as c from "./QuizPageCSS.js";
import * as s from "../components/ShareAssetCSS.js";
import TopBar from "../components/TopBar.js";
import Post from "../components/Post.js";
import DifficultyIcon from "../components/DifficultyIcon.js";

const QuizPage = () => {
	function PageTitle() {
		return (
			<c.PageTitle>
				<c.PageTitleLeft>
					<DifficultyIcon
						difficulty={"Novice"}
						level={"1"}
						size={"md"}
					/>
					<s.BoldText size={"lg"}>문제 이름</s.BoldText>
				</c.PageTitleLeft>
				<c.PageTitleRight>
					<Link
						to="/editor"
						style={({ textDecoration: "none" }, { width: "auto" })}
					>
						<c.EditorBtn>
							<c.EditorBtnText>에디터로 이동 →</c.EditorBtnText>
						</c.EditorBtn>
					</Link>
				</c.PageTitleRight>
			</c.PageTitle>
		);
	}

	function InfoBar() {
		return (
			<c.InfoBar>
				<c.InfoBarLeft>
					<c.Info>
						<s.BoldText size={"smmd"}>실행 시간 제한</s.BoldText>
						<s.BoldText size={"lg"}>1초</s.BoldText>
					</c.Info>
					<c.Info>
						<s.BoldText size={"smmd"}>메모리 제한</s.BoldText>
						<s.BoldText size={"lg"}>128MB</s.BoldText>
					</c.Info>
				</c.InfoBarLeft>
				<c.InfoBarRight>
					<c.Info marginRight={"1.5vw"}>
						<s.BoldText size={"smmd"} marginRight={"1vw"}>
							정답자 / 시도 횟수
						</s.BoldText>
						<s.BoldText size={"lg"}>1234 / 5678</s.BoldText>
					</c.Info>
				</c.InfoBarRight>
			</c.InfoBar>
		);
	}

	return (
		<div>
			<c.Entire>
				<TopBar />
				<c.ContentDiv>
					<c.Content>
						<c.FixedQuizInfo>
							{PageTitle()}
							<s.HrLine />
							{InfoBar()}
							<s.HrLine />
						</c.FixedQuizInfo>
						<c.PostDiv>
							<Post />
						</c.PostDiv>
					</c.Content>
				</c.ContentDiv>
			</c.Entire>
		</div>
	);
};

export default QuizPage;

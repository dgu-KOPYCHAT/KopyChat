import React from "react";
import { Link } from "react-router-dom";
import * as c from "./QuizPageCSS.js";
import TopBar from "../components/TopBar.js";
import QuizCard from "../components/QuizCard.js";
import Post from "../components/Post.js";
import DifficultyImage from "../images/Difficulty/prototype.png";

const QuizListPage = () => {
	function QuizList() {
		let result = [];
		for (let i = 0; i < 5; i++) {
			result.push(<QuizCard />);
		}
		return result;
	}

	return (
		<div>
			<c.Entire>
				<TopBar />
				<c.ContentDiv>
					<c.Content>
						<c.FixedQuizInfo>
							<c.PageTitle>
								<c.PageTitleLeft>
									<c.DifficultyImg src={DifficultyImage} />
									<c.PageTitleText>문제 이름</c.PageTitleText>
								</c.PageTitleLeft>
								<c.PageTitleRight>
									<Link
										to="/editor"
										style={
											({ textDecoration: "none" },
											{ width: "auto" })
										}
									>
										<c.EditorBtn>
											<c.EditorBtnText>
												에디터로 이동 →
											</c.EditorBtnText>
										</c.EditorBtn>
									</Link>
								</c.PageTitleRight>
							</c.PageTitle>
							<c.HrLine />
							<c.InfoBar>
								<c.InfoBarLeft>
									<c.Info>
										<c.InfoNameText>
											실행 시간 제한
										</c.InfoNameText>
										<c.InfoText>1초</c.InfoText>
									</c.Info>
									<c.Info>
										<c.InfoNameText>
											메모리 제한
										</c.InfoNameText>
										<c.InfoText>128MB</c.InfoText>
									</c.Info>
								</c.InfoBarLeft>
								<c.InfoBarRight>
									<c.Info marginRight={"1.5vw"}>
										<c.InfoNameText>
											정답자 / 시도 횟수
										</c.InfoNameText>
										<c.InfoText marginLeft={"1vw"}>
											1234 / 5678
										</c.InfoText>
									</c.Info>
								</c.InfoBarRight>
							</c.InfoBar>
							<c.HrLine />
						</c.FixedQuizInfo>
						<Post />
					</c.Content>
				</c.ContentDiv>
			</c.Entire>
		</div>
	);
};

export default QuizListPage;

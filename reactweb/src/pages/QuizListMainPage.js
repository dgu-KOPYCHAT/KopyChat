import React from "react";
import { Link } from "react-router-dom";
import * as c from "./QuizListMainPageCSS.js";
import TopBar from "../components/TopBar.js";
import QuizListCard from "../components/QuizListCard.js";
import Post from "../components/Post.js";
import DifficultyImage from "../images/Difficulty/prototype.png";

const QuizListMainPage = () => {
	function QuizList() {
		let result = [];
		for (let i = 0; i < 10; i++) {
			result.push(<QuizListCard />);
		}
		return result;
	}

	return (
		<div>
			<c.Entire>
				<TopBar />
				<c.Content>
					<c.PageTitle>
						<c.DifficultyImg src={DifficultyImage} />
						<c.PageTitleText>문제집 목록</c.PageTitleText>
					</c.PageTitle>
					<c.SortBar>
						<c.SortDiv>
							<c.SortText>정렬 : </c.SortText>
						</c.SortDiv>
						<c.SortBtn>
							<c.SortText>레벨</c.SortText>
						</c.SortBtn>
						<c.SortBtn>
							<c.SortText>ID</c.SortText>
						</c.SortBtn>
						<c.SortBtn>
							<c.SortText>진행률</c.SortText>
						</c.SortBtn>
					</c.SortBar>
					<c.HrLine />
					<c.QuizListTopBar>
						<c.IDText>#</c.IDText>
						<c.QuizTitleText>제목</c.QuizTitleText>
						<c.SolvedAmountText>진행률</c.SolvedAmountText>
					</c.QuizListTopBar>
					<c.HrLine2 />
					<c.QuizContent>{QuizList()}</c.QuizContent>
				</c.Content>
			</c.Entire>
		</div>
	);
};

export default QuizListMainPage;

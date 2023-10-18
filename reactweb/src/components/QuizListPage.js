import React from "react";
import { Link } from "react-router-dom";
import * as c from "./QuizListPageCSS.js";
import TopBar from "./TopBar";
import QuizCard from "./QuizCard.js";
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
				<c.HrLine />
				<c.Content>
					<c.PageTitle>
						<c.DifficultyImg src={DifficultyImage} />
						<c.PageTitleText>문제 목록</c.PageTitleText>
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
							<c.SortText>푼 사람 수</c.SortText>
						</c.SortBtn>
					</c.SortBar>
					<c.QuizListTopBar>
						<c.IDText>#</c.IDText>
						<c.QuizTitleText>제목</c.QuizTitleText>
						<c.SolvedAmountText>푼 사람 수</c.SolvedAmountText>
					</c.QuizListTopBar>
					{QuizList()}
				</c.Content>
			</c.Entire>
		</div>
	);
};

export default QuizListPage;

import React from "react";
import * as c from "./QuizSearchPageCSS.js";
import TopBar from "../components/TopBar.js";
import QuizCard from "../components/QuizCard.js";
import DifficultyRangeSlider from "../components/DifficultyRangeSlider.js";
import { Link } from 'react-router-dom';

const QuizSearchPage = () => {
	function QuizList() {
		let result = [];
		for (let i = 0; i < 25; i++) {
			result.push(<QuizCard key={i} />);
		}
		return result;
	}

	return (
		<div>
			<c.Entire>
				<TopBar />
				<c.Content>
					<c.PageTitle>{/*<DifficultyRangeSlider />*/}</c.PageTitle>
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
					<c.HrLine />
					<c.QuizListTopBar>
						<c.IDText>#</c.IDText>
						<c.QuizTitleText>제목</c.QuizTitleText>
						<c.SolvedAmountText>푼 사람 수</c.SolvedAmountText>
					</c.QuizListTopBar>
					<c.QuizContent>{QuizList()}</c.QuizContent>
					<Link
						to="/quiz/insert"
						style={
							({ textDecoration: "none" },
								{ width: "auto" })
						}>
						<c.QuizInsertBtn>
							<c.QuizInsertText>
								문제 작성
							</c.QuizInsertText>
						</c.QuizInsertBtn>
					</Link>
				</c.Content>
			</c.Entire>
		</div>
	);
};

export default QuizSearchPage;

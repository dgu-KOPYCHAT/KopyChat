import React from "react";
import { Link } from "react-router-dom";
import * as c from "./QuizListPageCSS.js";
import TopBar from "../components/TopBar.js";
import QuizCard from "../components/QuizCard.js";
import Post from "../components/Post.js";
import DifficultyIcon from "../components/DifficultyIcon.js";

const QuizListPage = () => {
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
					<c.PageTitle>
						<DifficultyIcon
							difficulty={"Novice"}
							level={"1"}
							size={"lg"}
						/>
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
					<c.HrLine />
					<c.QuizListTopBar>
						<c.IDText>#</c.IDText>
						<c.QuizTitleText>제목</c.QuizTitleText>
						<c.SolvedAmountText>푼 사람 수</c.SolvedAmountText>
					</c.QuizListTopBar>
					<c.QuizContent>{QuizList()}</c.QuizContent>
				</c.Content>
			</c.Entire>
		</div>
	);
};

export default QuizListPage;

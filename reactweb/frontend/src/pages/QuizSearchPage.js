import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as c from "./CSS/QuizSearchPageCSS.js";
import TopBar from "../components/TopBar.js";
import QuizCard from "../components/QuizCard.js";
import axios from "axios";
// import DifficultyRangeSlider from "../components/DifficultyRangeSlider.js";

const QuizSearchPage = () => {
	const [quizs,setQuizs] = useState([]);
	useEffect(() => {
		const fetchQuizs = async () => {
			try {
				axios.get("http://localhost:8000/quiz/get").then((res)=>{
					setQuizs(res.data);
				});
			} catch(error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchQuizs();
	}, [])

	return (
		<div>
			<c.Entire>
				<TopBar />
				<c.Content>
					{/* <c.PageTitle><DifficultyRangeSlider /></c.PageTitle> */}
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
					<c.QuizContent>
						{quizs.map((item,index) => (
							<QuizCard id={item.id} name={item.title} />
						))}
					</c.QuizContent>
					<Link
						to="/quizinsert"
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

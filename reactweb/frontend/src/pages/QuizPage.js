import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as c from "./CSS/QuizPageCSS.js";
import * as s from "../components/CSS/ShareAssetCSS.js";
import TopBar from "../components/TopBar.js";
import Post from "../components/Post.js";
import DifficultyIcon from "../components/DifficultyIcon.js";
import axios from "axios";

const QuizPage = () => {
	const {id} = useParams();
	const [quiz,setQuiz] = useState([]);
	useEffect(() => {
		const fetchQuiz = async () => {
			try {
				axios.get(`http://localhost:8000/quiz/get/${id}`).then((res)=>{
					setQuiz(res.data);
				});
			} catch(error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchQuiz();
	}, [])
	function PageTitle() {
		
		return (
			<c.PageTitle>
				<c.PageTitleLeft>
					<DifficultyIcon
						difficulty={"Novice"}
						level={"1"}
						size={"md"}
					/>
					<s.BoldText size={"lg"}>{quiz.title}</s.BoldText>
				</c.PageTitleLeft>
				<c.PageTitleRight>
					<Link
						to={`/quizeditor/${id}`}
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
					<c.Info marginright={"1.5vw"}>
						<s.BoldText size={"smmd"} marginright={"1vw"}>
							정답자 / 시도 횟수
						</s.BoldText>
						<s.BoldText size={"lg"}>0 / 0</s.BoldText>
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
							<Post quiz={quiz} />
						</c.PostDiv>
					</c.Content>
				</c.ContentDiv>
			</c.Entire>
		</div>
	);
};

export default QuizPage;

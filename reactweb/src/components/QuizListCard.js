import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar.js";
import DifficultyIcon from "../components/DifficultyIcon.js";

const Entire = styled.div`
	width: 95%;
	height: 10vh;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #7f7f7f3f;
	&:hover {
		background-color: #ffffff0f;
		transition: 0.2s;
	}
`;

const QuizID = styled.div`
	width: 20%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const DifficultyImg = styled.img`
	width: min(1.5vw, 3vh); /* 1.5vw = 28.8px, 3vh = 32.4px */
	height: min(1.5vw, 3vh);
`;

const IDText = styled.span`
	width: 80%;
	margin-left: 5px;
	color: white;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
`;

const QuizTitleText = styled.span`
	width: 60%;
	margin-left: 5px;
	color: white;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
`;

const ProgressDiv = styled.div`
	width: 20%;
	height: 25%;
	margin-right: 1vw;
	display: flex;
	justify-content: left;
	align-items: center;
	background-color: #7f7f7f3f;
`;

const SolvedAmountText = styled.span`
	margin-right: 0.5vw;
	color: white;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
	text-align: right;
`;

function QuizListCard(props) {
	return (
		<Entire>
			<Link
				to="/quizlist"
				style={{
					textDecoration: "none",
					width: "100%",
					height: "10vh",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<QuizID>
					<DifficultyIcon
						difficulty={"Novice"}
						level={"1"}
						size={"sm"}
					/>
					<IDText>{props.id}</IDText>
				</QuizID>
				<QuizTitleText>{props.name}</QuizTitleText>
				<ProgressDiv>
					<ProgressBar
						current={props.solvedQuizAmount}
						max={props.quizAmount}
					/>
				</ProgressDiv>
			</Link>
		</Entire>
	);
}

QuizListCard.defaultProps = {
	id: 0,
	name: "문제집 이름",
	difficulty: "easy",
	level: 1,
	solvedQuizAmount: 15, // 푼 문제 수
	quizAmount: 15, // 문제 수
	solvedAmount: 0, // 해결한 사람 수
};

export default QuizListCard;

import styled, { css } from "styled-components";

export const InfoBar = styled.div`
	width: 100vw;
	height: 4.5vh; /* 4.5vh = 48.6px */
	/* background-color: #2f2f2f; */
	/* background-color: #1f1f1f; */
	/* background-color: #3a4a6c; */
	background-color: #222333;
	display: flex;
	justify-content: left;
	align-items: center;
`;

export const QuizTitle = styled.div`
	width: 40vw;
	height: 100%;
	display: flex;
	justify-content: left;
	align-items: center;
`;

export const QuizDifficultyImage = styled.img`
	width: min(2vw, 3.5vh); /* 2vw = 38.4px, 3.5vh = 37.8px */
	height: min(2vw, 3.5vh);
	margin-left: 2vw; /* 2vw = 38.4px */
	margin-top: 3px;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const QuizTitleText = styled.span`
	width: 80%;
	margin-left: 5px;
	color: white;
	font-size: var(--font-size-sm);
	font-family: var(--font-Maplestory-Light);
`;

export const QuizPage = styled.div`
	width: 100vw;
	height: 88vh; /* 88vh = 950.4px */
	display: flex;
	justify-content: left;
	align-items: center;
`;

export const QuizInfo = styled.div`
	width: 35%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #222333;
`;

export const QuizText = styled.p`
	width: 90%;
	height: 95%;
	font-family: var(--font-Maplestory-Light);
	font-size: var(--font-size-sm);
	color: white;
`;

export const QuizEditor = styled.div`
	width: 65%;
	height: 100%;
`;

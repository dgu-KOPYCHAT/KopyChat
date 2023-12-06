import styled, { css } from "styled-components";

export const Entire = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #222233;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Content = styled.div`
	width: 65%;
	height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const PageTitle = styled.div`
	width: 100%;
	height: 15%;
	margin-top: 1%;
	margin-bottom: 0%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
`;

export const DifficultyImg = styled.img`
	width: min(5vw, 9vh); /* 5vw = 96px, 9vh = 97.2px */
	height: min(5vw, 9vh);
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const PageTitleText = styled.h1`
	font-size: var(--font-size-xl);
	font-family: var(--font-Default-Bold);
	color: white;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const SortBar = styled.div`
	width: 94%;
	height: 4%;
	margin-top: 1%;
	margin-bottom: 1%;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const SortBtn = styled.div`
	width: auto;
	height: 90%;
	margin: 0px 0.75%;
	padding: 0px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 15px;

	&:hover {
		background-color: #7f7f7f5f;
		transition: 0.2s;
	}
`;

export const SortDiv = styled.div`
	width: auto;
	height: 80%;
	margin: 0px 0.75%;
	padding: 0px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SortText = styled.p`
	color: white;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
	text-align: center;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const QuizListTopBar = styled.div`
	width: 94%;
	height: 6%;
	margin-top: 0%;
	margin-left: 1.5%;
	margin-right: 4.5%;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const NewHrLine = styled.hr`
	width: 94%;
	height: 0.2px;
	border: 0;
	margin: 0;
	background-color: #7f7f7f3f;
`;

export const QuizContent = styled.div`
	width: 100%;
	height: 63%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0.5vw;
		height: 0.5vw;
		margin-right: 0.75vw;
		border-radius: 6px;
		background: rgba(8, 8, 12, 1);
	}
	&::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.4);
		border-radius: 6px;
	}
`;

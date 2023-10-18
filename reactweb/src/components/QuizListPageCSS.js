import styled, { css } from "styled-components";

export const Entire = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #222233;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HrLine = styled.hr`
	width: 100%;
	height: 0.2px;
	border: 0;
	background-color: #7f7f7f3f;
`;

export const Content = styled.div`
	width: 65%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const PageTitle = styled.div`
	width: 100%;
	height: 15%;
	margin-top: 0%;
	margin-bottom: 0%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
`;

export const DifficultyImg = styled.img`
	width: min(4vw, 7vh); /* 4vw = 76.8px, 7vh = 75.6px */
	height: min(4vw, 7vh);
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const PageTitleText = styled.h1`
	font-size: var(--font-size-lg);
	font-family: var(--font-Maplestory-Bold);
	color: white;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const SortBar = styled.div`
	width: 100%;
	height: 5%;
	margin-bottom: 2%;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const SortBtn = styled.div`
	width: auto;
	height: 80%;
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
	font-size: var(--font-size-sm);
	font-family: var(--font-Maplestory-Light);
	text-align: center;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const QuizListTopBar = styled.div`
	width: 95%;
	height: 5%;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: 1px solid #7f7f7f3f;
`;

export const IDText = styled.span`
	width: 20%;
	color: white;
	font-size: var(--font-size-sm);
	font-family: var(--font-Maplestory-Light);
	text-align: center;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const QuizTitleText = styled.span`
	width: 60%;
	color: white;
	font-size: var(--font-size-sm);
	font-family: var(--font-Maplestory-Light);
	text-align: center;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const SolvedAmountText = styled.span`
	width: 20%;
	color: white;
	font-size: var(--font-size-sm);
	font-family: var(--font-Maplestory-Light);
	text-align: center;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

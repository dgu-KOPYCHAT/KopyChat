import styled, { css } from "styled-components";

export const QuizPage = styled.div`
	width: 100vw;
	height: 90vh; /* 90vh = 972px */
	display: flex;
	justify-content: left;
	align-items: center;
`;

export const QuizInfo = styled.div`
	width: calc(35% - 3vw);
	height: calc(100% - 4vh);
	padding: 2vh 1vw 2vh 2vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #222333;
`;

export const QuizTitle = styled.div`
	width: auto;
	height: 100%;
	margin-left: -1vw;
	margin-right: 1vw;
	display: flex;
	justify-content: left;
	align-items: center;
`;

export const QuizDifficultyImage = styled.img`
	width: min(3vw, 5vh); /* 3vw = 57.6px, 5vh = 54px */
	height: min(3vw, 5vh);
	margin-left: -0.5vw;
	margin-right: -0.1vw;
	margin-top: 3px;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const QuizTitleText = styled.p`
	width: auto;
	color: white;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const TitleBar = styled.div`
	width: 100%;
	height: 4%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
`;

export const InfoBar = styled.div`
	width: 100%;
	height: 6%;
	margin-top: 0.5vw;
	margin-bottom: -0.5vw;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const InfoBarLeft = styled.div`
	width: auto;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
`;

export const InfoBarRight = styled.div`
	width: auto;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: right;
	align-items: center;
`;

export const Info = styled.div`
	width: auto;
	margin-right: 1vw;
	margin-right: ${(props) => props.marginR};
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const InfoText = styled.h1`
	width: auto;
	margin: 0px 7px;
	margin-left: ${(props) => props.marginL};
	font-size: var(--font-size-md);
	font-family: var(--font-Default-Light);
	color: white;
	white-space: nowrap;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const Image = styled.img`
	width: min(1vw, 2vh); /* 1vw = 19.2px, 2vh = 21.6px */
	height: min(1vw, 2vh);
	margin-right: 0.1vw; /* 0.1vw = 1.92px */
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const HrLine = styled.hr`
	width: 96%;
	height: 0.2px;
	text-align: left;
	margin-left: 0;
	border: 0;
	background-color: #7f7f7f3f;
`;

export const QuizEditor = styled.div`
	width: 65%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const EditorSetting = styled.div`
	z-index: 9999;
	padding: 5px;
	width: 100%;
	height: 6%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	background-color: #222333;
`;

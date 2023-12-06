import styled, { css } from "styled-components";

export const Entire = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #222233;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-x: hidden;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0.5vw;
		border-radius: 6px;
		background: rgba(8, 8, 12, 1);
	}
	&::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.4);
		border-radius: 6px;
	}
`;

export const Content = styled.div`
	width: 65%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const PageTitle = styled.div`
	width: 100%;
	height: 12vh;
	margin-top: 1%;
	margin-bottom: 0%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
`;

export const PageTitleText = styled.h1`
	font-size: var(--font-size-xl);
	font-family: var(--font-Default-Bold);
	color: white;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const QuizListTopBar = styled.div`
	width: 95%;
	height: 4.8vh;
	margin-top: 2%;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: 1px solid #7f7f7f3f;
`;

export const BarText = styled.span`
	width: ${(props) => props.width};
	margin-left: 0.25vw;
	margin-right: 0.25vw;
	color: white;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
	text-align: center;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const QuizContent = styled.div`
	width: 100%;
	height: auto;
	margin-bottom: 15vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	&::-webkit-scrollbar {
		width: 0.5vw;
		border-radius: 6px;
		background: rgba(8, 8, 12, 1);
	}
	&::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.4);
		border-radius: 6px;
	}
`;

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
	height: 100%;
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

export const QuizListTopBar = styled.div`
	width: 95%;
	height: 5%;
	margin-top: 2%;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: 1px solid #7f7f7f3f;
`;

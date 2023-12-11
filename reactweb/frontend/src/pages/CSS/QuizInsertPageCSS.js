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

export const PageTitle = styled.div`
	width: 100%;
	height: 15%;
	margin-top: 1vh;
	margin-bottom: 0vh;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
`;

export const Content = styled.div`
	width: 50%;
	height: auto;
	margin-top: 1vh;
	margin-bottom: 6vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const PageTitleText = styled.h1`
	font-size: var(--font-size-xl);
	font-family: var(--font-Default-Bold);
	color: white;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const InputDiv = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const ParagraphDiv = styled.div`
	width: 100%;
	height: auto;
	margin-top: 5vh;
	margin-bottom: 2vh;
`;

export const InstantBtn = styled.button`
	width: auto;
	margin: 1vh 1vw;
	padding: 1vh 3vw;
	border-radius: 10px;
	border: 1px solid #181824;
	background-color: #404068;
	&:hover {
		cursor: pointer;
		background-color: #58588d;
	}
`;

export const InstantBtnText = styled.h1`
	width: 100%;
	height: 100%;
	margin: 0px;
	font-size: 20px;
	font-family: var(--font-Default-Bold);
	color: white;
	line-height: 1.5;
	display: inline-block;
	white-space: nowrap;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

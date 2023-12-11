import styled, { css } from "styled-components";

export const Entire = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #222233;
	display: flex;
	flex-direction: column;
	align-items: center;
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
	height: 80%;
	margin-top: 1vh;
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

export const TitleInput = styled.input`
	width: 90%;
	height: 5vh;
	margin-top: 3vh;
	margin-bottom: 3vh;
	border: none;
	border-radius: 5px;
	padding-left: 20px;
	background-color: #343456;

	font-size: var(--font-size-md);
	font-family: var(--font-Default-Bold);
	color: white;
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

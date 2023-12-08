import styled, { css } from "styled-components";

export const Entire = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #222233;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TitleInput = styled.input`
	width: 60%;
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

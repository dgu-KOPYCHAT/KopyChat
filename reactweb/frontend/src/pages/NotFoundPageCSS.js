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
	width: 100%;
	height: auto;
	margin-top: 5vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const PageTitleText = styled.h1`
	font-size: var(--font-size-xl);
	font-family: var(--font-Default-Bold);
	color: white;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

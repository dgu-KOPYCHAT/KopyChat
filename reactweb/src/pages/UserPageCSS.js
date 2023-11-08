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
	width: max(70vw, min(100vw, 800px));
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-grow: 1 1 auto;
	overflow-y: auto;
`;

export const UserInfo = styled.div`
	width: 100%;
	height: 30vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #444455;
`;

export const UserNameDiv = styled.div`
	width: 100%;
	height: 30%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const ProfileImg = styled.img`
	margin-left: 1%;
	width: min(4vw, 7vh); /* 4vw = 76.8px, 7vh = 75.6px */
	height: min(4vw, 7vh);
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const UserNameText = styled.h1`
	margin-left: 2.5%;
	font-size: var(--font-size-xl);
	font-family: var(--font-Default-Bold);
	color: white;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const UserRatingDiv = styled.div`
	width: 100%;
	height: 70%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

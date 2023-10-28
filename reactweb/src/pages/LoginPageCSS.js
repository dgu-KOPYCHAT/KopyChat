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
	flex: 1 1 auto;
`;

export const LoginBtn = styled.button`
	width: 14vw;
	height: 6vh;
	margin-top: 20%;
	border: none;
	border-radius: 1vw;
	background-color: #3f3f5f;
	color: white;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

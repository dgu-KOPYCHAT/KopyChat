import styled, { css } from "styled-components";

export const TopBar = styled.div`
	width: 100vw;
	height: 7.5vh; /* 7.5vh = 81px */
	display: flex;
	align-items: center;
	/*background-color: #0f0f1f;*/
	background-color: #202029;
`;

export const LeftSide = styled.div`
	width: 70%;
	height: 100%;
	display: flex;
	align-items: center;
`;

export const RightSide = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
`;

export const Logo = styled.div`
	width: 20vw /* 20vw = 384px */
	height: 100%;
	margin-left: 10vw; /* 10vw = 192px */
    margin-right: 2vw; /* 2vw = 38.4px */
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LogoImage = styled.img`
	width: min(3vw, 5vh); /* 3vw = 57.6px, 5vh = 54px */
	height: min(3vw, 5vh);
	margin: 0px 0px 5px 10px;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const LogoText = styled.h1`
	margin: 0px 10px;
	font-size: var(--font-size-lg);
	font-family: var(--font-Maplestory-Bold);
	color: #bfbfbf;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const TopMenu = styled.div`
	width: 7vw; /* 7vw = 134.4px */
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const MenuText = styled.h1`
	font-size: var(--font-size-md);
	font-family: var(--font-Maplestory-Bold);
	color: #bfbfbf;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const SearchIconImage = styled.img`
	width: 30px;
	height: 30px;
	margin: 0px;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const LoginMenu = styled.div`
	width: 20vw; /* 20vw = 384px */
	height: 100%;
	margin-right: 5vw; /* 5vw = 96px */
	display: flex;
	justify-content: center;
	align-items: center;
`;

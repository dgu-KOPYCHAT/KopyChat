import styled, { css } from "styled-components";

export const TopBar = styled.div`
	width: 100vw;
	height: 120px;
`;

export const Logo = styled.div`
	width: 500px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LogoImage = styled.img`
	width: min(4vw, 7vh); /* 4vw = 76.8px, 7vh = 75.6px */
	height: min(4vw, 7vh);
	margin: 0px 0px 5px 10px;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const LogoText = styled.h1`
	font-size: 36px;
	font-family: var(--font-Maplestory-Bold);
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

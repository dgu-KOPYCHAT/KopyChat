import styled from "styled-components";

export const TopBar = styled.div`
	width: 100vw;
	height: 10vh; /* 10vh = 108px */
	display: flex;
	align-items: center;
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
	width: min(4vw, 7vh); /* 4vw = 76.8px, 7vh = 75.6px */
	height: min(4vw, 7vh);
	margin: 0px 0px 5px 10px;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const LogoText = styled.h1`
	margin: 0px 10px;
	color: white;
	font-size: var(--font-size-lgxl);
	font-family: var(--font-Default-Bold);
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
	font-size: var(--font-size-mdlg);
	font-family: var(--font-Default-Bold);
	color: white;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const SearchIconImage = styled.img`
	width: min(1.5vw, 3vh); /* 1.5vw = 28.8px, 3vh = 32.4px */
	height: min(1.5vw, 3vh);
	margin: 0px;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const LoginMenu = styled.div`
	width: 10vw; /* 10vw = 192px */
	height: 100%;
	margin-right: 7vw; /* 7vw = 134.4px */
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const HrLine = styled.hr`
	width: 100%;
	height: 0.2px;
	margin-top: -0.2px;
	border: 0;
	background-color: #7f7f7f3f;
`;

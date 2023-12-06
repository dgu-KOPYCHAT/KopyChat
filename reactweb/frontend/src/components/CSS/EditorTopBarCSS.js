import styled from "styled-components";

export const TopBar = styled.div`
	width: 100vw;
	height: 10vh; /* 10vh = 108px */
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

export const TopMenu = styled.div`
	width: 7vw; /* 7vw = 134.4px */
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoginMenu = styled.div`
	width: 20vw; /* 20vw = 384px */
	height: 100%;
	margin-right: 2vw; /* 2vw = 38.4px */
	display: flex;
	justify-content: center;
	align-items: center;
`;

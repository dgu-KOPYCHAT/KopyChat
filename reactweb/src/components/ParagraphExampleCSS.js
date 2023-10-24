import styled, { css } from "styled-components";
import { keyframes } from "styled-components";

export const Entire = styled.div`
	width: 100%;
	height: auto;
	margin-top: 2vh; /* 2vh = 21.6px */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const SubEntire = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
`;

export const HrLine = styled.hr`
	width: 96%;
	height: 0.2px;
	margin-top: 2vh; /* 4vh = 43.2px */
	text-align: left;
	margin-left: 0;
	border: 0;
	background-color: #7f7f7f3f;
`;

export const Image = styled.img`
	width: min(1.5vw, 2.5vh); /* 1.5vw = 28.8px, 2.5vh = 27px */
	height: min(1.5vw, 2.5vh);
	margin-left: 0.3vw; /* 0.3vw = 5.76px */
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

const fadeOutAnimation = keyframes`
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const CopyMessageDiv = styled.div`
	width: auto;
	height: auto;
	margin: 0px 10px;
	background-color: #23a559;
	border-radius: 10px;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		left: -0.4vw; // 꼬리의 위치
		top: 50%;
		transform: translateY(-50%);

		border-top: 7px solid transparent;
		border-bottom: 7px solid transparent;
		border-right: 10px solid #23a559; // 꼬리의 색상
	}

	opacity: 1;
	animation: ${fadeOutAnimation} 2s forwards;
`;

export const CopyMessageText = styled.p`
	width: auto;
	height: auto;
	margin: 3px 10px;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
	color: #181824;
	white-space: nowrap;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const Paragraph = styled.div`
	width: 45%;
	height: auto;
	margin: 0% 3vw 0% 3px;
	flex: 1 1 0;
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: center;
`;

export const ParagraphTitleDiv = styled.div`
	width: 100%;
	height: min(2vw, 3.5vh); /* 2vw = 39.2px, 4vh = 37.8px */
	margin-top: 0vh; /* 1vh = 10.8px */
	margin-bottom: 2vh; /* 2vh = 21.6px */
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const ParagraphTitleText = styled.h2`
	width: auto;
	height: auto;
	font-size: var(--font-size-mdlg);
	font-family: var(--font-Default-Bold);
	line-height: 1.5;
	display: inline-block;
	text-align: left;
	vertical-align: middle;
	color: white;
	// -webkit-user-drag: none;
	// -webkit-user-select: none;
`;

export const ParagraphContentDiv = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: center;
`;

export const ParagraphContentText = styled.textarea`
	width: 100%;
	height: auto;
	box-sizing: border-box;
	padding: 1vh 1vw; /* 1vh = 10.8px, 1vw = 19.2px */
	font-size: var(--font-size-mdlg);
	font-family: var(--font-Default-Light);
	line-height: 1.5;
	word-spacing: 0.3vw; /* 0.3vw = 5.76px */
	display: inline-block;
	background-color: #343456;
	color: white;
	text-align: left;
	vertical-align: middle;
	resize: none;
	border: 1px solid #181824;
	// -webkit-user-drag: none;
	// -webkit-user-select: none;
`;

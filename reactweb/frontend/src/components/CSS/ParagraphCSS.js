import styled from "styled-components";

export const Paragraph = styled.div`
	width: 100%;
	height: auto;
	margin-top: 1vh; /* 1vh = 10.8px */
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: center;
`;

export const HrLine = styled.hr`
	width: 96%;
	height: 0.2px;
	margin-top: -0.2px;
	text-align: left;
	margin-left: 0;
	border: 0;
	background-color: #7f7f7f3f;
`;

export const ParagraphTitleDiv = styled.div`
	width: 100%;
	height: min(2vw, 3.5vh); /* 2vw = 39.2px, 3.5vh = 37.8px */
	margin: 0.5vh 0 0.5vh 0; /* 0.5vh = 5.4px */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
`;

export const ParagraphTitleText = styled.h2`
	width: 100%;
	height: 100%;
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

export const ParagraphContentText = styled.p`
	width: 100%;
	height: auto;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
	line-height: 1.5;
	display: inline-block;
	text-align: left;
	vertical-align: middle;
	color: white;
	// -webkit-user-drag: none;
	// -webkit-user-select: none;
`;

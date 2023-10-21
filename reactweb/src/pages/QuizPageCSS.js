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
	margin-top: -0.2px;
	border: 0;
	background-color: #7f7f7f3f;
`;

export const ContentDiv = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const IndexDiv = styled.div`
	width: 20%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Content = styled.div`
	width: 60%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ExplorerDiv = styled.div`
	width: 20%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const FixedQuizInfo = styled.div`
	width: 100%;
	height: 20%;
	margin-top: 1%;
	margin-bottom: 1%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const PageTitle = styled.div`
	width: 100%;
	height: 50%;
	margin-bottom: 1%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const PageTitleLeft = styled.div`
	width: auto;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
`;

export const PageTitleRight = styled.div`
	width: auto;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: right;
	align-items: center;
`;

export const DifficultyImg = styled.img`
	width: min(4vw, 7vh); /* 4vw = 76.8px, 7vh = 75.6px */
	height: min(4vw, 7vh);
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const PageTitleText = styled.h1`
	font-size: var(--font-size-lg);
	font-family: var(--font-Default-Bold);
	color: white;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const EditorBtn = styled.div`
	width: auto;
	height: 50%;
	margin: 1vh 1vw;
	padding: 1vh 1vw;
	border-radius: 10px;
	border: 1px solid #181824;
	background-color: #343456;
`;

export const EditorBtnText = styled.h1`
	width: 100%;
	height: 100%;
	margin: 0px;
	font-size: var(--font-size-md);
	font-family: var(--font-Default-Bold);
	color: white;
	line-height: 1.5;
	display: inline-block;
	white-space: nowrap;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const InfoBar = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const InfoBarLeft = styled.div`
	width: auto;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
`;

export const InfoBarRight = styled.div`
	width: auto;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: right;
	align-items: center;
`;

export const Info = styled.div`
	width: auto;
	margin-left: 1vw; /* 1vw = 19.2px */
	margin-right: 1vw; /* 1vw = 19.2px */
	margin-right: ${(props) => props.marginRight};
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const InfoNameText = styled.h1`
	width: auto;
	margin: 0px 7.5px;
	font-size: var(--font-size-sm);
	font-family: var(--font-Default-Bold);
	color: white;
	white-space: nowrap;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const InfoText = styled.h1`
	width: auto;
	margin: 0px 7.5px;
	margin-left: ${(props) => props.marginLeft};
	font-size: var(--font-size-mdlg);
	font-family: var(--font-Default-Bold);
	color: white;
	white-space: nowrap;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const QuizContent = styled.div`
	width: 100%;
	height: 85%;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: auto;
`;

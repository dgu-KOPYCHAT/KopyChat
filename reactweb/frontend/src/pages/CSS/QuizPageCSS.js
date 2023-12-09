import styled, { css } from "styled-components";

export const Entire = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #222233;
	display: flex;
	flex-direction: column;
	align-items: center;

	overflow-x: hidden;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0.5vw;
		border-radius: 6px;
		background: rgba(8, 8, 12, 1);
	}
	&::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.4);
		border-radius: 6px;
	}
`;

export const ContentDiv = styled.div`
	width: 100%;
	height: 90vh;
	margin-bottom: 5vh;
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
	margin-top: 5vh;
	margin-bottom: 1vh;
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

export const EditorBtn = styled.div`
	width: auto;
	height: 50%;
	margin: 1vh 1vw;
	padding: 1vh 1vw;
	border-radius: 10px;
	border: 1px solid #181824;
	background-color: #404068;
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
	margin-right: ${(props) => props.marginright};
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const PostDiv = styled.div`
	width: 100%;
	height: 70%;
	margin-top: 1vh;
	margin-bottom: 1vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

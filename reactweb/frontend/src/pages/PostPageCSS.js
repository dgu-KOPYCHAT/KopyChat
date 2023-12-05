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

export const HrLine = styled.hr`
	width: 100%;
	height: 0.2px;
	margin-top: -0.2px;
	border: 0;
	background-color: #7f7f7f3f;
`;

export const VrLine = styled.hr`
	width: 0.2px;
	height: 50%;
	margin: 0 1%;
	border: 0;
	background-color: #7f7f7f3f;
`;

export const ContentDiv = styled.div`
	width: 100%;
	height: auto;
	margin-bottom: 10vh;
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
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const PostTitleDiv = styled.div`
	width: 100%;
	height: 12vh;
	margin-top: 10vh;
	margin-bottom: 1vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const PostTitleTopDiv = styled.div`
	width: 100%;
	height: 60%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const PostTitleBottomDiv = styled.div`
	width: 100%;
	height: 40%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
`;

export const PostTitleText = styled.span`
	margin: 0 1%;
	font-size: var(--font-size-xl);
	font-family: var(--font-Default-Bold);
	color: white;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const PostInfoText = styled.span`
	margin: 0 1%;
	font-size: var(--font-size-lg);
	font-family: var(--font-Default-Light);
	color: white;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const PostContent = styled.div`
	width: 100%;
	height: auto;
	margin-top: 1vh;
	margin-bottom: 1vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CommentImage = styled.img`
	width: min(1.25vw, 2.25vh); /* 1.25vw = 24px, 2.25vh = 24.3px */
	height: min(1.25vw, 2.25vh);
	margin-top: 1.5px;
	margin-right: 5px;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

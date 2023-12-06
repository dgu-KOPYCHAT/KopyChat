import styled from "styled-components";

export const Entire = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 2vh; /* 2vh = 21.6px */
	margin-bottom: 5vh; /* 5vh = 54px */
	display: flex;
	flex: 1 1 0;
	flex-direction: column;
	align-items: center;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 8px;
		height: 8px;
		margin-right: 15px;
		border-radius: 6px;
		background: rgba(8, 8, 12, 1);
	}
	&::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.4);
		border-radius: 6px;
	}
`;

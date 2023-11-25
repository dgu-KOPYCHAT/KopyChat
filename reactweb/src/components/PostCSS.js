import styled, { css } from "styled-components";

export const Entire = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex: 1 1 0;
	flex-direction: column;
	align-items: center;

	overflow-y: ${(props) =>
		props.overflow === null ? "hidden" : props.overflow};

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

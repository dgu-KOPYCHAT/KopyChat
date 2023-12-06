import styled from "styled-components";
import AceEditor from "react-ace";

export const Entire = styled.div`
	width: 100%;
	height: 100%;
`;

export const StyledAceEditor = styled(AceEditor)`
	.ace_gutter-cell {
		background: #000000;
	}
`;

import styled from "styled-components";

export const HrLine = styled.hr`
	width: 100%;
	width: ${(props) => props.width};
	height: 0.2px;
	margin-top: -0.2px;
	border: 0;
	background-color: #7f7f7f3f;
`;

export const VrLine = styled.hr`
	width: 0.2px;
	height: 50%;
	margin: 0 0.25vw; // 0.25vw = 4.8px
	border: 0;
	background-color: #7f7f7f3f;
`;

/* 
    xxl : 5vw = 96px, 9vh = 97.2px
    xl : 4vw = 76.8px, 7vh = 75.6px 
    lg : 3vw = 57.6px, 5.5vh = 59.4px 
    md : 2.25vw = 43.2px, 4vh = 43.2px 
    sm : 1.25vw = 24px, 2.25vh = 24.3px
*/

export const Image = styled.img`
	width: ${(props) =>
		props.size === "xxl"
			? "min(5vw, 9vh)"
			: props.size === "xl"
			? "min(4vw, 7vh)"
			: props.size === "lg"
			? "min(3vw, 5.5vh)"
			: props.size === "md"
			? "min(2.25vw, 4vh)"
			: "min(1.25vw, 2.25vh)"};
	height: ${(props) =>
		props.size === "xxl"
			? "min(5vw, 9vh)"
			: props.size === "xl"
			? "min(4vw, 7vh)"
			: props.size === "lg"
			? "min(3vw, 5.5vh)"
			: props.size === "md"
			? "min(2.25vw, 4vh)"
			: "min(1.25vw, 2.25vh)"};

	margin: 0px 0.5vw;

	margin-top: ${(props) => props.marginTop};
	margin-bottom: ${(props) => props.marginBottom};
	margin-left: ${(props) => props.marginLeft};
	margin-right: ${(props) => props.marginRight};

	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

/* 
    font-size
    xs, xssm, sm, smmd, md, mdlg, lg, lgxl, xl, xxl
*/

export const BoldText = styled.span`
	width: ${(props) => props.width};

	margin: 0 0.5vw;
	margin-left: ${(props) => props.marginLeft};
	margin-right: ${(props) => props.marginRight};

	font-size: var(--font-size-${(props) => props.size});
	font-family: var(--font-Default-Bold);
	color: white;
	color: ${(props) => props.color};
	text-align: center;

	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

export const LightText = styled.span`
	width: ${(props) => props.width};

	margin: 0 0.5vw;
	margin-left: ${(props) => props.marginLeft};
	margin-right: ${(props) => props.marginRight};

	font-size: var(--font-size-${(props) => props.size});
	font-family: var(--font-Default-Light);
	color: white;
	color: ${(props) => props.color};
	text-align: center;

	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

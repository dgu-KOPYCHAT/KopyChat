import React, { useState } from "react";
import styled, { css } from "styled-components";

const Entire = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	justify-content: flex-start;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

const ProgressGauge = styled.div`
	width: ${(props) => (props.current * 100) / props.max}%;
	height: 100%;
	background-color: ${(props) =>
		props.current === props.max ? "#00ff337f" : "#0033ff7f"};
`;

const ProgressText = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: ${(props) => (props.current === props.max ? "white" : "white")};
	text-align: center;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
`;

const RatingBar = (props) => {
	return (
		<Entire>
			<ProgressGauge current={props.current} max={props.max}>
				<ProgressText>
					{props.current} / {props.max}
				</ProgressText>
			</ProgressGauge>
		</Entire>
	);
};

RatingBar.defaultProps = {
	current: 0,
	max: 999,
};

export default RatingBar;

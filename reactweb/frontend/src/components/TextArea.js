import React from "react";
import styled from "styled-components";

const Entire = styled.div`
	width: 100%;
	height: 15vh;
	margin-top: 3vh;
	margin-bottom: 3vh;
	display: flex;
	flex-direction: row;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

const TitleText = styled.span`
	width: auto;
	margin-left: 1.5vw;
	margin-right: 1.5vw;
	color: white;
	font-size: var(--font-size-md);
	font-family: var(--font-Default-Bold);
	text-align: left;
	line-height: 5vh;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

const Input = styled.textarea`
	width: auto;
	height: 100%;
	flex: 1;
	border: none;
	border-radius: 1vh;
	margin-right: 1.5vw;
	padding: 2vh 1vw;
	background-color: #343456;

	font-size: var(--font-size-md);
	font-family: var(--font-Default-Bold);
	color: white;

	resize: none;
`;

function InputField(props) {
	return (
		<Entire>
			<TitleText>{props.title}</TitleText>
			<Input placeholder={props.p_placeholder} />
		</Entire>
	);
}

InputField.defaultProps = {
	title: "이름",
	p_placeholder: "입력",
};

export default InputField;

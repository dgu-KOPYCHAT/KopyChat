import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import DifficultyImage from "../images/Difficulty/prototype.png";

const Entire = styled.div`
	width: 95%;
	height: 5vh;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #7f7f7f3f;
	&:hover {
		background-color: #ffffff0f;
		transition: 0.2s;
	}
`;

const QuizTitleText = styled.span`
	width: 80%;
	margin-left: 1%;
	color: white;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
`;

const SolvedAmountText = styled.span`
	width: 20%;
	margin-right: 0.5vw;
	color: white;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
	text-align: right;
`;

function GroupCard(props) {
	return (
		<Entire>
			<Link
				to="/group"
				style={{
					textDecoration: "none",
					width: "100%",
					height: "5vh",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<QuizTitleText>{props.name}</QuizTitleText>
				<SolvedAmountText>{props.userAmount}</SolvedAmountText>
			</Link>
		</Entire>
	);
}

GroupCard.defaultProps = {
	id: 0,
	name: "그룹 이름",
	userAmount: 0, // 그룹 인원 수
};

export default GroupCard;

import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import DifficultyIcon from "../components/DifficultyIcon.js";

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

const QuizID = styled.div`
	width: 20%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const IDText = styled.span`
	width: 80%;
	margin-left: 5px;
	color: white;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
`;

const QuizTitleText = styled.span`
	width: 60%;
	margin-left: 5px;
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

function QuizCard(props) {
	return (
		<Entire>
			<Link
				to="/quiz"
				style={{
					textDecoration: "none",
					width: "100%",
					height: "5vh",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<QuizID>
					<DifficultyIcon
						difficulty={props.difficulty}
						level={props.level}
						size={"sm"}
					/>
					<IDText>{props.id}</IDText>
				</QuizID>
				<QuizTitleText>{props.name}</QuizTitleText>
				<SolvedAmountText>{props.solvedAmount}</SolvedAmountText>
			</Link>
		</Entire>
	);
}

QuizCard.defaultProps = {
	id: 0,
	name: "문제 이름",
	difficulty: "Novice",
	level: 1,
	solvedAmount: 0, // 해결한 사람 수
};

/*
    난이도 분류

    이름 / 대략적인 레벨 범위 / 설명

    Novice / 1 ~ 5 / 기초, 프로그래밍 언어의 기초적인 문법을 다룸
    Advanced / 2 ~ 7 / 기본, 전공 과목 수준의 알고리즘을 다룸
    Expert / 3 ~ 9 / 응용, 코딩 테스트 수준의 알고리즘을 다룸
    Master / 7 ~ 15 / 심화, 알고리즘 대회 수준, 전공 과목 및 코딩 테스트에서는 거의 출제되지 않음


    레벨 분류

    레벨 / 백준 기준 티어 / 설명

    1 / Bronze V ~ IV / 문법 기초
    2 / Bronze III ~ II / 단순 구현 및 수학 문제
    3 / Bronze I / 전공 하

    4 / Silver V ~ IV / 전공 중하
    5 / Silver III ~ II / 전공 중 
    6 / Silver I / 전공 중상

    7 / Gold V ~ IV / 전공 상, 코딩 테스트 중
    8 / Gold III ~ II / 코딩 테스트 중상
    9 / Gold I / 코딩 테스트 상


    레벨 10 이상의 문제부터는 코딩 테스트에서 거의 출제되지 않고, 알고리즘 대회에서 주로 다룸
    
    10 / Platinum V ~ IV
    11 / Platinum III ~ II
    12 / Platinum I

    13 / Diamond V ~ IV
    14 / Diamond III ~ II
    15 / Diamond I 이상
    
*/

export default QuizCard;

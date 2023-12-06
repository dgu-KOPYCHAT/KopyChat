import React from "react";
import styled from "styled-components";
import DifficultyNoviceImage from "../images/Difficulty/difficulty_novice_icon.png";
import DifficultyAdvancedImage from "../images/Difficulty/difficulty_advanced_icon.png";
import DifficultyExpertImage from "../images/Difficulty/difficulty_expert_icon.png";
import DifficultyMasterImage from "../images/Difficulty/difficulty_master_icon.png";

/* lg : 4vw = 76.8px, 7vh = 75.6px */
/* md : 3vw = 57.6px, 5.5vh = 59.4px */
/* sm : 2.25vw = 43.2px, 4vh = 43.2px */

const Entire = styled.div`
	width: ${(props) =>
		props.size === "lg"
			? "min(4vw, 7vh)"
			: props.size === "md"
			? "min(3vw, 5.5vh)"
			: "min(2.25vw, 4vh)"};
	height: ${(props) =>
		props.size === "lg"
			? "min(4vw, 7vh)"
			: props.size === "md"
			? "min(3vw, 5.5vh)"
			: "min(2.25vw, 4vh)"};

	margin-left: 0.5vw;
	margin-right: 0.5vw;

	position: relative;
	text-align: center;
	-webkit-user-drag: none;
	-webkit-user-select: none;

	visibility: ${(props) => (props.isHidden ? "hidden" : "visible")};
`;

const DifficultyImg = styled.img`
	width: 125%;
	height: 125%;
	transform: translate(-10%, -12.5%);
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

const DifficultyText = styled.span`
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-58%, -43%);
	color: white;
	-webkit-text-stroke: ${(props) =>
		props.size === "lg"
			? "2px black"
			: props.size === "md"
			? "1.75px black"
			: "1.5px black"};
	font-size: ${(props) =>
		props.size === "lg"
			? "var(--font-size-lgxl)"
			: props.size === "md"
			? "var(--font-size-mdlg)"
			: "var(--font-size-smmd)"};
	font-family: var(--font-Default-Bold);
`;

function getDifficultyImage(difficulty) {
	switch (difficulty) {
		case "Novice":
			return DifficultyNoviceImage;
		case "Advanced":
			return DifficultyAdvancedImage;
		case "Expert":
			return DifficultyExpertImage;
		case "Master":
			return DifficultyMasterImage;
		default:
			return DifficultyNoviceImage;
	}
}

function DifficultyIcon(props) {
	return (
		<Entire size={props.size} isHidden={props.isHidden}>
			<DifficultyImg src={getDifficultyImage(props.difficulty)} />
			<DifficultyText size={props.size}>{props.level}</DifficultyText>
		</Entire>
	);
}

DifficultyIcon.defaultProps = {
	difficulty: "Novice",
	level: 1,
	size: "md",
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

export default DifficultyIcon;

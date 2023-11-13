import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import DifficultyIcon from "./DifficultyIcon";

const minLevel = 1;
const maxLevel = 12;

const Entire = styled.div`
	width: 100%;
	height: 100%;
	margin-left: 0.5vw;
	margin-right: 0.5vw;
	border: 1px solid #7f7f7f3f;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;
	text-align: center;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

const DifficultyLines = styled.div`
	width: 75%;
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.color};
`;

const DifficultyDiv = styled.div`
	width: 100%;
	height: 20%;
	position: relative;
	margin-top: 1.5vh;
	margin-bottom: 1.5vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const DifficultyLine = styled.div`
	width: ${(props) =>
		((props.max - props.min + 1) * 100) / (maxLevel - minLevel + 1) + "%"};
	height: 1vh;
	position: absolute;
	top: 50%;
	left: ${(props) =>
		((props.min - minLevel) * 100) / (maxLevel - minLevel + 1) + "%"};
	transform: translate(0%, -50%);
	background-color: ${(props) => props.color};
`;

const LevelIconDiv = styled.div`
	width: 100%;
	height: 20%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
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

function DifficultyIconList(props) {
	let result = [];
	for (let i = minLevel; i <= maxLevel; i++) {
		if (i >= props.min && i <= props.max) {
			result.push(
				<DifficultyIcon
					key={props.difficulty + " " + i}
					difficulty={props.difficulty}
					level={i}
					size={"sm"}
				/>
			);
		} else {
			result.push(
				<DifficultyIcon
					key={props.difficulty + " " + i}
					difficulty={props.difficulty}
					level={i}
					size={"sm"}
					isHidden={true}
				/>
			);
		}
	}
	return result;
}

function DifficultyLineFun(difficulty, color, min, max) {
	let result = [];
	result.push(
		<DifficultyDiv key={difficulty + min} min={min} max={max}>
			<DifficultyLine color={color} min={min} max={max} />
			<LevelIconDiv min={min} max={max}>
				{DifficultyIconList({
					difficulty,
					min: parseInt(min, 10),
					max: parseInt(max, 10),
				})}
			</LevelIconDiv>
		</DifficultyDiv>
	);
	return result;
}

function DifficultyRangeSlider(props) {
	return (
		<Entire size={props.size}>
			<DifficultyLines>
				{/*
				<DifficultyLine color="#01A8FFBF" />
				<DifficultyLine color="#41D721BF" />
				<DifficultyLine color="#FF7300BF" />
				<DifficultyLine color="#BE0000BF" />
                */}
				{DifficultyLineFun("Novice", "#005CC3BF", "1", "5")}
				{DifficultyLineFun("Advanced", "#179717BF", "2", "7")}
				{DifficultyLineFun("Expert", "#E73E00BF", "3", "9")}
				{DifficultyLineFun("Master", "#700000BF", "7", "12")}
			</DifficultyLines>
		</Entire>
	);
}

DifficultyRangeSlider.defaultProps = {
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

export default DifficultyRangeSlider;

import React from "react";
import * as c from "./CSS/QuizListMainPageCSS.js";
import * as s from "../components/CSS/ShareAssetCSS.js";
import TopBar from "../components/TopBar.js";
import QuizListCard from "../components/QuizListCard.js";
import DifficultyIcon from "../components/DifficultyIcon.js";

const QuizListMainPage = () => {
	function QuizList() {
		let result = [];
		for (let i = 0; i < 10; i++) {
			result.push(<QuizListCard />);
		}
		return result;
	}

	return (
		<div>
			<c.Entire>
				<TopBar />
				<c.Content>
					<c.PageTitle>
						<DifficultyIcon
							difficulty={"Novice"}
							level={"1"}
							size={"lg"}
						/>
						<c.PageTitleText>문제집 목록</c.PageTitleText>
					</c.PageTitle>
					<c.SortBar>
						<c.SortDiv>
							<s.LightText size={"smmd"}>정렬 :</s.LightText>
						</c.SortDiv>
						<c.SortBtn>
							<s.LightText size={"smmd"}>레벨</s.LightText>
						</c.SortBtn>
						<c.SortBtn>
							<s.LightText size={"smmd"}>ID</s.LightText>
						</c.SortBtn>
						<c.SortBtn>
							<s.LightText size={"smmd"}>진행률</s.LightText>
						</c.SortBtn>
					</c.SortBar>
					<s.HrLine />
					<c.QuizListTopBar>
						<s.LightText size={"smmd"} width={"20%"}>
							#
						</s.LightText>
						<s.LightText size={"smmd"} width={"60%"}>
							제목
						</s.LightText>
						<s.LightText size={"smmd"} width={"20%"}>
							진행률
						</s.LightText>
					</c.QuizListTopBar>
					<c.NewHrLine />
					<c.QuizContent>{QuizList()}</c.QuizContent>
				</c.Content>
			</c.Entire>
		</div>
	);
};

export default QuizListMainPage;

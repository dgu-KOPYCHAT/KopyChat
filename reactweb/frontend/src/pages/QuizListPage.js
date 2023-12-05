import React from "react";
import * as c from "./QuizListPageCSS.js";
import * as s from "../components/ShareAssetCSS.js";
import TopBar from "../components/TopBar.js";
import QuizCard from "../components/QuizCard.js";
import DifficultyIcon from "../components/DifficultyIcon.js";

const QuizListPage = () => {
	function QuizList() {
		let result = [];
		for (let i = 0; i < 25; i++) {
			result.push(<QuizCard key={i} />);
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
						<c.PageTitleText>문제 목록</c.PageTitleText>
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
							<s.LightText size={"smmd"}>푼 사람 수</s.LightText>
						</c.SortBtn>
					</c.SortBar>
					<c.HrLine />
					<c.QuizListTopBar>
						<s.LightText size={"smmd"} width={"20%"}>
							#
						</s.LightText>
						<s.LightText size={"smmd"} width={"60%"}>
							제목
						</s.LightText>
						<s.LightText size={"smmd"} width={"20%"}>
							푼 사람 수
						</s.LightText>
					</c.QuizListTopBar>
					<c.QuizContent>{QuizList()}</c.QuizContent>
				</c.Content>
			</c.Entire>
		</div>
	);
};

export default QuizListPage;

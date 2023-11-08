import React from "react";
import { Link } from "react-router-dom";
import * as c from "./GroupListPageCSS.js";
import TopBar from "../components/TopBar.js";
import GroupCard from "../components/GroupCard.js";
import Post from "../components/Post.js";
import DifficultyImage from "../images/Difficulty/prototype.png";

const GroupListPage = () => {
	function GroupList() {
		let result = [];
		for (let i = 0; i < 5; i++) {
			result.push(<GroupCard />);
		}
		return result;
	}

	return (
		<div>
			<c.Entire>
				<TopBar />
				<c.Content>
					<c.PageTitle>
						<c.PageTitleText>그룹 목록</c.PageTitleText>
					</c.PageTitle>
					<c.QuizListTopBar>
						<c.QuizTitleText>이름</c.QuizTitleText>
						<c.SolvedAmountText>인원 수</c.SolvedAmountText>
					</c.QuizListTopBar>
					{GroupList()}
				</c.Content>
			</c.Entire>
		</div>
	);
};

export default GroupListPage;

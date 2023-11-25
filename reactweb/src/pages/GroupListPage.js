import React from "react";
import * as c from "./GroupListPageCSS.js";
import * as s from "../components/ShareAssetCSS.js";
import TopBar from "../components/TopBar.js";
import GroupCard from "../components/GroupCard.js";

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
						<s.BoldText size={"xl"}>그룹 목록</s.BoldText>
					</c.PageTitle>
					<c.QuizListTopBar>
						<s.LightText size={"smmd"} width={"80%"}>
							이름
						</s.LightText>
						<s.LightText size={"smmd"} width={"20%"}>
							인원 수
						</s.LightText>
					</c.QuizListTopBar>
					{GroupList()}
				</c.Content>
			</c.Entire>
		</div>
	);
};

export default GroupListPage;

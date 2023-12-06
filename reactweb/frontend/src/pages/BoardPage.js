import React from "react";
// import { Link } from "react-router-dom";
import * as c from "./CSS/BoardPageCSS.js";
import * as s from "../components/CSS/ShareAssetCSS.js";
import TopBar from "../components/TopBar.js";
import BottomBar from "../components/BottomBar.js";
import PostCard from "../components/PostCard.js";
import Post from "../components/Post.js";
import DifficultyIcon from "../components/DifficultyIcon.js";

const BoardPage = () => {
	function QuizList() {
		let result = [];
		for (let i = 0; i < 25; i++) {
			result.push(<PostCard key={i} />);
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
						<s.BoldText size={"xl"}>자유 게시판</s.BoldText>
					</c.PageTitle>
					<c.QuizListTopBar>
						<c.BarText width={"5%"}>좋아요</c.BarText>
						<s.VrLine />
						<c.BarText width={"5%"}>댓글</c.BarText>
						<s.VrLine />
						<c.BarText width={"40%"}>제목</c.BarText>
						<s.VrLine />
						<c.BarText width={"20%"}>작성자</c.BarText>
						<s.VrLine />
						<c.BarText width={"30%"}>작성일</c.BarText>
					</c.QuizListTopBar>
					<c.QuizContent>{QuizList()}</c.QuizContent>
				</c.Content>
				<BottomBar />
			</c.Entire>
		</div>
	);
};

export default BoardPage;

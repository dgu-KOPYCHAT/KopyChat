import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import * as c from "./CSS/BoardPageCSS.js";
import * as s from "../components/CSS/ShareAssetCSS.js";
import TopBar from "../components/TopBar.js";
import BottomBar from "../components/BottomBar.js";
import PostCard from "../components/PostCard.js";
import Post from "../components/Post.js";
import DifficultyIcon from "../components/DifficultyIcon.js";
import axios from "axios";

const BoardPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:8000/board/get");
                setPosts(response.data);
            } catch(error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchPosts();
    }, []);

    const timeToString = (date) => {
        return new Intl.DateTimeFormat('ko-KR', {
            hour: 'numeric', // 시간은 숫자로
            minute: 'numeric', // 분도 숫자로 (Corrected from 'minutes' to 'minute')
            day: 'numeric', // 날도 숫자로
            month: 'long', // 달은 글자로
            year: 'numeric', // 연도는 숫자로
            weekday: 'long', // 요일은 글자로
        }).format(new Date(date));
    };

    const QuizList = () => {
        return posts.map((item, index) => (
            <PostCard 
                key={item.id} // Added key for React list rendering
                id={item.id} 
                name={item.title} 
                writer={item.nickname} 
                createdDate={timeToString(item.createdAt)}
            />
        ));
    };


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

import React, { useState, useEffect } from "react";
import * as c from "./CSS/PostPageCSS.js";
import * as s from "../components/CSS/ShareAssetCSS.js";
import TopBar from "../components/TopBar.js";
import CommentIcon from "../images/comment_icon.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";


const PostPage = () => {
	const { id } = useParams();
	const [post, setPost] = useState([]);
	useEffect(() => {
		const fetchPost = async () => {
			try {
				axios
					.get(`http://localhost:8000/board/get/${id}`)
					.then((res) => {
						setPost(res.data);
					});
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchPost();
	}, [id]);
    const timeToString = (date) => {
        return new Intl.DateTimeFormat('ko-KR', {
            hour: 'numeric', // 시간은 숫자로
            minute: 'numeric', // 분도 숫자로 
            day: 'numeric', // 날도 숫자로
            month: 'long', // 달은 글자로
            year: 'numeric', // 연도는 숫자로
            weekday: 'long', // 요일은 글자로
        }).format(new Date(date));
    };
	return (
		<div>
			<c.Entire>
				<TopBar />
				<c.ContentDiv>
					<c.Content>
						<c.PostTitleDiv>
							<c.PostTitleTopDiv>
								<s.BoldText
									size={"xl"}
								>{`제목: ${post.title}`}</s.BoldText>
							</c.PostTitleTopDiv>
							<c.PostTitleBottomDiv>
								<s.LightText size={"lg"}>
									{post.nickname}
								</s.LightText>
								<s.VrLine />
								<s.LightText size={"lg"}>
									{post.createdAt && timeToString(post.createdAt)}
								</s.LightText>
								<s.VrLine />
								<s.LightText size={"lg"}>▲ 0</s.LightText>
								<s.VrLine />
								<s.Image
									src={CommentIcon}
									size={"sm"}
									marginright={"0px"}
								/>
								<s.LightText size={"lg"}>0</s.LightText>
							</c.PostTitleBottomDiv>
						</c.PostTitleDiv>
						<s.HrLine />
						<s.LightText>
							{ReactHtmlParser(post.content)}
						</s.LightText>
						{/* <c.PostDiv>
							<Post />
						</c.PostDiv> */}
					</c.Content>
				</c.ContentDiv>
			</c.Entire>
		</div>
	);
};

export default PostPage;

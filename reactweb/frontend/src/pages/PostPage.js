import React from "react";
import * as c from "./PostPageCSS.js";
import * as s from "../components/ShareAssetCSS.js";
import TopBar from "../components/TopBar.js";
import Post from "../components/Post.js";
import CommentIcon from "../images/comment_icon.png";

const PostPage = () => {
	return (
		<div>
			<c.Entire>
				<TopBar />
				<c.ContentDiv>
					<c.Content>
						<c.PostTitleDiv>
							<c.PostTitleTopDiv>
								<s.BoldText size={"xl"}>글 제목</s.BoldText>
							</c.PostTitleTopDiv>
							<c.PostTitleBottomDiv>
								<s.LightText size={"lg"}>글쓴이</s.LightText>
								<s.VrLine />
								<s.LightText size={"lg"}>
									2023-11-11 11:11
								</s.LightText>
								<s.VrLine />
								<s.LightText size={"lg"}>▲ 0</s.LightText>
								<s.VrLine />
								<s.Image src={CommentIcon} size={"sm"} />
								<s.LightText size={"lg"}>0</s.LightText>
							</c.PostTitleBottomDiv>
						</c.PostTitleDiv>
						<s.HrLine />
						<Post />
					</c.Content>
				</c.ContentDiv>
			</c.Entire>
		</div>
	);
};

export default PostPage;

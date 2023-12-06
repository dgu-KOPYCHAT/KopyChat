import React from "react";
import { Link } from "react-router-dom";
import * as c from "./CSS/UserPageCSS.js";
import TopBar from "../components/TopBar.js";
import ProfileImage from "../images/user_icon.png";

const UserPage = () => {
	return (
		<div>
			<c.Entire>
				<TopBar />
				<c.Content>
					<c.UserInfo>
						<c.UserNameDiv>
							<c.ProfileImg src={ProfileImage} />
							<c.UserNameText>유저 이름</c.UserNameText>
						</c.UserNameDiv>
						<c.UserRatingDiv></c.UserRatingDiv>
					</c.UserInfo>
				</c.Content>
			</c.Entire>
		</div>
	);
};

export default UserPage;

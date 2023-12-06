import React from "react";
import { Link } from "react-router-dom";
import * as c from "./CSS/NotFoundPageCSS.js";
import TopBar from "../components/TopBar.js";

const MainPage = () => {
	return (
		<div>
			<c.Entire>
				<TopBar />
				<c.Content>
					<c.PageTitleText>404 Not Found</c.PageTitleText>
					<c.PageTitleText>
						페이지를 찾을 수 없습니다.
					</c.PageTitleText>
				</c.Content>
			</c.Entire>
		</div>
	);
};

export default MainPage;

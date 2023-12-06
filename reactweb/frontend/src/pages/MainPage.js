import React from "react";
import * as c from "./CSS/MainPageCSS.js";
import TopBar from "../components/TopBar.js";

const MainPage = () => {
	return (
		<div>
			<c.Entire>
				<TopBar />
			</c.Entire>
		</div>
	);
};

export default MainPage;

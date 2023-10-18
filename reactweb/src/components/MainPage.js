import React from "react";
import { Link } from "react-router-dom";
import * as c from "./MainPageCSS.js";
import TopBar from "./TopBar";

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

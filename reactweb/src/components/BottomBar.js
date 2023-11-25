import React from "react";
import { Link } from "react-router-dom";
import * as c from "./BottomBarCSS.js";

const BottomBar = () => {
	return (
		<div>
			<c.HrLine />
			<c.BottomBar></c.BottomBar>
		</div>
	);
};

export default BottomBar;

import React from "react";
import * as c from "./CSS/ParagraphCSS.js";

const Paragraph = (props) => {
	return (
		<c.Paragraph>
			<c.ParagraphTitleDiv>
				<c.ParagraphTitleText>{props.title}</c.ParagraphTitleText>
			</c.ParagraphTitleDiv>
			<c.ParagraphContentDiv>
				<c.ParagraphContentText>{props.content}</c.ParagraphContentText>
			</c.ParagraphContentDiv>
			<c.HrLine />
		</c.Paragraph>
	);
};

export default Paragraph;

import React from "react";
import * as c from "./CSS/PostCSS.js";
import Paragraph from "./Paragraph.js";
import ParagraphExample from "./ParagraphExample.js";

const Post = (props) => {
	return (
		<c.Entire>
			<Paragraph
				title={"문제 설명"}
				content={
					props.quiz.explain
				}
			/>
			<Paragraph
				title={"제한 사항"}
				content={props.quiz.limitation}
			/>
			<Paragraph title={"입력"} content={props.quiz.input} />
			<Paragraph title={"출력"} content={props.quiz.output} />

			<ParagraphExample contentInput={props.quiz.test_input1} contentOutput={props.quiz.test_output1} />
			<ParagraphExample contentInput={props.quiz.test_input2} contentOutput={props.quiz.test_output2} />
			<ParagraphExample contentInput={props.quiz.test_input3} contentOutput={props.quiz.test_output3} />
		</c.Entire>
	);
};

export default Post;

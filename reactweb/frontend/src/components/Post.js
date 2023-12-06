import React from "react";
import * as c from "./CSS/PostCSS.js";
import Paragraph from "./Paragraph.js";
import ParagraphExample from "./ParagraphExample.js";

const Post = () => {
	return (
		<c.Entire>
			<Paragraph
				title={"문제 설명"}
				content={
					"int 범위의 정수 A와 B가 입력될 때, A + B의 값을 출력하시오."
				}
			/>
			<Paragraph
				title={"제한 사항"}
				content={"-10,000 ≤ A, B ≤ 10,000"}
			/>
			<Paragraph title={"입력"} content={"첫째 줄에 A와 B가 주어진다."} />
			<Paragraph title={"출력"} content={"첫째 줄에 A + B를 출력한다."} />

			<ParagraphExample contentInput={"1 2"} contentOutput={"3"} />
			<ParagraphExample contentInput={"3 4"} contentOutput={"7"} />
			<ParagraphExample contentInput={"-11 6"} contentOutput={"-5"} />
		</c.Entire>
	);
};

export default Post;

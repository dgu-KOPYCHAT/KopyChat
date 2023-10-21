import React from "react";
import * as c from "./ParagraphExampleCSS.js";

const ParagraphExample = (props) => {
	return (
		<c.Entire>
			<c.SubEntire>
				<c.Paragraph>
					<c.ParagraphTitleDiv>
						<c.ParagraphTitleText>예제 입력</c.ParagraphTitleText>
					</c.ParagraphTitleDiv>
					<c.ParagraphContentDiv>
						<c.ParagraphContentText disabled={"true"}>
							{props.contentInput}
						</c.ParagraphContentText>
					</c.ParagraphContentDiv>
				</c.Paragraph>
				<c.Paragraph>
					<c.ParagraphTitleDiv>
						<c.ParagraphTitleText>예제 출력</c.ParagraphTitleText>
					</c.ParagraphTitleDiv>
					<c.ParagraphContentDiv>
						<c.ParagraphContentText disabled={"true"}>
							{props.contentOutput}
						</c.ParagraphContentText>
					</c.ParagraphContentDiv>
				</c.Paragraph>
			</c.SubEntire>
			<c.HrLine />
		</c.Entire>
	);
};

export default ParagraphExample;

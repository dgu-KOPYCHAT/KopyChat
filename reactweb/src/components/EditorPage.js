import React from "react";
import TopBar from "./TopBar";
import EditorTopBar from "./EditorTopBar";
import Editor from "./Editor";
import * as c from "./EditorPageCSS.js";
import DifficultyImage from "../images/Difficulty/prototype.png";

const EditorPage = () => {
	return (
		<div>
			<EditorTopBar />
			<c.InfoBar>
				<c.QuizTitle>
					<c.QuizDifficultyImage src={DifficultyImage} />
					<c.QuizTitleText>문제 이름</c.QuizTitleText>
				</c.QuizTitle>
			</c.InfoBar>
			<c.QuizPage>
				<c.QuizInfo>
					<c.QuizText>
						문제 설명 <br />
						<br />
						int 범위의 정수 A와 B가 입력될 때, A + B의 값을
						출력하시오.
						<br />
						<br />
						제한 사항
						<br />
						<br />
						-10,000 ≤ A, B ≤ 10,000
						<br />
						<br />
						입력
						<br />
						<br />
						첫째 줄에 A와 B가 주어진다.
						<br />
						<br />
						출력
						<br />
						<br />
						첫째 줄에 A + B를 출력한다.
					</c.QuizText>
				</c.QuizInfo>
				<c.QuizEditor>
					<Editor />
				</c.QuizEditor>
			</c.QuizPage>
		</div>
	);
};

export default EditorPage;

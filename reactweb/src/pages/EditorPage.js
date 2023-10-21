import React from "react";
import TopBar from "../components/TopBar";
import EditorTopBar from "../components/EditorTopBar";
import Editor from "../components/Editor.js";
import Post from "../components/Post.js";
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
					<Post />
				</c.QuizInfo>
				<c.QuizEditor>
					<Editor />
				</c.QuizEditor>
			</c.QuizPage>
		</div>
	);
};

export default EditorPage;

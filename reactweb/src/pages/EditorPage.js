import React from "react";
import TopBar from "../components/TopBar";
import EditorTopBar from "../components/EditorTopBar";
import Editor from "../components/Editor.js";
import Post from "../components/Post.js";
import * as c from "./EditorPageCSS.js";
import DifficultyImage from "../images/Difficulty/prototype.png";
import ClockImage from "../images/clock_icon.png";
import MemoryImage from "../images/memory_icon.png";
import FlagImage from "../images/flag_icon.png";

const EditorPage = () => {
	return (
		<div>
			<EditorTopBar />
			<c.QuizPage>
				<c.QuizInfo>
					<c.TitleBar>
						<c.QuizTitle>
							<c.QuizDifficultyImage src={DifficultyImage} />
							<c.QuizTitleText>문제 이름</c.QuizTitleText>
						</c.QuizTitle>
					</c.TitleBar>
					<c.InfoBar>
						<c.InfoBarLeft>
							<c.Info>
								<c.Image src={ClockImage} />
								<c.InfoText>1초</c.InfoText>
							</c.Info>
							<c.Info>
								<c.Image src={MemoryImage} />
								<c.InfoText>128MB</c.InfoText>
							</c.Info>
						</c.InfoBarLeft>
						<c.InfoBarRight>
							<c.Info marginRight={"1vw"}>
								<c.Image src={FlagImage} />
								<c.InfoText>1234 / 5678</c.InfoText>
							</c.Info>
						</c.InfoBarRight>
					</c.InfoBar>
					<c.HrLine />
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

import React from "react";
import TopBar from "../components/TopBar";
import EditorTopBar from "../components/EditorTopBar";
import Editor from "../components/Editor.js";
import Post from "../components/Post.js";
import * as c from "./EditorPageCSS.js";
import * as s from "../components/ShareAssetCSS.js";
import DifficultyIcon from "../components/DifficultyIcon.js";
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
							<DifficultyIcon
								difficulty={"Novice"}
								level={"1"}
								size={"sm"}
							/>
							<s.LightText size={"smmd"}>문제 이름</s.LightText>
						</c.QuizTitle>
					</c.TitleBar>
					<c.InfoBar>
						<c.InfoBarLeft>
							<c.Info>
								<c.Icon src={ClockImage} />
								<c.InfoText>1초</c.InfoText>
							</c.Info>
							<c.Info>
								<c.Icon src={MemoryImage} />
								<c.InfoText>128MB</c.InfoText>
							</c.Info>
						</c.InfoBarLeft>
						<c.InfoBarRight>
							<c.Info props={{ marginR: "1vw" }}>
								<c.Icon src={FlagImage} />
								<c.InfoText>1234 / 5678</c.InfoText>
							</c.Info>
						</c.InfoBarRight>
					</c.InfoBar>
					<s.HrLine />
					<c.PostDiv>
						<Post overflow={"auto"} />
					</c.PostDiv>
				</c.QuizInfo>
				<c.QuizEditor>
					<c.EditorSetting></c.EditorSetting>
					<Editor />
				</c.QuizEditor>
			</c.QuizPage>
		</div>
	);
};

export default EditorPage;

import React, { useState } from "react";
import TopBar from "../components/TopBar";
import EditorTopBar from "../components/EditorTopBar";
import Editor from "../components/Editor.js";
import Post from "../components/Post.js";
import * as c from "./EditorPageCSS.js";
import DifficultyIcon from "../components/DifficultyIcon.js";
import ClockImage from "../images/clock_icon.png";
import MemoryImage from "../images/memory_icon.png";
import FlagImage from "../images/flag_icon.png";
import ThemeSelectBox from "../components/ThemeSelectBox.js";

const EditorPage = () => {
	const [Selected, setSelected] = useState("monokai");

	const handleSelect = (selected) => {
		console.log(`arrived ${selected}`);
		setSelected(selected);
	}

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
							<c.Info props={{ marginR: "1vw" }}>
								<c.Image src={FlagImage} />
								<c.InfoText>1234 / 5678</c.InfoText>
							</c.Info>
						</c.InfoBarRight>
					</c.InfoBar>
					<c.HrLine />
					<Post />
				</c.QuizInfo>
				<c.QuizEditor>
					<c.EditorSetting>
						<ThemeSelectBox onSelect={handleSelect}/>
					</c.EditorSetting>
					<Editor theme={Selected}/>
				</c.QuizEditor>
			</c.QuizPage>
		</div>
	);
};

export default EditorPage;

import React, { useState } from "react";
import TopBar from "../components/TopBar";
import EditorTopBar from "../components/EditorTopBar";
import Editor from "../components/Editor.js";
import EditorResult from "../components/EditorResult.js";
import Post from "../components/Post.js";
import * as c from "./CSS/EditorPageCSS.js";
import DifficultyIcon from "../components/DifficultyIcon.js";
import ClockImage from "../images/clock_icon.png";
import MemoryImage from "../images/memory_icon.png";
import FlagImage from "../images/flag_icon.png";
import ThemeSelectBox from "../components/ThemeSelectBox.js";

const EditorPage = () => {
	const [Selected, setSelected] = useState("monokai");
	const [Result, setResult] = useState("");
	const [Code, setCode] = useState("");

	const handleSelect = (theme) => {
		setSelected(theme);
	}

	const handleCodeChange = (newcode) => {
		setResult(newcode);
		setCode(newcode);
	}

	const InstantJudge = async () => {
		setResult("~~");
		const code = "";
		fetch('http://localhost:8000/compile',{
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: {Code},
            })
            .then(res => res.text())
            .then(data => {setResult("resu");})
            .catch(err => {console.error("Error : ", err);});
	};

	return (
		<div>
			<c.Entire>
				<TopBar />
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
							<ThemeSelectBox onSelect={handleSelect} />
							<c.InstantBtn onclick={InstantJudge}>
								<c.InstantBtnText>
									제출 →
								</c.InstantBtnText>
							</c.InstantBtn>
						</c.EditorSetting>
						<Editor theme={Selected} onChange={handleCodeChange} />
						<EditorResult result={Result} />
					</c.QuizEditor>
				</c.QuizPage>
			</c.Entire>
		</div>
	);
};

export default EditorPage;

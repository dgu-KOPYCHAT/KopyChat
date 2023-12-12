import React, { useState, useRef, useParams, useEffect } from "react";
import TopBar from "../components/TopBar";
import Editor from "../components/Editor.js";
import EditorResult from "../components/EditorResult.js";
import * as c from "./CSS/EditorPageCSS.js";
import styled from "styled-components";
import DifficultyIcon from "../components/DifficultyIcon.js";
import ClockImage from "../images/clock_icon.png";
import MemoryImage from "../images/memory_icon.png";
import FlagImage from "../images/flag_icon.png";
import ThemeSelectBox from "../components/ThemeSelectBox.js";

const ExpandedEditor = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IdleEditorPage = () => {
    let exCode = 'public class Main\n{\n    static void printGreetings(String name)\n    {\n        System.out.println("Hello, " + name + "!");\n    }\n\n    public static void main(String[] args)\n    {\n        printGreetings("KopyChat");\n    }\n}\n';

	const [Selected, setSelected] = useState("monokai");
	const [Result, setResult] = useState("");
	const [Code, setCode] = useState(exCode);

	const handleSelect = (theme) => {
		setSelected(theme);
	}

	const handleCodeChange = (newcode) => {
		setCode(newcode);
	}

	const resultRef = useRef(null);

	const InstantJudge = () => {
		if(resultRef.current) {
			resultRef.current.setExpand();
		}
		setResult("컴파일 중입니다...");
		fetch('http://localhost:8080/compile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: Code,
            })
            .then(res => res.text())
            .then(data => {setResult(data)})
            .catch(err => {setResult(err)});
	};

	return (
		<div>
			<c.Entire>
				<TopBar />
				<c.QuizPage>
					{/* <c.QuizInfo>
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
						<Post quiz={quiz}/>
					</c.QuizInfo> */}
					<ExpandedEditor>
						<c.EditorSetting>
							<ThemeSelectBox onSelect={handleSelect} />
							<c.InstantBtn onClick={InstantJudge}>
								<c.InstantBtnText>
									제출 →
								</c.InstantBtnText>
							</c.InstantBtn>
						</c.EditorSetting>
						<Editor theme={Selected} onChange={handleCodeChange} defaultCode={Code}/>
						<EditorResult result={Result} ref={resultRef} />
					</ExpandedEditor>
				</c.QuizPage>
			</c.Entire>
		</div>
	);
};

export default IdleEditorPage;

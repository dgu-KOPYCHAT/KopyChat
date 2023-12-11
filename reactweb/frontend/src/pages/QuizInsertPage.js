import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as c from "./CSS/QuizInsertPageCSS.js";
import * as s from "../components/CSS/ShareAssetCSS.js";
import InputField from "../components/InputField.js";
import TextArea from "../components/TextArea.js";
import TopBar from "../components/TopBar.js";
//편집기와 백엔드
import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import Axios from "axios";

const QuizInsertPage = () => {
	const [QuizCont, setQuizCont] = useState({
		num: 0,
		nickname: "",
		title: "",
		explain: "",
		limit_time: "",
		limit_memory: "",
		input: "",
		output: "",
		test_input1: "",
		test_input2: "",
		test_input3: "",
		test_output1: "",
		test_output2: "",
		test_output3: "",
	});

	const insertQuiz = () => {
		Axios.post("http://localhost:8000/quiz/insert", {
			num: QuizCont.num,
			nickname: QuizCont.nickname,
			title: QuizCont.title,
			explain: QuizCont.explain,
			limit_time: QuizCont.limit_time,
			limit_memory: QuizCont.limit_memory,
			input: QuizCont.input,
			output: QuizCont.output,
			test_input1: QuizCont.test_input1,
			test_input2: QuizCont.test_input2,
			test_input3: QuizCont.test_input3,
			test_output1: QuizCont.test_output1,
			test_output2: QuizCont.test_output2,
			test_output3: QuizCont.test_output3,
		}).then(() => {
			alert("문제 게시 완료!");
			Navigate("/quiz");
		});
	};

	const getValue = (e) => {
		const { name, value } = e.target;
		setQuizCont({
			...QuizCont,
			[name]: value,
		});
	};

	function TestCaseInputList(amount) {
		if (amount < 1) {
			amount = 1;
		}
		if (amount > 100) {
			amount = 100;
		}

		let result = [];
		for (let i = 1; i <= amount; i++) {
			result.push(
				<div>
					<c.ParagraphDiv>
						<s.BoldText size={"lg"}>
							테스트 케이스 #{i} 입출력
						</s.BoldText>
					</c.ParagraphDiv>

					<c.InputDiv>
						<TextArea
							onChange={getValue}
							name="input"
							title="입력"
							p_placeholder=""
						/>
						<TextArea
							onChange={getValue}
							name="output"
							title="출력"
							p_placeholder=""
						/>
					</c.InputDiv>

					<s.EmptyDiv margintop="5vh" />
					<s.HrLine />
				</div>
			);
		}
		return result;
	}

	return (
		<c.Entire>
			<TopBar /> {/* This line renders the TopBar */}
			<c.Content>
				<c.PageTitle>
					<c.PageTitleText>문제 작성</c.PageTitleText>
				</c.PageTitle>

				<div className="form-wrapper">
					<InputField
						p_type="text"
						onChange={getValue}
						name="title"
						title="문제 제목"
						placeholder="제목"
					/>

					<s.HrLine />
					<c.ParagraphDiv>
						<s.BoldText size={"lg"}>문제 설명</s.BoldText>
					</c.ParagraphDiv>

					<s.EmptyDiv margintop="1vh" />

					<CKEditor
						editor={ClassicEditor}
						data=""
						onChange={(event, editor) => {
							const data = editor.getData();
							console.log({ event, editor, data });
							setQuizCont({
								...QuizCont,
								explain: data,
							});
						}}
						onBlur={(event, editor) => {
							console.log("Blur.", editor);
						}}
						onFocus={(event, editor) => {
							console.log("Focus.", editor);
						}}
					/>

					<s.EmptyDiv margintop="6vh" />
					<s.HrLine />
					<c.ParagraphDiv>
						<s.BoldText size={"lg"}>제한 사항</s.BoldText>
					</c.ParagraphDiv>

					<c.InputDiv>
						<InputField
							p_type="number"
							p_min="0.05"
							p_max="10"
							p_step="0.05"
							onChange={getValue}
							name="limit_time"
							title="실행 시간 제한 (초)"
							p_placeholder="0.05초 단위, 최대 10초"
						/>
						<InputField
							p_type="number"
							p_min="8"
							p_max="1024"
							p_step="8"
							onChange={getValue}
							name="limit_memory"
							title="메모리 제한 (MB)"
							p_placeholder="8MB 단위, 최대 1024MB"
						/>
					</c.InputDiv>

					<s.EmptyDiv />
					<s.HrLine />
					<c.ParagraphDiv>
						<s.BoldText size={"lg"}>예제 입출력</s.BoldText>
					</c.ParagraphDiv>

					<c.InputDiv>
						<TextArea
							onChange={getValue}
							name="input"
							title="입력"
							p_placeholder=""
						/>
						<TextArea
							onChange={getValue}
							name="output"
							title="출력"
							p_placeholder=""
						/>
					</c.InputDiv>

					<s.EmptyDiv margintop="5vh" />
					<s.HrLine />

					{TestCaseInputList(3)}
				</div>

				<c.InstantBtn>
					<c.InstantBtnText onClick={insertQuiz}>
						작성
					</c.InstantBtnText>
				</c.InstantBtn>
			</c.Content>
		</c.Entire>
	);
};

export default QuizInsertPage;

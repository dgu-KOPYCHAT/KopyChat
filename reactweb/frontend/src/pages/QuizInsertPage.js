import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as c from "./QuizInsertPageCSS.js";
import TopBar from "../components/TopBar.js";
import GroupCard from "../components/GroupCard.js";
import Post from "../components/Post.js";
import DifficultyImage from "../images/Difficulty/prototype.png";
//편집기와 백엔드
import { useState, useEffect } from 'react';
import "./Board.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import Axios from 'axios';

const QuizInsertPage = () => {

	const [QuizCont, setQuizCont] = useState({
		num: 0,
		nickname: "",
		title: "",
		explain: "",
		limitation: "",
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
		Axios.post('http://localhost:8000/quiz/insert', {
			num: QuizCont.num,
			nickname: QuizCont.nickname,
			title: QuizCont.title,
			explain: QuizCont.explain,
			limitation: QuizCont.limitation,
			input: QuizCont.input,
			output: QuizCont.output,
			test_input1: QuizCont.test_input1,
			test_input2: QuizCont.test_input2,
			test_input3: QuizCont.test_input3,
			test_output1: QuizCont.test_output1,
			test_output2: QuizCont.test_output2,
			test_output3: QuizCont.test_output3,
		}).then(() => {
			alert('문제 게시 완료!');
			Navigate("/quiz");
		})
	};

	// const getValue = e => {
	// 	const { name, value } = e.target;
	// 	setMovieContent({
	// 		...movieContent,
	// 		[name]: value
	// 	})
	// };

	return (
		<div>
			<c.Entire>
				<TopBar />
				<c.Content>
					<c.PageTitle>
						<c.PageTitleText>문제 작성</c.PageTitleText>
					</c.PageTitle>
					<c.QuizListTopBar>
						<c.QuizTitleText>이름</c.QuizTitleText>
						<c.SolvedAmountText>인원 수</c.SolvedAmountText>
					</c.QuizListTopBar>
					<div className='form-wrapper'>
						<input className="title-input"
							type='text'
							placeholder='제목'
							// onChange={getValue}
							name='title'
						/>
						<CKEditor
							editor={ClassicEditor}
							data=""
							onChange={(event, editor) => {
								const data = editor.getData();
								console.log({ event, editor, data });
								setQuizCont({
									...QuizCont,
									explain: data
								})
							}}
							onBlur={(event, editor) => {
								console.log('Blur.', editor);
							}}
							onFocus={(event, editor) => {
								console.log('Focus.', editor);
							}}
						/>
					</div>
					<button
						className="submit-button"
						onClick={insertQuiz}
					>문제 등록</button>
				</c.Content>
			</c.Entire>
		</div >
	);
};

export default QuizInsertPage;

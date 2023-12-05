import React from "react";
import { Link } from "react-router-dom";
import * as c from "./GroupListPageCSS.js";
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

const GroupListPage = () => {

	const insertQuiz = () => {
		Axios.post('http://localhost:8000/api/quiz/insert', {
			title: movieContent.title,
			content: movieContent.content
		}).then(() => {
			alert('등록 완료!');
			window.location.reload(false);
		})
	};

	const getValue = e => {
		const { name, value } = e.target;
		setMovieContent({
		  ...movieContent,
		  [name]: value
		})
	  };

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
					{<p>내용</p>}
				</c.Content>
			</c.Entire>
		</div>
	);
};

export default GroupListPage;

import { React, useState, useEffect } from "react";
import TopBar from "../components/TopBar.js";

//아래는 편집기와 백엔드
import "./CSS/Board.css";
import * as c from "./CSS/BoardCSS.js";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import ReactHtmlParser from "react-html-parser";
import Axios from "axios";

function Board() {
	const [movieContent, setMovieContent] = useState({
		title: "",
		content: "",
	});

	const [viewContent, setViewContent] = useState([]);

	useEffect(() => {
		Axios.get("http://localhost:8000/board/get").then((response) => {
			setViewContent(response.data);
		});
	}, [viewContent]);

	const submitReview = () => {
		Axios.post("http://localhost:8000/board/insert", {
			title: movieContent.title,
			content: movieContent.content,
		}).then(() => {
			alert("등록 완료!");
			window.location.reload(false);
		});
	};

	// const deleteReview = (elementId) => {
	// 	Axios.delete(
	// 		`http://localhost:8000/board/delete/${elementId}`,
	// 		{}
	// 	).then(() => {
	// 		alert("삭제 완료!");
	// 	});
	// };

	const getValue = (e) => {
		const { name, value } = e.target;
		setMovieContent({
			...movieContent,
			[name]: value,
		});
	};

	return (
		<c.Entire>
			<div className="App">
				<TopBar /> {/* This line renders the TopBar */}
				<h1>Movie Review</h1>
				<div className="form-wrapper">
					<input
						className="title-input"
						type="text"
						placeholder="제목"
						onChange={getValue}
						name="title"
					/>
					<CKEditor
						editor={ClassicEditor}
						data=""
						onReady={(editor) => {
							// You can store the "editor" and use when it is needed.
							console.log("Editor is ready to use!", editor);
						}}
						onChange={(event, editor) => {
							const data = editor.getData();
							console.log({ event, editor, data });
							setMovieContent({
								...movieContent,
								content: data,
							});
						}}
						onBlur={(event, editor) => {
							console.log("Blur.", editor);
						}}
						onFocus={(event, editor) => {
							console.log("Focus.", editor);
						}}
					/>
				</div>
				<button className="submit-button" onClick={submitReview}>
					입력
				</button>
			</div>
		</c.Entire>
	);
}

export default Board;

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

	/* 게시판 불러오는 코드 (딜레이 없이 계속 불러오므로 주의)
	useEffect(() => {
		Axios.get("http://localhost:8000/board/get").then((response) => {
			setViewContent(response.data);
		});
	}, [viewContent]);
	*/

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
			<TopBar /> {/* This line renders the TopBar */}
			<div className="form-wrapper">
				<c.TitleInput
					type="text"
					placeholder="제목"
					onChange={getValue}
					name="title"
				/>
				<div
					style={{
						color: "white",
						marginBottom: "3vh",
					}}
				>
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
						config={{
							// 에디터 구성 옵션
							fontFamily: {
								options: [
									"Maplestory Light, sans-serif",
									"Maplestory Bold, sans-serif",
								],
								value: "Maplestory Light, sans-serif", // 초기 폰트를 여기에 지정합니다.
							},
						}}
					/>
				</div>
			</div>
			<c.InstantBtn>
				<c.InstantBtnText onClick={submitReview}>작성</c.InstantBtnText>
			</c.InstantBtn>
		</c.Entire>
	);
}

export default Board;

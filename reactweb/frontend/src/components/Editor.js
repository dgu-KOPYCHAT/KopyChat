import React from "react";
import AceEditor from "react-ace";
import { useEffect, useRef } from "react";
import * as c from "./EditorCSS.js";
import styled from "styled-components";
// import "./Editor.css";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-solarized_dark";

const javaFilePath = process.env.PUBLIC_URL + "example.java";
let example = "";

fetch(javaFilePath)
	.then((response) => response.text())
	.then((data) => {
		example = data;
		console.log(data);
	})
	.catch((error) => {
		console.error("Cannot load java example.", error);
	});

const Editor = () => {
	const editorRef = useRef(null);

	useEffect(() => {
		// AceEditor가 마운트된 이후에 resize 메서드를 호출
		if (editorRef.current) {
			editorRef.current.editor.resize();
		}
	}, []);

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<c.Entire>
				<AceEditor
					placeholder="Java 코드를 작성해 주세요."
					mode="java"
					theme="monokai"
					name="my-editor"
					fontSize={18}
					value={example}
					style={{
						width: "100%",
						height: "100%",
						backgroundColor: "#181824",
					}}
					ref={editorRef}
				/>
			</c.Entire>
		</div>
	);
};

export default Editor;

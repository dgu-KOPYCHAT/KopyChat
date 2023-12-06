import React from "react";
import AceEditor from "react-ace";
import { useEffect, useRef, useState } from "react";
import * as c from "./CSS/EditorCSS.js";
// import "./Editor.css";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-terminal";

const Editor = (props) => {
	const editorRef = useRef(null);

	useEffect(() => {
		if (editorRef.current) {
			editorRef.current.editor.resize();
		}
	}, []);

	const handleChange = (val) => {
		props.onChange(val);
	}

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<c.Entire>
				<AceEditor
					placeholder="java로 main을 포함한 코드 작성"
					mode="java"
					theme={props.theme}
					name="my-editor"
					fontSize={24}
					onChange={handleChange}
					style={{
						width: "100%",
						height: "100%",
					}}
					ref={editorRef}
					showPrintMargin={false}
				/>
			</c.Entire>
		</div>
	);
};

export default Editor;

import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai'; 

const javaFilePath = process.env.PUBLIC_URL + 'example.java';
let example = "";

fetch(javaFilePath)
  .then(response => response.text())
  .then(data => {
    example = data;
    console.log(data);
  })
  .catch(error => {
    console.error('Cannot load java example.', error);
  });


const EditorPage = () => {
  return (
    <div>
      <h1>Editor Page</h1>
      <AceEditor
        placeholder='Java 코드를 작성해 주세요.'
        mode="java"
        theme="monokai"
        name="my-editor"
        fontSize={18}
        value={example}
      />
    </div>
  );
};

export default EditorPage;
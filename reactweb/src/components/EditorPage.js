import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai'; 

const EditorPage = () => {
  return (
    <div>
      <h1>Editor Page</h1>
      <AceEditor
      mode="javascript" // 에디터 모드 설정 (예: JavaScript)
      theme="monokai" // 테마 설정 (예: Monokai)
      name="my-editor"
      fontSize={14}
      value={'// 에디터 내용'}
      onChange={newValue => {
        // 에디터 내용이 변경될 때 실행되는 콜백
        console.log(newValue);
      }}
    />
    </div>
  );
};

export default EditorPage;
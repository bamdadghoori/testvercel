import React,{useState} from "react";
import dynamic from "next/dynamic";
import { EditorState,ContentState, convertFromHTML  } from 'draft-js';

import {stateToHTML} from 'draft-js-export-html';
import QuillToolbar, { modules, formats } from '../../components/editToobar'
//@ts-ignore
import ReactQuill from 'react-quill';





const CustomEditor = ({
  data,
  setCkEditorDataToFullText,
}: {
  setCkEditorDataToFullText: (...args: any[]) => void;
  data: string;
}) => {
 
console.log(data)

  return (
    <>
    
      <QuillToolbar />
      <ReactQuill
        theme="snow"
        value={data}
         onChange={(e:any)=>{console.log(e);setCkEditorDataToFullText(e)}}
       
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
      
    {/* <ReactQuill theme="snow"
    
  /> */}
    {/* <Editor
    //@ts-ignore
  initialEditorState={editorState}

  // defaultContentState={contentState}
  // onEditorStateChange={()=>{console.log(editorState.getCurrentContent());setContentState(editorState);setCkEditorDataToFullText(editorState.getCurrentContent().getPlainText())}}
 onEditorStateChange={()=>{console.log(editorState.target);onEditorStateChange;setCkEditorDataToFullText(editorState.getCurrentContent().getPlainText())}}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"

//   onEditorStateChange={newState => {
//     setOnEditorStateChange(newState)
//     setContent(draftToHtml(convertToRaw(newState.getCurrentContent())))
// }}
/> */}
      {/* <CKEditor
      fontColor={true}
      // config={{ toolbar: [ 'bold', 'italic','colors' ]}
      //  }
        editor={Editor}
        data={data}
        onReady={(editor: any) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setCkEditorDataToFullText(data);
        }}

      /> */}
    </>
  );
};

// const CustomButton = () => <span className="octicon octicon-star" />;
// const CustomToolbar = () => (
//   <div id="toolbar">
//     <select
//       className="ql-header"
//       defaultValue={''}
//       onChange={(e) => e.persist()}
//     >
//       <option value="1"></option>
//       <option value="2"></option>
//       <option selected></option>
//     </select>
//     <button className="ql-bold"></button>
//     <button className="ql-italic"></button>
//     <select className="ql-color">
//       <option value="red"></option>
//       <option value="green"></option>
//       <option value="blue"></option>
//       <option value="orange"></option>
//       <option value="violet"></option>
//       <option value="#d0d1d2"></option>
//       <option selected></option>
//     </select>
//     <button className="ql-insertStar">
//       <CustomButton />
//     </button>
//   </div>
// );
export default CustomEditor;


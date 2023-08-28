import React, { useState } from "react";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const CreatePost = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = (value) => {
    setContent(value);
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      <Editor value={content} onChange={handleEditorChange} />
      {/* Additional form elements and submit logic can be added here */}
    </div>
  );
};

export default CreatePost;

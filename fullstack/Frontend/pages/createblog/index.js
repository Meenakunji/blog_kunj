import { useEffect, useState } from "react";
import CKeditor from "../../components/CKeditor";

export default function index() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <div>
      <CKeditor
        name="description"
        onChange={(data) => {
          setData(data);
        }}
        editorLoaded={editorLoaded}
      />
      {JSON.stringify(data)}
    </div>
  );
}

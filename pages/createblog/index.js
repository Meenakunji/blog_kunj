import { useEffect, useState } from "react";
import CKeditor from "../../components/CKeditor";

export default function Index() {
  // Changed the component name to start with uppercase "I"
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

// import React, { useMemo, useState } from 'react';
// import { createEditor, Transforms, Editor, Text } from 'slate';
// import { Slate, Editable, withReact } from 'slate-react';
// import { withHistory } from 'slate-history';

// const CustomEditor = () => {
//   const editor = useMemo(() => withHistory(withReact(createEditor())), []);

//   // Initial value for the editor
//   const initialValue = useMemo(() => [
//     {
//       type: 'paragraph',
//       children: [{ text: 'This is a custom editor in Next.js!' }],
//     },
//   ], []);

//   const [value, setValue] = useState(initialValue);

//   // Render block-level elements (e.g., paragraphs, headings)
//   const renderElement = (props) => {
//     const { attributes, children, element } = props;
//     switch (element.type) {
//       case 'heading':
//         return <h1 {...attributes}>{children}</h1>;
//       default:
//         return <p {...attributes}>{children}</p>;
//     }
//   };

//   // Render inline styles (e.g., bold, italic)
//   const renderLeaf = (props) => {
//     const { attributes, children, leaf } = props;
//     let decoratedChildren = children;

//     if (leaf.bold) {
//       decoratedChildren = <strong>{decoratedChildren}</strong>;
//     }
//     if (leaf.italic) {
//       decoratedChildren = <em>{decoratedChildren}</em>;
//     }

//     return <span {...attributes}>{decoratedChildren}</span>;
//   };

//   // Toggle bold formatting
//   const toggleBold = () => {
//     const isActive = Editor.marks(editor)?.bold === true;
//     if (isActive) {
//       Editor.removeMark(editor, 'bold');
//     } else {
//       Editor.addMark(editor, 'bold', true);
//     }
//   };

//   // Toggle italic formatting
//   const toggleItalic = () => {
//     const isActive = Editor.marks(editor)?.italic === true;
//     if (isActive) {
//       Editor.removeMark(editor, 'italic');
//     } else {
//       Editor.addMark(editor, 'italic', true);
//     }
//   };

//   return (
//     <div>
//       {/* Toolbar */}
//       <div className="toolbar" style={{ marginBottom: '10px' }}>
//         <button
//           onMouseDown={(e) => {
//             e.preventDefault();
//             toggleBold();
//           }}
//           style={{ marginRight: '10px' }}
//         >
//           Bold
//         </button>
//         <button
//           onMouseDown={(e) => {
//             e.preventDefault();
//             toggleItalic();
//           }}
//         >
//           Italic
//         </button>
//       </div>

//       {/* Editor */}
//       <Slate
//         editor={editor}
//         value={value}
//         onChange={(newValue) => setValue(newValue)}
//       >
//         <Editable
//           renderElement={renderElement}
//           renderLeaf={renderLeaf}
//           placeholder="Start typing here..."
//           style={{
//             border: '1px solid #ccc',
//             padding: '10px',
//             minHeight: '200px',
//             borderRadius: '5px',
//           }}
//         />
//       </Slate>
//     </div>
//   );
// };

// export default CustomEditor;

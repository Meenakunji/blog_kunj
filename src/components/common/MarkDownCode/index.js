import { Box } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { SyntaxHighlighterStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import RemarkMathPlugin from "remark-math";
import remark2rehype from "remark-rehype";
import CodeCopyBtn from "../codeCopyBtn";
import style from "../codeCopyBtn/style";

export const MarkDownReactCode = ({ description }) => {
  // pre code
  const Pre = ({ children }) => (
    <pre style={{ position: "relative" }}>
      <CodeCopyBtn>{children}</CodeCopyBtn>
      {children}
    </pre>
  );

  return (
    <Box sx={style.detailsComment}>
      <ReactMarkdown
        remarkPlugins={[RemarkMathPlugin, remarkGfm]}
        rehypePlugins={[rehypeKatex, remark2rehype]}
        components={{
          pre: Pre,
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                style={SyntaxHighlighterStyle}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {description}
      </ReactMarkdown>
    </Box>
  );
};

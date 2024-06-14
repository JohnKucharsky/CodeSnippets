import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { javascriptCodeSnippets } from "src/features/Javascript/service.ts";

export default function Javascript() {
  return (
    <>
      {javascriptCodeSnippets.map((item) => (
        <SyntaxHighlighter
          key={item}
          style={stackoverflowDark}
          language={"JavaScript"}
        >
          {item}
        </SyntaxHighlighter>
      ))}
    </>
  );
}

import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { javascriptCodeSnippets } from "src/features/Javascript/service.ts";
import { Box, Typography } from "@mui/material";

export default function Javascript() {
  return (
    <>
      {javascriptCodeSnippets.map((item, idx) => (
        <Box key={item}>
          <Typography variant="h5">{`Snippet ${idx + 1}`}</Typography>
          <SyntaxHighlighter style={stackoverflowDark} language={"JavaScript"}>
            {item}
          </SyntaxHighlighter>
        </Box>
      ))}
    </>
  );
}

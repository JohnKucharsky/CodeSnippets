import { Outlet } from "react-router";
import {
  Box,
  createTheme,
  css,
  CssBaseline,
  styled,
  ThemeProvider,
} from "@mui/material";
import Header from "src/features/Header.tsx";

const MainWrapper = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.palette.background.default};
    min-height: 100vh;
    height: 100%;
  `,
);

export default function Layout() {
  const theme = createTheme({
    palette: { mode: "dark" },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainWrapper>
        <Box px={{ xs: 1, md: 2 }} pt={1} maxWidth={"60rem"} mx={"auto"}>
          <Header />
        </Box>
        <Box p={{ xs: 1, md: 2 }} maxWidth={"60rem"} mx={"auto"}>
          <Outlet />
        </Box>
      </MainWrapper>
    </ThemeProvider>
  );
}

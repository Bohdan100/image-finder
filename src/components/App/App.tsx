import { FC, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";
import { GlobalStyle } from "../GlobalStyles/GlobalStyles";
import { ImageFinder } from "../ImageFinder";

const App: FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <ImageFinder toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;

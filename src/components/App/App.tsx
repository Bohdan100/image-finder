import { FC, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { GlobalStyle } from "../GlobalStyle";

import { getThemeStorage, changeThemeStorage } from "services";
import { ImageFinder } from "../ImageFinder";

const App: FC = () => {
  const [mode, setMode] = useState<"light" | "dark">(
    getThemeStorage("theme") || "light"
  );

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
      changeThemeStorage("theme", "dark");
    } else {
      setMode("light");
      changeThemeStorage("theme", "light");
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

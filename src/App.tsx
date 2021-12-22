import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { isDark } from "./atoms";
import ToDos from "./components/ToDos";
import GlobalStyles from "./GlobalStyles";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const isDarkTheme = useRecoilValue(isDark);
  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <ToDos />
      </ThemeProvider>
    </>
  );
}

export default App;

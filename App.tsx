import { ThemeProvider } from "styled-components";
import { Group } from "./src/screens/Groups";
import theme from "./src/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Group />
      </ThemeProvider>
    </>
  );
}

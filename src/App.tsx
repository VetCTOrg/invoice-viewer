import { Box, CssBaseline } from "@mui/material";
import { Main } from "./components/Main";
import { Theme } from "./components/Theme";

export const App = () => {
  return (
    <Theme>
      <Box
        height="100vh"
        maxHeight="100vh"
        display="flex"
        flexDirection="column"
      >
        <CssBaseline />
        <Main />
      </Box>
    </Theme>
  );
};

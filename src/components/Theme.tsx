import { ReactNode, useMemo } from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";

const getTheme = () =>
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1024,
        lg: 1466,
        xl: 1636,
      },
    },
    palette: {
      mode: "light",
      primary: {
        main: "#880837",
      },
      secondary: {
        main: "#3b9194",
      },
      info: { main: "#2196F3" },
      background: {
        default: "#f2f2f2",
      },
      error: {
        light: "#EB57571A",
        main: "#EB5757D9",
        dark: "#EB5757BB",
      },
      text: {
        disabled: "rgba(0,0,0,0.4)",
        secondary: "rgba(0,0,0,0.6)",
        primary: "rgba(0,0,0,0.87)",
      },
    },

    typography: {
      h2: {
        fontSize: 18,
        fontWeight: 600,
      },
      h4: {
        fontSize: 16,
        fontWeight: 700,
      },
    },
    components: {
      MuiPaper: {
        defaultProps: {
          variant: "outlined",
        },
      },
      MuiCard: {
        defaultProps: {
          sx: {
            border: 1,
            borderColor: "divider",
            boxShadow: "none",
            backgroundImage: "none",
          },
        },
      },
      MuiFormControl: {
        defaultProps: {
          margin: "dense",
          size: "small",
        },
      },
      MuiFormHelperText: {
        defaultProps: {
          margin: "dense",
        },
      },
      MuiInputBase: {
        defaultProps: {
          margin: "dense",
          size: "small",
        },
      },
      MuiIconButton: {
        defaultProps: {
          size: "small",
        },
      },
      MuiInputLabel: {
        defaultProps: {
          margin: "dense",
        },
      },
      MuiButton: {
        defaultProps: {
          sx: {
            textDecorationColor: "primary.main",
          },
        },
      },
    },
  });

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const theme = useMemo(() => getTheme(), []);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

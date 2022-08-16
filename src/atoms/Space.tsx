import { FC } from "react";
import { useTheme, Box, BoxProps } from "@mui/material";

interface Props extends BoxProps {
  h?: number;
  w?: number;
}

export const Space: FC<Props> = ({ w, h, ...props }) => {
  const theme = useTheme();

  return (
    <Box
      component="div"
      flexShrink={0}
      sx={{ height: theme.spacing(h || 1), width: theme.spacing(w || 1) }}
      {...props}
    />
  );
};

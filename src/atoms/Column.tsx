import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

export const Column: FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box display="flex" flexDirection="column" {...props}>
      {children}
    </Box>
  );
};

import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

export const Row: FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box display="flex" flexDirection="row" {...props}>
      {children}
    </Box>
  );
};

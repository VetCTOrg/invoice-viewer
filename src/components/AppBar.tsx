import {
  AppBar as MuiAppBar,
  Breadcrumbs,
  Link,
  styled,
  Typography,
} from "@mui/material";
import logo from "../assets/vetct_logo.png";
import { Space } from "../atoms/Space";
import { Row } from "../atoms/Row";

const StyledImg = styled("img")(() => ({
  imageRendering: "-webkit-optimize-contrast",
  height: "32px",
}));

export const AppBar = () => {
  return (
    <MuiAppBar
      position="sticky"
      elevation={0}
      variant="outlined"
      color="transparent"
      sx={{
        overflow: "hidden",
        display: "flex",
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Row alignItems="center" pr={2} pl={3} height={60}>
        <Row>
          <StyledImg src={logo} sx={{ bgcolor: "common.white" }} />
        </Row>
        <Space w={5.5} />
        <Breadcrumbs>
          <Link
            underline="hover"
            color="inherit"
            href="https://www.vet-ct.com/us/accounts/profile/"
          >
            Dashboard
          </Link>
          <Typography color="text.primary">Invoice Browser</Typography>
        </Breadcrumbs>
        <Space flexGrow={1} />
      </Row>
    </MuiAppBar>
  );
};

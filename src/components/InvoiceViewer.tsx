import { Paper, Typography } from "@mui/material";
import { FC } from "react";
import { Column } from "../atoms/Column";
import { Row } from "../atoms/Row";
import { Space } from "../atoms/Space";
import { CaseData } from "../data";

type Props = {
  selectedMonth: string;
  monthOfCases?: CaseData[];
};

export const InvoiceViewer: FC<Props> = ({ monthOfCases, selectedMonth }) => {
  return (
    <Paper
      sx={{
        flexGrow: 1,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        p: 2,
      }}
    >
      <Column>
        {selectedMonth && (
          <Typography variant="h4">Invoice: {selectedMonth}</Typography>
        )}
        <Space />
        {monthOfCases && (
          <Paper>
            <Column p={1}>
              {monthOfCases.map((c) => (
                <Row>
                  <Typography>{c.CASEID}</Typography>
                </Row>
              ))}
            </Column>
          </Paper>
        )}
      </Column>
    </Paper>
  );
};

import { Paper, Typography } from "@mui/material";
import { FC } from "react";
import { Column } from "../atoms/Column";
import { Space } from "../atoms/Space";
import { CaseData } from "../data";
import { Table } from "./Table";

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
        p: 3,
        overflow: "auto",
      }}
    >
      {selectedMonth && (
        <Column>
          <>
            <Typography variant="body2" color="text.secondary">
              Invoice
            </Typography>
            <Typography variant="h4">{selectedMonth}</Typography>
          </>

          <Space h={2} />
          {monthOfCases && <Table cases={monthOfCases} />}
        </Column>
      )}
    </Paper>
  );
};

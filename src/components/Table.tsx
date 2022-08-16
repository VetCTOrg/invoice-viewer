import { FC } from "react";
import {
  Table as MUITable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { CaseData } from "../data";

type Props = {
  cases: CaseData[];
};

export const Table: FC<Props> = ({ cases }) => {
  return (
    <MUITable>
      <TableHead>
        <TableRow>
          <TableCell>Case</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cases.map((c) => (
          <TableRow>
            <TableCell>
              <Typography variant="body2" maxWidth={200}>
                {c.CASEID}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MUITable>
  );
};

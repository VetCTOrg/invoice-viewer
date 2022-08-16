import { Paper, Tab, Tabs } from "@mui/material";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Column } from "../atoms/Column";
import { CaseData, data } from "../data";
import _ from "lodash";
import moment from "moment";

type Props = {
  selectedMonth: string;
  setSelectedMonth: Dispatch<SetStateAction<string>>;
  setMonthOfCases: Dispatch<SetStateAction<CaseData[] | undefined>>;
};

export const SideBar: FC<Props> = ({
  setMonthOfCases,
  selectedMonth,
  setSelectedMonth,
}) => {
  const [groupedByMonths, setGroupedByMonths] = useState<
    _.Dictionary<CaseData[]>
  >({});

  useEffect(() => {
    const grouped = _.groupBy(data, (c) =>
      moment(c.FIRSTCLOSUREDATE).startOf("month").format("MMMM YYYY")
    );
    setGroupedByMonths(grouped);
  }, []);

  useEffect(() => {
    if (selectedMonth) setMonthOfCases(groupedByMonths[selectedMonth]);
  }, [selectedMonth, groupedByMonths, setMonthOfCases]);

  return (
    <Paper
      sx={{
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
      }}
    >
      <Column p={0}>
        <Tabs
          orientation="vertical"
          value={selectedMonth}
          onChange={(_, value) => setSelectedMonth(value)}
        >
          {Object.keys(groupedByMonths).map((month) => (
            <Tab label={month} value={month} />
          ))}
        </Tabs>
      </Column>
    </Paper>
  );
};

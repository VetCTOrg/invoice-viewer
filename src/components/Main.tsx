import { FC, useState } from "react";
import { Row } from "../atoms/Row";
import { CaseData } from "../data";
import { AppBar } from "./AppBar";
import { InvoiceViewer } from "./InvoiceViewer";
import { SideBar } from "./SideBar";

export const Main: FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [monthOfCases, setMonthOfCases] = useState<CaseData[]>();

  return (
    <>
      <AppBar />
      <Row bgcolor="background.grey" p={2} maxHeight="100%" minHeight="0">
        <SideBar
          setMonthOfCases={setMonthOfCases}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <InvoiceViewer
          monthOfCases={monthOfCases}
          selectedMonth={selectedMonth}
        />
      </Row>
    </>
  );
};

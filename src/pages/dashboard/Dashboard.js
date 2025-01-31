import React, { useCallback, useState } from "react";
import { Box, Grid } from "@mui/material";
import PerformanceMetrics from "./performancemetrics/PerformanceMetrics";
import CaseloadMetrics from "./caseloadmetrics/CaseloadMetrics";
import CaseModeView from "./caseModeView/CaseModeView";
// import InterviewCalendarView from "./interviewCalendarView";
import { CookieNames, getCookieItem, getUserName } from "../../utils/cookies";

const Dashboard = () => {
  const [stage, setStage] = useState("All");
  const [userId, setUserId] = useState(getCookieItem(CookieNames.USER_ID));
  const [userName, setUserName] = useState(getUserName());

  const handleItemsSelection = (event, user) => {
    setUserName(user.name);
    setUserId(event.target.value);
    setStage("All");
  };

  return (
    <Box>
      <Grid container sx={{ border: "2px solid #000" }}>
        <Grid item xs={12} sm={3.3} xl={3}>
          <PerformanceMetrics userId={123} />
        </Grid>
        <Grid item xs={12} sm={8.7} xl={9} maxHeight={"100%"} sx={{ padding: 1 }}>
          <CaseloadMetrics  handleItemsSelection={handleItemsSelection}/>
          <CaseModeView />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

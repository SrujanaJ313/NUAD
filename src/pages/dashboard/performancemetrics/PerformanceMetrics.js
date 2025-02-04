import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  appointmentsLocalOfficeURL,
  appointmentsCaseManagerURL,
  // kpiSummaryURL,
} from "../../../helpers/Urls";
import client from "../../../helpers/Api";
import { genericSortOptionsAlphabetically } from "../../../helpers/utils";
import { StackedBarChartOutlined } from "@mui/icons-material";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRight: "2px solid #000",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f5f5f5",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

const Header = styled(Typography)(({ theme }) => ({
  color: "#183084",
  fontWeight: 600,
}));

const Label = styled(Typography)(({ theme }) => ({
  color: "#183084",
  fontWeight: 600,
  fontSize: "0.8rem",
}));

const Value = styled(Box)(({ theme }) => ({
  fontWeight: "normal",
  color: "#000",
}));

const StatItem = ({ label, value, percentage }) => {
  return (
    <Grid container spacing={0.9} alignItems="center">
      <Grid item xs={10}>
        <Label>{label}</Label>
      </Grid>
      <Grid item xs={2}>
        <Value>{value}</Value>
      </Grid>
      {/* {percentage?.toString() && (
        <Grid item xs={3}>
          <Value>{percentage}%</Value>
        </Grid>
      )} */}
    </Grid>
  );
};

const PerformanceMetrics = ({ userId }) => {
  const [period, setPeriod] = useState("THREE_MONTHS");
  const [caseManager, setCaseManager] = useState([]);
  const [localOffice, setLocalOffice] = useState([]);
  const [caseManagerId, setCaseManagerId] = useState(userId || "");
  const [localOfficeId, setLocalOfficeId] = useState("");
  const [kpiSummary, setKpiSummary] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const data = {
    caseload: kpiSummary?.caseLoad,
    avgWksOfEmployment: kpiSummary?.avgWksOfEmployment,
    timeliness: [
      {
        label: "Total Separation Determination made:",
        value: kpiSummary?.completedApptCount,
        percentage: kpiSummary?.completedApptPercent,
      },
      {
        label: "Total Non-Separation Determination made:",
        value: kpiSummary?.completedRTWApptCount,
        percentage: kpiSummary?.completedRTWApptPercent,
      },
      {
        label: "Total Separation Determinations:",
        value: kpiSummary?.completedApptCount,
        percentage: kpiSummary?.completedApptPercent,
      },
      {
        label: "Untimely Separation Determinations:",
        value: kpiSummary?.completedRTWApptCount,
        percentage: kpiSummary?.completedRTWApptPercent,
      },
      {
        label: "Timely Non-Separation Determinations:",
        value: kpiSummary?.completedApptCount,
        percentage: kpiSummary?.completedApptPercent,
      },
      {
        label: "Untimely Non-Separation Determinations:",
        value: kpiSummary?.completedRTWApptCount,
        percentage: kpiSummary?.completedRTWApptPercent,
      },
      {
        label: "Total Timely%:",
        value: kpiSummary?.completedApptCount,
        percentage: kpiSummary?.completedApptPercent,
      },
      {
        label: "Total Untimely%:",
        value: kpiSummary?.completedRTWApptCount,
        percentage: kpiSummary?.completedRTWApptPercent,
      },
    ],
    btq: [
      {
        label: "Cases selected by BTQ:",
        value: kpiSummary?.noShowRTWCount,
        percentage: kpiSummary?.noShowRTWPercent,
      },
      {
        label: "Passed BTQ:",
        value: kpiSummary?.noShowRescheduledCount,
        percentage: kpiSummary?.noShowRescheduledPercent,
      },
      {
        label: "Failed BTQ:",
        value: kpiSummary?.noShowFailedCount,
        percentage: kpiSummary?.noShowFailedPercent,
      },
    ],
  };

  const onPageLoadFields = {
    CaseManager: {
      url: appointmentsCaseManagerURL,
      setData: setCaseManager,
      propertyName: "name",
      checkCaseManager: true,
    },
    LocalOffice: {
      url: appointmentsLocalOfficeURL,
      setData: setLocalOffice,
      propertyName: "officeName",
      checkCaseManager: false,
    },
  };

  function fetchCaseManager() {
    return [
      {
        id: Number("123"),
        name: "Madhu",
      },
    ];
  }

  useEffect(() => {
    async function loadData(fieldName) {
      try {
        const { url, setData, propertyName, checkCaseManager } =
          onPageLoadFields[fieldName];
        const data = checkCaseManager
          ? fetchCaseManager()
          : await client.get(url);
        const sortedData = genericSortOptionsAlphabetically(data, propertyName);
        setData(sortedData);
      } catch (errorResponse) {
        console.error("Error in Performance metrics loadData", errorResponse);
      }
    }

    Promise.all(
      Object.keys(onPageLoadFields).map((fieldName) => loadData(fieldName))
    );
  }, []);

  useEffect(() => {
    async function getKPISummary(payload) {
      try {
        const result =
          process.env.REACT_APP_ENV === "mockserver"
            ? await client.get(kpiSummaryURL, payload)
            : await client.post(kpiSummaryURL, payload);
        setKpiSummary(result);
      } catch (errorResponse) {
        console.error("Error in getKPISummary", errorResponse);
      }
    }
    if (!period) {
      return;
    }
    let payload = {
      periodRange: period,
    };
    if (selectedOption === "Agency") {
      payload["agencySelectedInd"] = "Y";
      getKPISummary(payload);
    } else if (selectedOption === "CaseManager" && caseManagerId) {
      payload["caseMgrId"] = caseManagerId;
      getKPISummary(payload);
    } else if (selectedOption === "LocalOffice" && localOfficeId) {
      payload["lofId"] = localOfficeId;
      getKPISummary(payload);
    } else {
      return;
    }
  }, [caseManagerId, localOfficeId, period, selectedOption]);

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
    setCaseManagerId("");
    setLocalOfficeId("");
  };

  return (
    <Container
      sx={{
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "5px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#888",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#555",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f1f1f1",
        },
      }}
    >
      <Header variant="h6">Key Performance Metrics</Header>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography sx={{color: "#183084",fontWeight: "bold"}}>For:</Typography>
        <RadioGroup value={selectedOption} onChange={handleRadioChange} row>
          <FormControlLabel
            value="michele"
            control={<Radio />}
            label="Michele"
            sx={{
              ".MuiFormControlLabel-label": {
                color: "#183084",
                fontWeight: "bold",
              },
            }}
          />
          <FormControlLabel
            value="BAU"
            control={<Radio />}
            label="BAU"
            sx={{
              ".MuiFormControlLabel-label": {
                color: "#183084",
                fontWeight: "bold",
              },
            }}
          />
          <FormControlLabel
            value="agency"
            control={<Radio />}
            label="Agency"
            sx={{
              ".MuiFormControlLabel-label": {
                color: "#183084",
                fontWeight: "bold",
              },
            }}
          />
        </RadioGroup>
      </Stack>

      <Stack direction="row">
        <Stack width="30%" justifyContent={"center"}>
          <Typography className="label-text">Over the past:</Typography>
        </Stack>
        <Stack width="70%">
          <Select
            size="small"
            value={period}
            onChange={handlePeriodChange}
            fullWidth
          >
            <MenuItem value={"THREE_MONTHS"}>3 Months</MenuItem>
            <MenuItem value={"SIX_MONTHS"}>6 Months</MenuItem>
            <MenuItem value={"ONE_YEAR"}>1 Year</MenuItem>
          </Select>
        </Stack>
      </Stack>

      <Label>Timeliness:</Label>
      <Box sx={{ display: "flex", flexDirection: "column", px: 1.5, gap: 0.7 }}>
        {data.timeliness.map((item) => (
          <StatItem
            key={item.label}
            label={item.label}
            value={item.value}
            percentage={item.percentage}
          />
        ))}
      </Box>

      <Label>BTQ:</Label>
      <Box sx={{ display: "flex", flexDirection: "column", px: 1.5, gap: 0.7 }}>
        {data.btq.map((item) => (
          <StatItem
            key={item.label}
            label={item.label}
            value={item.value}
            percentage={item.percentage}
          />
        ))}
      </Box>
    </Container>
  );
};

export default PerformanceMetrics;


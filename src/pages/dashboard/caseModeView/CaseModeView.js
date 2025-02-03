import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
  Button,
  DialogContent,
  Typography,
  Stack,
  // Link,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import cloneDeep from "lodash/cloneDeep";
import CustomModal from "../../../components/customModal/CustomModal";
import moment from "moment";
import CaseModeTableRow from "./CaseModeTableRow";
import { caseLoadSummaryURL } from "../../../helpers/Urls";
import client from "../../../helpers/Api";
import { getMsgsFromErrorCode } from "../../../helpers/utils";
// import Schedule from "./Schedule";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#ffffff",
  // textAlign: "center",
  lineHeight: "1rem",
}));

// const COLUMNS = [
//   {
//     id: "dueDate",
//     label: "Due Date",
//   },
//   {
//     id: "claimantName",
//     label: "Claimant",
//   },
//   {
//     id: "ssn",
//     label: "SSN",
//   },
//   {
//     id: "byeDt",
//     label: "BYE",
//   },
//   {
//     id: "complexity",
//     label: "Complexity",
//   },
//   {
//     id: "assignedDate",
//     label: "Assigned Date",
//   },
//   {
//     id: "openIssues",
//     label: "Open Issues",
//   },
//   {
//     id: "ff",
//     label: "FF",
//   },
//   {
//     id: "weeksFiled",
//     label: "Weeks Filed",
//   },
//   {
//     id: "indicators",
//     label: "Indicators",
//   },
// ];

const COLUMNS = [
  { id: "dueDate", label: "Due Date", width: "100px" },
  { id: "claimantName", label: "Claimant Name", width: "150px" },
  { id: "ssn", label: "SSN", width: "100px" },
  { id: "byeDt", label: "BYE Date", width: "100px" },
  { id: "complexity", label: "Complexity", width: "100px" },
  { id: "assignedDate", label: "Assigned Date", width: "120px" },
  { id: "openIssues", label: "Open Issues", width: "100px" },
  { id: "ff", label: "FF", width: "80px" },
  { id: "weeksFiled", label: "Weeks Filed", width: "100px" },
  { id: "indicators", label: "Indicators", width: "100px" },
];
const TYPES = {
  reassign: "Reassign Case",
  schedule: "Schedule",
  reassignAll: "Reassign Cases belonging to ",
};

const CaseModeView = ({
  showCalendarView,
  onSwitchView,
  selectedStage,
  userId,
  userName,
}) => {
  const [rows, setRows] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [type, setType] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState("");
  const [reassignInd, setReassignInd] = useState(false);
  const navigate = useNavigate();

  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize: 10,
    needTotalCount: true,
  });
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState({
    field: "caseNum",
    direction: "asc",
  });

  useEffect(() => {
    const payload = {
      metric: selectedStage,
      userId: userId,
      pagination: pagination,
      sortBy: sortBy,
    };

    // if (selectedStage && userId) {
    getCaseLoadSummaryData(payload);
    // }
  }, [selectedStage, userId]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);

    const paginationPayload = {
      pageNumber: newPage + 1,
      pageSize: pagination.pageSize,
      needTotalCount: true,
    };
    setPagination(paginationPayload);

    const payload = {
      metric: selectedStage,
      userId: userId,

      pagination: paginationPayload,
      sortBy: sortBy,
    };

    getCaseLoadSummaryData(payload);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);

    const paginationPayload = {
      pageNumber: 1,
      pageSize: event.target.value,
      needTotalCount: true,
    };
    setPagination(paginationPayload);

    const payload = {
      metric: selectedStage,
      userId: userId,

      pagination: paginationPayload,
      sortBy: sortBy,
    };
    getCaseLoadSummaryData(payload);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = sortBy.field === property && sortBy.direction === "asc";

    const sort = {
      field: property,
      direction: isAsc ? "desc" : "asc",
    };
    setSortBy(sort);

    const payload = {
      metric: selectedStage,
      userId: userId,

      pagination: pagination,
      sortBy: sort,
    };
    getCaseLoadSummaryData(payload);
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  const getCaseLoadSummaryData = async (payload) => {
    try {
      setErrorMessages([]);
      // const response = await client.post(caseLoadSummaryURL, payload);
      const response = await client.get(caseLoadSummaryURL, payload); // This is for local Test only
      setReassignInd(response?.reassignInd);
      setRows(cloneDeep(response.caseLoadSummaryList));
      setTotalCount(response.pagination.totalItemCount);
    } catch (errorResponse) {
      const newErrMsgs = getMsgsFromErrorCode(
        `POST:${process.env.REACT_APP_CASELOAD_SUMMARY}`,
        errorResponse
      );
      setErrorMessages(newErrMsgs);
    }
  };
  const getTitle = () => {
    if (["reassign", "schedule", "reassignAll"].includes(type)) {
      return (
        <>
          <span style={{ paddingRight: "5%" }}>
            Case: {selectedRow?.claimantName}
          </span>
          <span style={{ paddingRight: "5%" }}></span>
          <span style={{ paddingRight: "10%" }}>
            BYE: {moment(selectedRow?.bye).format("MM/DD/YYYY")}
          </span>
          <span style={{ paddingRight: "10%" }}>
            Stage: {selectedRow?.stage}
          </span>
          <span>Case Manager : {userName}</span>
        </>
      );
    }
  };

  return (
    <div style={{ height: "635px" }}>
      <Box
        sx={{
          mt: "2px",
          position: "absolute",
          right: "24px",
          zIndex: "10",
        }}
      ></Box>
      <Box sx={{ paddingTop: 3, paddingBottom: 2 }}>
        <TableContainer component={Paper} sx={{ maxHeight: "490px" }}>
          <Table
            sx={{ minWidth: 750 }}
            size="small"
            aria-label="customized table"
            stickyHeader
          >
            <TableHead style={{ backgroundColor: "#183084" }}>
              <TableRow>
                <StyledTableCell
                  sx={{ padding: "5px", width: "50px" }}
                ></StyledTableCell>
                {COLUMNS.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    sx={{ padding: "10px 5px" }}
                    width={column.width}
                  >
                    <TableSortLabel
                      active={sortBy.field === column.id}
                      direction={
                        sortBy.field === column.id ? sortBy.direction : "asc"
                      }
                      onClick={createSortHandler(column.id)}
                    >
                      {column.label}
                      {sortBy.field === column.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {sortBy.direction === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <CaseModeTableRow
                  key={index}
                  row={row}
                  setSelectedRow={setSelectedRow}
                  selectedRow={selectedRow}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          {errorMessages.map((x, index) => (
            <div key={index}>
              <span className="errorMsg">*{x}</span>
            </div>
          ))}
        </Stack>
      </Box>
      <CustomModal title={getTitle()} open={open} maxWidth="md">
        <DialogContent dividers sx={{ paddingBottom: 1 }}>
          <Stack>
            {type && (
              <Stack mt={2}>
                <Typography fontWeight={600} fontSize={"1rem"} color="primary">
                  {type !== "reassignAll"
                    ? TYPES[type]
                    : `${TYPES[type]}${selectedRow?.claimantName || "Mary Peters"}`}
                </Typography>
              </Stack>
            )}
            {type === "workoncase" && <Stack>{/* <Schedule /> */}</Stack>}
          </Stack>
        </DialogContent>
      </CustomModal>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setOpen(true);
              navigate("/workoncase");
            }}
          >
            Work on Case
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseModeView;

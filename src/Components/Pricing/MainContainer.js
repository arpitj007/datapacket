import React, { useState } from "react";
import "./pricing.css";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Typography } from "@material-ui/core";
import ButtonImp from "../Common/ButtonImp/ButtonImp";
import { atlantaLocation } from "./ServerPricing";

const styles = makeStyles({
  table: {
    // minWidth: 650,
    // maxWidth: "100%",
    // alignItems: "center",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
  },
  tableStyle: {
    // width: "60em",
    // display: "flex",
    // justifyContent: "space-around",
  },
});

function MainContainer() {
  const [open, setOpen] = useState(false);
  const classes = styles();
  return (
    <>
      <div className="pricing-head-container">
        <div className="pricing-heading-container">
          <h1 className="heading pricing-heading">Pricing</h1>
          <p className="heading-text pricing-heading-text">
            Unlimited data transfer, unshared 10/40GE ports, and no commitment.
            Learn more.
          </p>
        </div>
        <div className="pricing-section">
          <TableContainer className="pricing-table" component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow className={classes.tableStyle}>
                  <TableCell />
                  <TableCell className="table-heading">Server</TableCell>
                  <TableCell className="table-heading" align="right">
                    Cores
                  </TableCell>
                  <TableCell className="table-heading" align="right">
                    RAM
                  </TableCell>
                  <TableCell className="table-heading" align="right">
                    HDD
                  </TableCell>
                  <TableCell className="table-heading" align="right">
                    Bandwidth
                  </TableCell>
                  <TableCell className="table-heading" align="right">
                    Order Now
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow className={classes.tableStyle}>
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
                    </IconButton>
                  </TableCell>
                  <TableCell className="table-heading"></TableCell>
                  <TableCell className="table-heading" align="right">
                    Cores
                  </TableCell>
                  <TableCell className="table-heading" align="right">
                    RAM
                  </TableCell>
                  <TableCell className="table-heading" align="right">
                    HDD
                  </TableCell>
                  <TableCell className="table-heading" align="right">
                    Bandwidth
                  </TableCell>
                  <TableCell className="table-heading" align="right">
                    Order Now
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                  >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <Box margin={1}>
                        <Typography variant="h6" gutterBottom component="div">
                          Server Details
                        </Typography>
                        <Table size="small" aria-label="purchases">
                          <TableHead>
                            <TableRow>
                              <TableCell>Date</TableCell>
                              <TableCell>Customer</TableCell>
                              <TableCell align="right">Amount</TableCell>
                              <TableCell align="right">
                                Total price ($)
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody></TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default MainContainer;

import React, { useState } from "react";
import "./DropdownMenu.css";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import {
  continents,
  countriesNA,
  countriesSA,
  countriesEU,
  countriesAPAC,
  countriesAU,
} from "../../../Pricing/ServerPricing";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "auto",
    position: "absolute",
    width: "auto",
    borderRadius: 5,
    top: 100,
    zIndex: 3,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function DropdownMenu() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [valueNA, setValueNA] = useState(0);
  const [valueSA, setValueSA] = useState(0);
  const [valueAPAC, setValueAPAC] = useState(0);
  const [valueEU, setValueEU] = useState(0);
  const [valueAU, setValueAU] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeNA = (event, newValue) => {
    setValueNA(newValue);
  };
  const handleChangeSA = (event, newValue) => {
    setValueSA(newValue);
  };
  const handleChangeEU = (event, newValue) => {
    setValueEU(newValue);
  };
  const handleChangeAPAC = (event, newValue) => {
    setValueAPAC(newValue);
  };
  const handleChangeAU = (event, newValue) => {
    setValueAU(newValue);
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {continents.map((x, i) => {
          return <Tab label={x.name} key={i + "continent"} {...a11yProps(i)} />;
        })}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={valueAPAC}
          onChange={handleChangeAPAC}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {countriesAPAC.map((x, i) => {
            return (
              <Tab label={x.name} key={i + "continent"} {...a11yProps(i)} />
            );
          })}
        </Tabs>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={valueNA}
          onChange={handleChangeNA}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {countriesNA.map((x, i) => {
            return (
              <Tab label={x.name} key={i + "continent"} {...a11yProps(i)} />
            );
          })}
        </Tabs>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={valueSA}
          onChange={handleChangeSA}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {countriesSA.map((x, i) => {
            return (
              <Tab label={x.name} key={i + "continent"} {...a11yProps(i)} />
            );
          })}
        </Tabs>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={valueEU}
          onChange={handleChangeEU}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {countriesEU.map((x, i) => {
            return (
              <Tab label={x.name} key={i + "continent"} {...a11yProps(i)} />
            );
          })}
        </Tabs>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={valueAU}
          onChange={handleChangeAU}
          aria-label="Vertical tabs example"
          className={classes.tabs + " location-box-tab"}
        >
          {countriesAU.map((x, i) => {
            return (
              <Tab label={x.name} key={i + "continent"} {...a11yProps(i)} />
            );
          })}
        </Tabs>
      </TabPanel>
    </div>
  );
}

export default DropdownMenu;

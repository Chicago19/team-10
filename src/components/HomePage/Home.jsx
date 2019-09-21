import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  MenuItem,
  Grid,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

import { registerEmail, registerName } from "../../actions/RegistrationActions";

import Navbar from "./Navbar";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    background: "white",
    color: "black",
    boxShadow: theme.shadows[0]
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    color: "black"
  },
  centerButtons: {
    marginTop: theme.spacing(10),
    height: "100%",
    maxWidth: "100%"
  }
}));
const Home = props => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  //const anchorRef = React.useRef(null);
  const classes = useStyles();

  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");

  if (email !== undefined) {
    props.registerEmail(email);
    console.log("email: " + email);

    if (name !== undefined) {
      props.registerName(name);
    } else {
      axios.get("/view_profile", { email: email }).then(res => {
        console.log("data");
        console.log(res);

        props.registerName(res.name);
      });
    }
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="primary"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid
        container
        direction="column"
        id="about"
        className={classes.centerButtons}
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h1">Courses</Typography>
        </Grid>
        <Grid item>
          <Button
            className={classes.centerButtons}
            alignItems="center"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Typography variant="h3">Current Courses:</Typography>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/course-registration"
            >
              Current Course Example 1
            </MenuItem>
          </Menu>
        </Grid>
        <Grid item>
          <Button
            className={classes.centerButtons}
            alignItems="center"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Typography variant="h3">Available Courses:</Typography>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/course-registration"
            >
              Available Course Example
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <Navbar open={open} handleDrawerToggle={handleDrawerToggle} />
    </div>
  );
};

const mapDispatchToProps = {
  registerEmail,
  registerName
};

export default connect(
  null,
  mapDispatchToProps
)(Home);

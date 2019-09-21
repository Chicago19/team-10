import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  MenuList,
  MenuItem,
  ListItemIcon,
  Hidden,
  Drawer,
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles( theme => ({
  menuItemSelected: {
    backgroundColor: "#333333 !important",
  },
  drawerPaper: {
    width: drawerWidth,
    background: "black",
    color: "white"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  }
}));

const determineSelections = path => {
  let selections = [false, false, false, false];
  switch (path) {
    case "/home":
      selections[0] = true;
      break;
    case "/home/about":
      selections[1] = true;
      break;
    case "/home/projects":
      selections[2] = true;
      break;
    case "/home/experience":
      selections[3] = true;
      break;
    default:
      break;
  }

  return selections;
};

const Navbar = props => {
  const { open, handleDrawerToggle } = props;

  const classes = useStyles();
  const selections = determineSelections(props.location.pathname);

  const navigation = (
    <MenuList>
      <MenuItem
        component={Typography}
        variant="h2"
        disabled
      >
        Temporary Name
      </MenuItem>
      <MenuItem
        component={Typography}
        variant="h2"
        disabled
      >
        Temporary Email
      </MenuItem>
      <MenuItem
        component={Link}
        to="/home"
        classes={{ selected: classes.menuItemSelected }}
        selected={selections[0]}
      >
        Courses
      </MenuItem>
      <MenuItem
        component={Link}
        to="/home/volunteer"
        classes={{ selected: classes.menuItemSelected }}
        selected={selections[1]}
      >
        Volunteer
      </MenuItem>
      <MenuItem
        component={Link}
        to="/exam"
        classes={{ selected: classes.menuItemSelected }}
        selected={selections[2]}
      >
        Take the Written Exam
      </MenuItem>
    </MenuList>
  );

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better for performance; check mui docs
          }}
        >
          {navigation}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {navigation}
        </Drawer>
      </Hidden>
    </nav>
  );
};
export default withRouter(Navbar);

import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from "@material-ui/styles";

const styles = {
    fullHeightWidth: {
      height: "100%",
      maxWidth: "100%"
    },
    hoverAppbar: {
        zIndex: "1",
        position: "fixed"
    }
};

const SimpleMenu = props => {
    const { classes } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    }
  
    const handleClose = () => {
      setAnchorEl(null);
    }
    return (
        <div className={classes.hoverAppbar}>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </Button>
          <Menu
            id="simple-menu"
            className={classes.fullHeightWidth}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Login</MenuItem>
            <MenuItem onClick={handleClose}>Create Account</MenuItem>
          </Menu>
        </div>
      );
}
export default withStyles(styles)(SimpleMenu);

import React from "react";
//import $ from "jquery";

import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const styles = {
  fullHeightContainer: {
    height: "100%"
  },
  fullWidthItem: {
    width: "85%"
  },
  centerItem: {
    width: "100%"
  }
};

const Login = props => {
  const { classes } = props;

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.fullHeightContainer}
    >
      <Grid
        item
        container
        justify="center"
        className={`${classes.headerPadding} ${classes.fullWidthItem}`}
      >
        <Typography variant="h2">Login</Typography>
      </Grid>
      <Grid item container justify="center" className={classes.fullWidthItem}>
        <TextField
          required
          label="Email"
          type="email"
          margin="normal"
          variant="outlined"
          className={classes.centerItem}
        />
      </Grid>
      <Grid item container justify="center" className={classes.fullWidthItem}>
        <TextField
          required
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
          className={classes.centerItem}
        />
      </Grid>

      <Grid item container className={classes.fullWidthItem}>
        <Grid item xs container>
          <Link to="/registration">
            <Button variant="outlined">
               Register
             </Button>
           </Link>
        </Grid>
        
        <Grid item xs container justify="flex-end">
          <Link to="/home">
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Login);

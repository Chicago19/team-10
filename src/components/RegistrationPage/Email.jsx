import React from "react";
import $ from "jquery";

import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {
  fullHeightContainer: {
    height: "100%"
  },
  fullWidthItem: {
    width: "85%"
  },
  centerItem: {
    width: "100%"
  },
  headerPadding: {
    marginBottom: "5%"
  }
};

const Email = props => {
  const { classes } = props;

  const nextAnimation = () => {
    $("html, body").animate(
      {
        scrollTop: $("#password").offset().top
      },
      800
    );
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.fullHeightContainer}
      id="email"
    >
      <Grid item container justify="center" className={`${classes.headerPadding} ${classes.fullWidthItem}`}>
        <Typography variant="h2">
          Create Profile
        </Typography>
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
      <Grid item container justify="flex-end" className={classes.fullWidthItem}>
        <Button variant="outlined" onClick={nextAnimation}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Email);

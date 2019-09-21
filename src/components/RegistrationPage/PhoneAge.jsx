import React from "react";
import $ from "jquery";

import { Grid, TextField, Button } from "@material-ui/core";
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
  }
};

const PhoneAge = props => {
  const { classes } = props;

  const backAnimation = () => {
    $("html, body").animate(
      {
        scrollTop: $("#password").offset().top
      },
      800
    );
  };

  const nextAnimation = () => {
    $("html, body").animate(
      {
        scrollTop: $("#referral").offset().top
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
      id="phone-age"
    >
      <Grid item container justify="center" className={classes.fullWidthItem}>
        <Grid item xs>
          <TextField
            required
            label="Phone number"
            type="number"
            margin="normal"
            variant="outlined"
            className={classes.centerItem}
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs>
          <TextField
            required
            label="Age"
            type="number"
            margin="normal"
            variant="outlined"
            className={classes.centerItem}
          />
        </Grid>
      </Grid>
      <Grid item container className={classes.fullWidthItem}>
        <Grid item xs container>
          <Button variant="outlined" onClick={backAnimation}>
            Back
          </Button>
        </Grid>
        <Grid item xs container justify="flex-end">
          <Button variant="outlined" onClick={nextAnimation}>
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(PhoneAge);

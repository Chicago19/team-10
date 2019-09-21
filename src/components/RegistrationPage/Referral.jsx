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

const Referral = props => {
  const { classes } = props;

  const backAnimation = () => {
    $("html, body").animate(
      {
        scrollTop: $("#phone-age").offset().top
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
      id="referral"
    >
      <Grid item container justify="center" className={classes.fullWidthItem}>
        <TextField
          label="Referral Name"
          margin="normal"
          variant="outlined"
          className={classes.centerItem}
        />
      </Grid>
      <Grid item container className={classes.fullWidthItem}>
        <Grid item xs container>
          <Button variant="outlined" onClick={backAnimation}>
            Back
          </Button>
        </Grid>
        <Grid item xs container justify="flex-end">
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Referral);

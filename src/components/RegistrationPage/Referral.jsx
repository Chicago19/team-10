import React from "react";
import { connect } from "react-redux";
import $ from "jquery";

import { Grid, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { registerReferral } from "../../actions/RegistrationActions";

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
  const { classes, registerReferral } = props;

  const handleReferralChange = e => {
    registerReferral(e.target.value);
  };

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
          onChange={handleReferralChange}
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

const mapDispatchToProps = {
  registerReferral
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Referral));

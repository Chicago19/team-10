import React from "react";
import { connect } from "react-redux";
import $ from "jquery";

import { Grid, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { registerPhone, registerAge } from "../../actions/RegistrationActions";

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
  const { classes, registerPhone, registerAge } = props;

  const handlePhoneChange = e => {
    registerPhone(e.target.value);
  };

  const handleAgeChange = e => {
    registerAge(e.target.value);
  };

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
            onChange={handlePhoneChange}
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
            onChange={handleAgeChange}
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

const mapDispatchToProps = {
  registerPhone,
  registerAge
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(PhoneAge));

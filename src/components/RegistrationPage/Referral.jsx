import React from "react";
import { connect } from "react-redux";
import $ from "jquery";
import axios from "axios";

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
  const { classes, registerReferral, profile } = props;

  const handleReferralChange = e => {
    registerReferral(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      profile.name === undefined ||
      profile.email === undefined ||
      profile.password === undefined ||
      profile.phone === undefined ||
      profile.age === undefined
    ) {
      alert("One or more required fields is not complete!");
      return;
    }
      axios.post("/create_profile", profile)
        .then(res => {
          console.log("success");
        });
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
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.RegistrationReducer
  };
};

const mapDispatchToProps = {
  registerReferral
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Referral));

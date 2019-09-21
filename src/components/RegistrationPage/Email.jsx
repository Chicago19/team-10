import React from "react";
import { connect } from "react-redux";
import $ from "jquery";

import { Grid, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { registerEmail } from "../../actions/RegistrationActions";

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

const Email = props => {
  const { classes, registerEmail } = props;

  const handleEmailChange = e => {
    registerEmail(e.target.value);
  };

  const backAnimation = () => {
    $("html, body").animate(
      {
        scrollTop: $("#name").offset().top
      },
      800
    );
  };

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
      <Grid item container justify="center" className={classes.fullWidthItem}>
        <TextField
          required
          label="Email"
          type="email"
          margin="normal"
          variant="outlined"
          className={classes.centerItem}
          onChange={handleEmailChange}
        />
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
  registerEmail
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Email));

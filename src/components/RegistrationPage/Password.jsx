import React from "react";
import { connect } from "react-redux";
import $ from "jquery";

import { Grid, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { registerPassword } from "../../actions/RegistrationActions";

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

const Password = props => {
  const { classes, registerPassword } = props;

  const handlePasswordChange = e => {
    registerPassword(e.target.value);
  };

  const backAnimation = () => {
    $("html, body").animate(
      {
        scrollTop: $("#email").offset().top
      },
      800
    );
  };

  const nextAnimation = () => {
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
      id="password"
    >
      <Grid item container justify="center" className={classes.fullWidthItem}>
        <TextField
          required
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
          className={classes.centerItem}
          onChange={handlePasswordChange}
        />
      </Grid>
      <Grid item container justify="center" className={classes.fullWidthItem}>
        <TextField
          required
          label="Confirm password"
          type="password"
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
          <Button variant="outlined" onClick={nextAnimation}>
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = {
  registerPassword
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Password));

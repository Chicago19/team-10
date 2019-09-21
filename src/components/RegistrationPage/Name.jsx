import React from "react";
import { connect } from "react-redux";
import $ from "jquery";

import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { registerName } from "../../actions/RegistrationActions";

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

const Name = props => {
  const { classes, registerName } = props;

  const handleNameChange = e => {
    registerName(e.target.value);
  };

  const nextAnimation = () => {
    $("html, body").animate(
      {
        scrollTop: $("#email").offset().top
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
      id="name"
    >
      <Grid
        item
        container
        justify="center"
        className={`${classes.headerPadding} ${classes.fullWidthItem}`}
      >
        <Typography variant="h2">Registration</Typography>
      </Grid>
      <Grid item container justify="center" className={classes.fullWidthItem}>
        <TextField
          required
          label="Full Name"
          margin="normal"
          variant="outlined"
          className={classes.centerItem}
          onChange={handleNameChange}
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

const mapDispatchToProps = {
  registerName
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Name));

import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import { loginEmail, loginPassword } from "../../actions/LoginActions";

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
  const { classes, loginInfo, loginEmail, loginPassword } = props;

  const handleEmailChange = (e) => {
    loginEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    loginPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(loginInfo.email.length > 0 && loginInfo.password.length > 0) {
      axios.post("/auth_path", loginInfo)
        .then(res => {
          console.log("res:  " + res);
        });
    } else {
      return;
    }
  } 

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
          onChange={handleEmailChange}
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
          onChangePassword={handlePasswordChange}
        />
      </Grid>
      <Grid item container className={classes.fullWidthItem}>
        <Grid item xs container justify="flex-end">
          <Link to="/home">
            <Button variant="outlined" onClick={handleSubmit}>
              Submit
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    loginInfo: state.LoginReducer
  }
}

const mapDispatchToProps = {
  loginEmail,
  loginPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));

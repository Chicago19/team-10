import React, { Component } from "react";

import { Grid, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import axios from "axios";

const styles = {
  fullHeightContainer: {
    maxheight: "100%",
    maxWidth: "100%"
  }
};

class ClassForm extends Component {

  componentDidMount() {
    const email = localStorage.getItem("email");

    console.log("email: " + email);
    axios.get("/view_profile", { "email": email })
      .then(res => {
        console.log("data");
        console.log(res);
      })
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.fullHeightContainer}
        id="SSN"
      >
        <Grid
          item
          container
          justify="center"
          className={`${classes.headerPadding} ${classes.fullWidthItem}`}
        >
          <Typography variant="h6">Legal Name</Typography>
        </Grid>
        <Grid item container justify="center" className={classes.fullWidthItem}>
          <TextField
            required
            label="Legal Name"
            type="SSN"
            margin="normal"
            variant="outlined"
            className={classes.centerItem}
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={`${classes.headerPadding} ${classes.fullWidthItem}`}
        >
          <Typography variant="h6">Postal Code</Typography>
        </Grid>
        <Grid item container justify="center" className={classes.fullWidthItem}>
          <TextField
            required
            label="Postal Code"
            type="Name"
            margin="normal"
            variant="outlined"
            className={classes.centerItem}
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={`${classes.headerPadding} ${classes.fullWidthItem}`}
        >
          <Typography variant="h6">How did you hear about Poder</Typography>
        </Grid>
        <Grid item container justify="center" className={classes.fullWidthItem}>
          <TextField
            required
            label="How did you hear about us?"
            type="Marital"
            margin="normal"
            variant="outlined"
            className={classes.centerItem}
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={`${classes.headerPadding} ${classes.fullWidthItem}`}
        >
          <Typography variant="h6">What is your preferred location?</Typography>
        </Grid>
        <Grid item container justify="center" className={classes.fullWidthItem}>
          <TextField
            required
            label="Location"
            type="Cell"
            margin="normal"
            variant="outlined"
            className={classes.centerItem}
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={`${classes.headerPadding} ${classes.fullWidthItem}`}
        >
          <Typography variant="h6">
            What is your preferred course time slot?
          </Typography>
        </Grid>
        <Grid item container justify="center" className={classes.fullWidthItem}>
          <TextField
            required
            label="Course Time Slot"
            type="HighestEducation Level"
            margin="normal"
            variant="outlined"
            className={classes.centerItem}
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={`${classes.headerPadding} ${classes.fullWidthItem}`}
        >
          <Typography variant="h6">
            What is your perferred mode of transportation?
          </Typography>
        </Grid>
        <Grid item container justify="center" className={classes.fullWidthItem}>
          <TextField
            required
            label="Transportation"
            type="HighestEducation Level"
            margin="normal"
            variant="outlined"
            className={classes.centerItem}
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={`${classes.headerPadding} ${classes.fullWidthItem}`}
        >
          <Typography variant="h6">When is your registration date?</Typography>
        </Grid>
        <Grid item container justify="center" className={classes.fullWidthItem}>
          <TextField
            required
            label="Registration Date"
            type="HighestEducation Level"
            margin="normal"
            variant="outlined"
            className={classes.centerItem}
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={`${classes.headerPadding} ${classes.fullWidthItem}`}
        >
          <Typography variant="h6">
            Please List Your Placement Scores:
          </Typography>
        </Grid>
        <Grid item container justify="center" className={classes.fullWidthItem}>
          <TextField
            required
            label="Written"
            type="HighestEducation Level"
            margin="normal"
            variant="outlined"
            className={classes.centerItem}
          />
          <TextField
            required
            label="Oral"
            type="HighestEducation Level"
            margin="normal"
            variant="outlined"
            className={classes.centerItem}
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={`${classes.headerPadding} ${classes.fullWidthItem}`}
        >
          <Typography variant="h6">
            When was your testing date and Best Exam?
          </Typography>
        </Grid>
        <Grid item container justify="center" className={classes.fullWidthItem}>
          <TextField
            required
            label="Testing Date"
            type="HighestEducation Level"
            margin="normal"
            variant="outlined"
            className={classes.centerItem}
          />
          <TextField
            required
            label="Best Exam"
            type="HighestEducation Level"
            margin="normal"
            variant="outlined"
            className={classes.centerItem}
          />
        </Grid>

        <Grid
          item
          container
          justify="center"
          className={`${classes.headerPadding} ${classes.fullWidthItem}`}
        >
          <Typography variant="h6">
            Have you completed the ICCB and Empowment forms/surveys?
          </Typography>
        </Grid>
        <Grid item container justify="center" className={classes.fullWidthItem}>
          <TextField
            required
            label="Yes/No"
            type="HighestEducation Level"
            margin="normal"
            variant="outlined"
            className={classes.centerItem}
          />
        </Grid>
      </Grid>
    );
  }
}



export default withStyles(styles)(ClassForm);

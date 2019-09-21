import React from "react";

import { Grid, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {
  fullHeightContainer: {
    height: "100%"
  },
  centerItem: {
    width: "85%"
  }
};

const DummyForm = props => {
  const { classes } = props;

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
        <Typography variant="h6">Primary Mode of Transportation?</Typography>
      </Grid>
      <Grid item container justify="center" className={classes.fullWidthItem}>
        <TextField
          required
          label="Transportation"
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
        <Typography variant="h6">Perferred Site Location?</Typography>
      </Grid>
      <Grid item container justify="center" className={classes.fullWidthItem}>
        <TextField
          required
          label="Location"
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
        <Typography variant="h6">Completed the Empowerment Survey?</Typography>
      </Grid>
      <Grid item container justify="center" className={classes.fullWidthItem}>
        <TextField
          required
          label="Yes/No"
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
        <Typography variant="h6">Example Question 4</Typography>
      </Grid>
      <Grid item container justify="center" className={classes.fullWidthItem}>
        <TextField
          required
          label="Cell"
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
        <Typography variant="h6">Example Question 5</Typography>
      </Grid>
      <Grid item container justify="center" className={classes.fullWidthItem}>
        <TextField
          required
          label="Cell"
          margin="normal"
          variant="outlined"
          className={classes.centerItem}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(DummyForm);

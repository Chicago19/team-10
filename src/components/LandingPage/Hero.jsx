import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import $ from 'jquery';

const styles = {
  fullHeightWidth: {
    height: "100%"
  },
  logoStyling: {
    height: "50%"
  },
};

const Hero = props => {
  const { classes } = props;

  const scrollAnimation = () => {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top
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
      className={classes.fullHeightWidth}
    >
      <Grid item>
        <Typography variant="h2">Poder</Typography>
      </Grid>
      {/* <Grid item>
        <img src="/poder-logo.png" alt="" />
      </Grid> */}
      <Grid item>
        <IconButton size="medium" onClick={scrollAnimation}>
          <ExpandMore className={classes.downButton} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Hero);

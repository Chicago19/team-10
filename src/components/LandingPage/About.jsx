import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {
  fullHeightWidth: {
    height: "100%"
  }
};

const About = props => {
  const { classes } = props;

  return (
    <Grid
      container
      direction="column"
      id="about"
      className={classes.fullHeightWidth}
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h3">About</Typography>
      </Grid>
      <Grid item>
        <Typography variant="p">
          PODER prepares Spanish-speaking adult immigrants to seize
          opportunities in Chicago through comprehensive, tuition-free English
          education and job training programs. Our professional, disciplined
          approach ensures that all students learn to understand and communicate
          in English to confidently navigate daily life. Every student who
          commits to PODER’s positive and disciplined learning environment is
          empowered to build a successful new life in Chicago.Students from all
          education levels are welcome. PODER assesses and places each student
          by language level to ensure that all students can progress through the
          program at the right pace. Students without formal education complete
          basic coursework in Spanish, with natives of Mexico earning formal
          primary and secondary school diplomas through PODER’s partnership with
          the Mexican government.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="p">
          As students advance in PODER’s English program, they become eligible
          for job training courses that prepare them to enter Chicago’s labor
          market within industries where bilingual employee demand is high.
          Oprima-1, the capstone of the program, is a unique work/study
          opportunity through which students earn income while training to
          become bilingual customer service representatives. Within eighteen
          months on average, 100% of Oprima-1 graduates are placed in full-time
          employment with corporate partners.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(About);

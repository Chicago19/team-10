import React from 'react';

import { Grid, Typography, Button } from "@material-ui/core";

const Question = props => {
  const { question, A, B, C, D, i } = props;

  return (
    <Grid container direction="column">
      <Grid item style={{ paddingBottom: "5px" }}>
        <Typography variant="h5">
          {i}. {question}
        </Typography>
      </Grid>
      <Grid item container>
        <Grid item>
          <Button variant="outlined" color="primary">
            A
          </Button>
        </Grid>
        <Grid item style={{ paddingLeft: "10px", paddingTop: "2px"}}>
          <Typography variant="h6">
            {A}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item>
          <Button variant="outlined" color="primary">
            B
          </Button>
        </Grid>
        <Grid item style={{ paddingLeft: "10px", paddingTop: "2px"}}>
          <Typography variant="h6">
            {B}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item>
          <Button variant="outlined" color="primary">
            C
          </Button>
        </Grid>
        <Grid item style={{ paddingLeft: "10px", paddingTop: "2px"}}>
          <Typography variant="h6">
            {C}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item>
          <Button variant="outlined" color="primary">
            D
          </Button>
        </Grid>
        <Grid item style={{ paddingLeft: "10px", paddingTop: "2px"}}>
          <Typography variant="h6">
            {D}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default Question;
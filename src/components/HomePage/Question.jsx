import React, { useState } from "react";
import { connect } from "react-redux";

import { Grid, Typography, Button } from "@material-ui/core";

import { addAnswer } from "../../actions/ExamActions";

const Question = props => {
  const { question, A, B, C, D, i, addAnswer } = props;

  const [selected, setSelected] = useState("");

  const handleClick = e => {
    e.preventDefault();

    console.log(e.target.id);
    switch (e.target.id) {
      case "A":
        setSelected("A");
        addAnswer(i - 1, "A");
        break;
      case "B":
        setSelected("B");
        addAnswer(i - 1, "B");
        break;
      case "C":
        setSelected("C");
        addAnswer(i - 1, "C");
        break;
      case "D":
        setSelected("D");
        addAnswer(i - 1, "D");
        break;
      default:
        setSelected("");
        addAnswer(i - 1, undefined);
        break;
    }
  };

  return (
    <Grid container direction="column">
      <Grid item style={{ paddingBottom: "5px" }}>
        <Typography variant="h5">
          {i}. {question}
        </Typography>
      </Grid>
      <Grid item container>
        <Grid item>
          <Button
            variant={selected === "A" ? "contained" : "outlined"}
            color="primary"
            id="A"
            onClick={handleClick}
          >
            A
          </Button>
        </Grid>
        <Grid item style={{ paddingLeft: "10px", paddingTop: "2px" }}>
          <Typography variant="h6">{A}</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item>
          <Button
            variant={selected === "B" ? "contained" : "outlined"}
            color="primary"
            id="B"
            onClick={handleClick}
          >
            B
          </Button>
        </Grid>
        <Grid item style={{ paddingLeft: "10px", paddingTop: "2px" }}>
          <Typography variant="h6">{B}</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item>
          <Button
            variant={selected === "C" ? "contained" : "outlined"}
            color="primary"
            id="C"
            onClick={handleClick}
          >
            C
          </Button>
        </Grid>
        <Grid item style={{ paddingLeft: "10px", paddingTop: "2px" }}>
          <Typography variant="h6">{C}</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item>
          <Button
            variant={selected === "D" ? "contained" : "outlined"}
            color="primary"
            id="D"
            onClick={handleClick}
          >
            D
          </Button>
        </Grid>
        <Grid item style={{ paddingLeft: "10px", paddingTop: "2px" }}>
          <Typography variant="h6">{D}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = {
  addAnswer
};

export default connect(
  null,
  mapDispatchToProps
)(Question);

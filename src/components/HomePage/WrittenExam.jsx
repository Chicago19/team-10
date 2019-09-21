import React from "react";
import axios from "axios";

import { connect } from "react-redux";

import { Grid, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Question from "./Question";
import data from "./Data";

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

const WrittenExam = props => {
  const { classes, email1, email2, answers } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {};

    if(email1 !== undefined) {
      obj = {
        "email": email1,
        answers
      }
    } else if(email2 !== undefined) {
      obj = {
        "email": email2,
        answers
      }
    } else {
      obj = { 
        "email": localStorage.getItem("email"),
        answers
      }
    }
    
    axios.put("/written_exam_score", obj)
      .then(res => {
        console.log(res);
        window.location.pathname = '/home';
      });
  };

  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.fullHeightContainer}
      >
        <Grid
          item
          style={{ paddingBottom: "20px", width: "100%", textAlign: "center" }}
        >
          <Typography variant="h2">Written Exam</Typography>
        </Grid>
      </Grid>

      {data.map((m, index) => (
        <div style={{ paddingLeft: "10px", paddingBottom: "5px" }} key={index}>
          <Question
            A={m.A}
            B={m.B}
            C={m.C}
            D={m.D}
            question={m.question}
            i={index + 1}
          />
        </div>
      ))}
      <Grid
        item
        style={{ paddingBottom: "80px", width: "100%", textAlign: "center" }}
      >
        <Button variant="outlined" onClick={handleSubmit}> Submit</Button>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    email1: state.RegistrationReducer.email,
    email2: state.LoginReducer.email,
    answers: state.ExamReducer.answers
  };
};

export default connect(mapStateToProps)(withStyles(styles)(WrittenExam));

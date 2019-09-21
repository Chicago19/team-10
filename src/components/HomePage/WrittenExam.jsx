import React from "react";
//import $ from "jquery";

import { Grid, TextField, Button, Typography, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
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
    const { classes } = props;

    return (
        <div>
            <Grid
                container
                direction="column"
                alignItems="center"
                className={classes.fullHeightContainer}
            >
                <Grid item style={{ paddingBottom: "20px", width: "100%", textAlign: "center" }}>
                    <Typography variant="h2">Written Exam</Typography>
                </Grid>
            </Grid>
         
            {data.map((m, index) =>
                    <div style={{ paddingLeft: "10px", paddingBottom: "5px" }}>
                        <Question A={m.A} B={m.B} C={m.C} D={m.D} question={m.question} key={index} i={index + 1} />
                    </div>
            )}
            <Grid item style={{ paddingBottom: "80px", width: "100%", textAlign: "center" }}>
               <Button variant="outlined"> Submit</Button>
               </Grid>
        </div>
    );
};

export default withStyles(styles)(WrittenExam);

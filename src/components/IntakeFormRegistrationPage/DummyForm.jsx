import React from "react";
import $ from "jquery";

import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {
    fullHeightContainer: {
        height: "100%"
    },
};

const DummyForm = props => {
    const { classes } = props;

    return (
        <Grid>
            container
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.fullHeightContainer}
            id="SSN"
        >
            <Grid item container justify="center" className={`${classes.headerPadding} ${classes.fullWidthItem}`}>
                <Typography variant="h2">Primary Mode of Transportation?</Typography>
            </Grid>
            <Grid item container justify="center" className={classes.fullWidthItem}>
                <TextField
                    required
                    label="SSN"
                    type="SSN"
                    margin="normal"
                    variant="outlined"
                    className={classes.centerItem}
                />
            </Grid>
            <Grid item container justify="center" className={`${classes.headerPadding} ${classes.fullWidthItem}`}>
                <Typography variant="h2">Perferred cite location?</Typography>
            </Grid>
            <Grid item container justify="center" className={classes.fullWidthItem}>
                <TextField
                    required
                    label="Nme"
                    type="Name"
                    margin="normal"
                    variant="outlined"
                    className={classes.centerItem}
                />
            </Grid>
            <Grid item container justify="center" className={`${classes.headerPadding} ${classes.fullWidthItem}`}>
                <Typography variant="h2">Did you complete the Empowerment Survey?</Typography>
            </Grid>
            <Grid item container justify="center" className={classes.fullWidthItem}>
                <TextField
                    required
                    label="Marital"
                    type="Marital"
                    margin="normal"
                    variant="outlined"
                    className={classes.centerItem}
                />
            </Grid>
            <Grid item container justify="center" className={`${classes.headerPadding} ${classes.fullWidthItem}`}>
                <Typography variant="h2">Example Question 4</Typography>
            </Grid>
            <Grid item container justify="center" className={classes.fullWidthItem}>
                <TextField
                    required
                    label="Cell"
                    type="Cell"
                    margin="normal"
                    variant="outlined"
                    className={classes.centerItem}
                />
            </Grid>
            <Grid item container justify="center" className={`${classes.headerPadding} ${classes.fullWidthItem}`}>
                <Typography variant="h2">Example Question 5</Typography>
            </Grid>
            <Grid item container justify="center" className={classes.fullWidthItem}>
                <TextField
                    required
                    label="Highest Education Level"
                    type="HighestEducation Level"
                    margin="normal"
                    variant="outlined"
                    className={classes.centerItem}
                />
            </Grid>
        </Grid>
    )
};

export default withStyles(styles)(DummyForm);



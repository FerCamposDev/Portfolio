import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Grid } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

const useStyles = makeStyles({
    root: {
        flexGrow: 0,
    },
});

export default function CustomizedProgressBars({ nombre, nivel }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={3} >
                    <p>{nombre}</p>
                </Grid>
                <Grid item xs={9} >
                    <BorderLinearProgress variant="determinate" value={nivel} />
                </Grid>
            </Grid>
        </div>
    );
}
import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
//        color: theme.palette.grey[500],
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        opacity: 1,


        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                border: `1px solid ${theme.palette.grey[500]}`,

            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        //backgroundColor: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
    },
    checked: {},
}))(Switch);

export default function CustomizedSwitches() {
    const [ingles, setIngles] = React.useState(true);

    useEffect(() => {
        const userLang = navigator.language || navigator.userLanguage;
        let defaultLocale = userLang.substring(0, 2);

        let langSave = localStorage.getItem("lang");
        if (langSave) {
            defaultLocale = langSave;
        }

        switch (defaultLocale) {
            case "es": setIngles(false); break;
            case "en": setIngles(true); break;
        }
        console.log(ingles)
    }, [])


    const handleChange = (event) => {
        setIngles(event.target.checked);
        if (event.target.checked) {
            localStorage.setItem("lang", "en");
            window.location.href = window.location.href.replace('/es', '/en')
        } else {
            localStorage.setItem("lang", "es");
            window.location.href = window.location.href.replace('/en', '/es')
        }
    };

    return (
        <Grid component="label" container justify="center" alignItems="center" spacing={1}>
            <Grid item>Español</Grid>
            <Grid item>
                <AntSwitch checked={ingles} onChange={handleChange} name="checkedC" />
            </Grid>
            <Grid item>English</Grid>
        </Grid>
    );
}
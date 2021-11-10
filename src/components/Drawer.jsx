import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, Grid, Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom'

import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { useTranslation } from 'react-i18next';

import SwitchIdioma from './SwitchIdioma';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "#ABE9F4",
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    divider : {
        width: "3px",
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
    }
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function PersistentDrawerLeft() {
    const { t } = useTranslation();
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    let lang = "/" + localStorage.getItem("lang") || "";


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>


                    <Grid container>
                        <Link to="/inicio"
                            component={Button}
                            color="inherit"
                        >
                            <Typography variant="h6">
                                {t('menu.home')}
                            </Typography>
                        </Link>
                    </Grid>

                    <Hidden smDown>

                        <Grid container justify="flex-end" alignItems="center">
                            <Link to="/curriculum"
                                component={Button}
                                color="inherit"
                            >
                                {t('menu.resume')}
                            </Link>
                            <Link to="/proyectos"
                                component={Button}
                                color="inherit"

                            >
                                {t('menu.projects')}
                            </Link>
                            <Link to="/contacto"
                                component={Button}
                                color="inherit"
                            >
                                {t('menu.contact')}
                            </Link>
                            
                            <Divider orientation="vertical" flexItem className={classes.divider}/>

                            <Grid item>
                                <SwitchIdioma/>
                            </Grid>
                        </Grid>
                    </Hidden>

                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItemLink href={lang + "/inicio"}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            {t('menu.home')}
                        </ListItemText>
                    </ListItemLink>

                    <ListItemLink href={lang + "/proyectos"}>
                        <ListItemIcon>
                            <AppsIcon />
                        </ListItemIcon>
                        <ListItemText>
                            {t('menu.projects')}
                        </ListItemText>
                    </ListItemLink>

                    <ListItemLink href={lang + "/curriculum"}>
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText>
                            {t('menu.resume')}
                        </ListItemText>
                    </ListItemLink>

                    {/* <ListItemLink href={lang+"/sobre-mi"}>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText>
                            {t('menu.about')}
                        </ListItemText>
                    </ListItemLink> */}

                    <ListItemLink href={lang + "/contacto"}>
                        <ListItemIcon>
                            <ContactMailIcon />
                        </ListItemIcon>
                        <ListItemText>
                            {t('menu.contact')}
                        </ListItemText>
                    </ListItemLink>
                </List>
                <Divider />
                <List >
                    <ListItem >
                        <SwitchIdioma />
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {/* Lorem */}
            </main>
        </div>
    );
}

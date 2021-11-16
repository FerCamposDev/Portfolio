import React from 'react';
import { useNavigate } from 'react-router';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ContactMailIcon from '@material-ui/icons/ContactMail';

import useWordings from '../../i18n/wordings';
import useDrawerStyles from './drawerStyles';
import MyAppBar from './MyAppBar';
import LanguageSwitch from './LanguageSwitch';

export default function PersistentDrawerLeft() {
  const wordings = useWordings();
  const classes = useDrawerStyles();
  const theme = useTheme();
  const navigate = useNavigate();
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
      <MyAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClick={handleDrawerClose}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => navigate("/home")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              {wordings.menu.home}
            </ListItemText>
          </ListItem>

          <ListItem button onClick={() => navigate("/projects")}>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText>
              {wordings.menu.projects}
            </ListItemText>
          </ListItem>

          <ListItem button onClick={() => navigate("/resume")}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText>
              {wordings.menu.resume}
            </ListItemText>
          </ListItem>

          <ListItem button onClick={() => navigate("/contact")}>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText>
              {wordings.menu.contact}
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List >
          <ListItem >
            <LanguageSwitch />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}

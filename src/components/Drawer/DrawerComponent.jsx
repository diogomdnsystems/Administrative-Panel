import * as React from "react";
import "./DrawerComponent.scss";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CategoryIcon from '@mui/icons-material/Category';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SettingsIcon from '@mui/icons-material/Settings';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from '../../pages/Dashboard/Dashboard'
import Delivery from '../../pages/Delivery/Delivery'
import Notifications from '../../pages/Notifications/Notifications'
import Products from '../../pages/Products/Products'
import Category from '../../pages/Category/Category'
import Settings from '../../pages/Settings/Settings'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  height: "100vh",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function DrawerComponent() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} className="Drawer-Toolbar">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Painel Administrativo
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} className="Drawer-Header">
          <DrawerHeader className="Drawer-Container-IconButton">
            <IconButton
              className="Drawer-IconButton"
              onClick={handleDrawerClose}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <Link to="/" title="Dashboard">
              <ListItem
                className="Drawer-ListItem"
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    className="Drawer-Icon"
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="Drawer-Text-Icon"
                    primary="Dashboard"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link to="/delivery" title="Entregas">
              <ListItem
                className="Drawer-ListItem"
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    className="Drawer-Icon"
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <DeliveryDiningIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="Drawer-Text-Icon"
                    primary="Entregas"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link to="/notifications" title="Notificações">
              <ListItem
                className="Drawer-ListItem"
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    className="Drawer-Icon"
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <NotificationsActiveIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="Drawer-Text-Icon"
                    primary="Notificações"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/products" title="Produtos">
              <ListItem
                className="Drawer-ListItem"
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    className="Drawer-Icon"
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <AddBusinessIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="Drawer-Text-Icon"
                    primary="Produtos"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/category" title="Categorias">
              <ListItem
                className="Drawer-ListItem"
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    className="Drawer-Icon"
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="Drawer-Text-Icon"
                    primary="Categorias"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/settings" title="Configurações">
              <ListItem
                className="Drawer-ListItem"
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    className="Drawer-Icon"
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="Drawer-Text-Icon"
                    primary="Configurações"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, backgroundColor: '#f4f3ee' }}
          className="Drawer-Box-Header"
        >
          <DrawerHeader />
          <Routes>
              <Route exact path="/" element={<Dashboard />}/>
              <Route exact path="/delivery" element={<Delivery />}/>
              <Route exact path="/notifications" element={<Notifications />}/>
              <Route exact path="/products" element={<Products />}/>
              <Route exact path="/category" element={<Category />}/>
              <Route exact path="/settings" element={<Settings />}/>
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

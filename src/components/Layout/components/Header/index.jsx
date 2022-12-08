import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { AccountCircle as AccountIcon, ShoppingCart as CartIcon, Menu as MenuIcon } from '@mui/icons-material';

import MenuDrawer from "./components/MenuDrawer";
import CartDrawer from "./components/CartDrawer";

function Header() {
  return (
    <>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Veego
                </Typography>
                <IconButton
                    size="large"
                    aria-label="login or create an account"
                    aria-controls="menu-appbar"
                    aria-haspopup="false"
                    color="inherit"
                >
                    <AccountIcon />
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="cart"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <CartIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        <MenuDrawer />
        <CartDrawer />
    </>
  );
}

export default Header;
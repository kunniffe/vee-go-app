import { useState } from "react";
import {
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import { Home as HomeIcon, MenuBook as RecipesIcon, Favorite as WishlistIcon } from "@mui/icons-material"

function CartDrawer() {
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawer(open);
    };

    return (
        <>
            <Button onClick={toggleDrawer(true)}>Open Cart</Button>
            <Drawer
                anchor="right"
                open={drawer}
                onClose={toggleDrawer(false)}
            >
                <List>
                    <ListItem key="home" disablePadding>
                        <ListItemButton href="/">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key="recipes" disablePadding>
                        <ListItemButton href="/recipes">
                            <ListItemIcon>
                                <RecipesIcon />
                            </ListItemIcon>
                            <ListItemText primary="Recipes" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key="wishlist" disablePadding>
                        <ListItemButton href="/account/wishlist">
                            <ListItemIcon>
                                <WishlistIcon />
                            </ListItemIcon>
                            <ListItemText primary="Wishlist" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default CartDrawer;
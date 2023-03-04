import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, useMediaQuery } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';
import categories from './../data/category';



// we need the left HamburgerDrawer only
export default function TemporaryDrawer({ setCategory }) {
    const [state, setState] = React.useState({
        left: false
    });



    // darkmode theme
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );



    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const style = {
        paddingLeft: 10,
        paddingRight: 5
    }

    const list = (anchor) => (

        <Box
            style={style}
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >


            <List>
                <ListItem>
                    Categories
                </ListItem>
            </List>
            <Divider />


            {/* impoting those categories made in folder of categories */}

            <List>
                {categories.map((text, index) => (
                    <ListItem
                        style={{ height: 40, borderRadius: 3 }}
                        button
                        onClick={() => setCategory(text)}
                        key={text}
                    >
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box >
    );

    return (
        <div>

            <React.Fragment key={"left"}>

                <Button onClick={toggleDrawer("left", true)}>
                    <MenuIcon />
                </Button>

                {/* using dark mode */}

                <ThemeProvider theme={theme}>

                    <Drawer
                        anchor={"left"}
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}
                    >
                        {list("left")}
                    </Drawer>

                </ThemeProvider>


            </React.Fragment>

        </div>
    );
}
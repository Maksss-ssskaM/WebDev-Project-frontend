import React, {useContext} from 'react';
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import {LightMode, DarkMode, Search, NotificationsNone, MenuOutlined} from '@mui/icons-material';
import {ColorModeContext} from "../../theme";
import {useStyles} from "./styles";
import FlexBetween from "../flex-between";
import {ITopbarProps} from "../../common/types/topbar";


const TopBarComponent: React.FC<ITopbarProps> = (props: ITopbarProps): JSX.Element => {
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    const {isOpen, setIsOpen} = props

    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar className={classes.toolbar}>
                <FlexBetween>
                    <MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}/>
                    <Typography variant='body1'>Welcome, Maks</Typography>
                </FlexBetween>
                <Box display='flex'>
                    <Grid onClick={colorMode.toggleColorMode} className={classes.iconBlock}>
                        <IconButton className={classes.themeIcon}>
                            {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
                        </IconButton>
                        <IconButton>
                            <NotificationsNone/>
                        </IconButton>
                    </Grid>
                    <Grid className={classes.searchBlock}>
                        <IconButton className={classes.searchIcon}>
                            <Search/>
                        </IconButton>
                        <InputBase className={classes.searchInput} placeholder='Поиск'/>
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default TopBarComponent;
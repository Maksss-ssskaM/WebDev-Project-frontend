import React, {useEffect, useState} from 'react';
import {useStyles} from './styles';
import  {
    Box,
    Drawer,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";

import {
    HomeOutlined,
    ChevronLeftOutlined,
    ChevronRightOutlined,
    TimelineOutlined,
    MenuBookOutlined,
    SettingsOutlined,
    LogoutOutlined, AutoGraphOutlined
} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "../flex-between";
import {tokens} from "../../theme";
import Logo from '../../assets/images/sidebar/logo.png'

const SidebarComponent = (props: any) => {
    const [active, setActive] = useState('')
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props
    const classes = useStyles()
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])

    return (
        <Box component='nav'>
            {isOpen && (
                <Drawer
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant='persistent'
                    anchor='left'
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }
                    }}
                >
                    <Box className={classes.navBlock}>
                        <Box>
                            <FlexBetween>
                                <Box className={classes.brand}>
                                    <img src={Logo} alt="Logo image"/>
                                    <Typography
                                        variant='h1'
                                        color={theme.palette.mode === 'dark' ?
                                            colors.white.DEFAULT :
                                            colors.black.DEFAULT}>Demo</Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                        <ChevronLeftOutlined/>
                                    </IconButton>
                                    )}
                            </FlexBetween>
                        </Box>
                        <List className={classes.navList}>
                            <ListItem key={1}>
                                <ListItemButton onClick={() => navigate('/')} className={classes.navItem}>
                                    <ListItemIcon>
                                        <HomeOutlined/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='body1'>Главная</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem key={2}>
                                <ListItemButton onClick={() => navigate('/watchlist')} className={classes.navItem}>
                                    <ListItemIcon>
                                        <AutoGraphOutlined/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='body1'>Избраное</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem key={3}>
                                <ListItemButton onClick={() => navigate('/news')} className={classes.navItem}>
                                    <ListItemIcon>
                                        <MenuBookOutlined/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='body1'>Новости</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem key={4}>
                                <ListItemButton onClick={() => navigate('/settings')} className={classes.navItem}>
                                    <ListItemIcon>
                                        <SettingsOutlined/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='body1'>Настройки</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                    <Box width='100%'>
                        <List>
                            <ListItem>
                                <ListItemButton className={classes.navItem}>
                                    <ListItemIcon>
                                        <LogoutOutlined/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography>Logout</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SidebarComponent;
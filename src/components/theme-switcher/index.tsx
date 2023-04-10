import React, { useContext } from "react";
import { Grid, IconButton, useTheme } from "@mui/material";
import { DarkMode, LightMode, NotificationsNone } from "@mui/icons-material";
import { ColorModeContext } from "../../theme";
import { useStyles } from "./styles";

const ThemeSwitcherComponent = () => {
    const theme = useTheme();
    const colorMode: any = useContext(ColorModeContext);
    const classes = useStyles();
    return (
        <Grid onClick={colorMode.toggleColorMode} className={classes.iconBlock}>
            <IconButton className={classes.themeIcon}>
                {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
            </IconButton>
            <IconButton>
                <NotificationsNone />
            </IconButton>
        </Grid>
    );
};

export default ThemeSwitcherComponent;

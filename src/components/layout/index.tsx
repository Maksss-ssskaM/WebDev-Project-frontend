import React, { useState } from "react";
import { ILayout } from "../../common/types/layout";
import TopBarComponent from "../topbar";
import { useLocation } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import SidebarComponent from "../sidebar";
import { useStyles } from "./styles";

const LayoutComponent: React.FC<ILayout> = ({
    children,
}: ILayout): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isNonMobile = useMediaQuery("(min-width: 760px)");
    const classes = useStyles();
    return location.pathname === "/login" ||
        location.pathname === "/register" ? (
        <>{children}</>
    ) : (
        <>
            <Box
                display={isNonMobile ? "flex" : "block"}
                justifyContent="space-between"
                width="100%"
                height="100%"
            >
                <SidebarComponent
                    isNonMobile={isNonMobile}
                    drawerWidth="250px"
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
                <Box className={classes.mainSection}>
                    <TopBarComponent
                        isOpen={isOpen}
                        isNonMobile={isNonMobile}
                        setIsOpen={setIsOpen}
                    />
                    {children}
                </Box>
            </Box>
        </>
    );
};

export default LayoutComponent;

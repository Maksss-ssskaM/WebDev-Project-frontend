import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode);

    return {
        root: {
            position: "static",
            background: `${colors.primary.DEFAULT} !important`,
            borderBottom: `1px solid ${colors.borderColor}`,
            boxShadow: "none !important",
        },
        toolbar: {
            justifyContent: "space-between",
            padding: "24px 48px",
        },
        menuIcon: {
            marginRight: "10px",
            cursor: "pointer",
        },
    };
});

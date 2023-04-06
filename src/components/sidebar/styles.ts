import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        navBlock: {
            borderBottom: `1px solid ${colors.borderColor}`,
            width: "100%",
        },
        brand: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "30px 32px",
            cursor: "pointer",
        },
        navItem: {
            "&:hover": {
                backgroundColor: "#9599BC !important",
                color: "#fff",
                borderRadius: "4px",
                "& .MuiSvgIcon-root": {
                    color: colors.white.DEFAULT,
                },
            },
        },
        navList: {
            marginBottom: "55px",
        },
        active: {
            backgroundColor: "#9599BC !important",
            color: "#fff !important",
            borderRadius: "4px !important",
        },
    };
});

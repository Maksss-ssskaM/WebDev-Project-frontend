import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        root: {
            flexGrow: 1,
            padding: "32px",
        },
        topCardItem: {
            backgroundColor: `${
                theme.palette.mode === "light"
                    ? colors.primary.DEFAULT
                    : colors.primary[600]
            }`,
            padding: "20px 16px",
            minHeight: 185,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
        },
        assetName: {
            fontSize: 25,
            fontWeight: 600,
            lineHeight: "30px",
            textTransform: "capitalize",
            margin: 0,
        },
        itemDetails: {
            display: "flex",
            height: "100%",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "35px",
        },
        cardPrice: {
            fontSize: 32,
            fontWeight: 700,
            lineHeight: "48px",
            margin: 0,
        },
        additionalInfo: {
            display: "flex",
            alignItems: "center",
        },
        priceTrend: {
            display: "flex",
            padding: "2px",
            backgroundColor: "#A9FFA7",
            borderRadius: 4,
        },
        trendUp: {
            backgroundColor: "#A9FFA7",
            color: "#037400",
        },
        trendDown: {
            backgroundColor: "#FFA7A7",
            color: "#740000",
        },
        cardCapitalize: {
            color: `${colors.secondary.DEFAULT}`,
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "21px",
            padding: "0 0 2px 10px",
            margin: 0,
        },
        areaChart: {
            marginBottom: 32,
        },
        lineChartBlock: {
            backgroundColor: `${
                theme.palette.mode === "light"
                    ? colors.primary.DEFAULT
                    : colors.primary[600]
            }`,
            padding: "20px 16px",
            marginBottom: 32,
            minHeight: 270,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
        },
    };
});

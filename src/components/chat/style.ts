import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);

  return {
    chatBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      maxWidth: "400px",
      margin: "30px auto",
      borderRadius: "30px",
      overflow: "hidden",
      boxShadow: "-3px -2px 20px 5px #202020",
    },

    chatElement: {
      display: "flex",
      flexDirection: "column",
      width: "350px",
      minHeight: "400px",
      overflow: "hidden",
      borderRadius: "40px",
      padding: "16px",
      margin: "16px 0",
      backgroundColor: `${
        theme.palette.mode === "light"
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
    },

    formElement: {
      margin: "16px",
    },

    submitButton: {
      width: "100%",
      borderRadius: "4px",
      backgroundColor: "#9599BC !important",
    },
  };
});

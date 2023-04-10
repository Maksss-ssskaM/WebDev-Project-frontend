import React from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
import { useStyles } from "./styles";
import { ISingleAsset } from "../../common/types/assets";
import { useAppSelector } from "../../utils/hook";

const SearchBarComponent = () => {
  const assetsArray: ISingleAsset[] = useAppSelector(
    (state) => state.assets.assets,
  );

  const classes = useStyles();
  return (
    <Stack sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        renderInput={(element) => (
          <TextField
            {...element}
            label="Поиск"
            inputProps={{
              ...element.inputProps,
              type: "search",
            }}
          />
        )}
        options={assetsArray.map((element: { name: string }) => element.name)}
      ></Autocomplete>
    </Stack>
  );
};

export default SearchBarComponent;

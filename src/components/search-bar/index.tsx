import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
import { ISingleAsset } from "../../common/types/assets";
import { useAppSelector } from "../../utils/hook";
import { useNavigate } from "react-router-dom";

const SearchBarComponent: React.FC = (): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<string | null>("");
  const navigate = useNavigate();
  const assetsArray: ISingleAsset[] = useAppSelector(
    (state) => state.assets.assets,
  );
  return (
    <Stack sx={{ width: 300 }}>
      <Autocomplete
        value={selectedItem}
        onChange={(e: any, value: string | null) => {
          navigate(`single/${value}`);
          setSelectedItem(null);
        }}
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

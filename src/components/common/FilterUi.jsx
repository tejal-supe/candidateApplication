import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const FilterUi = ({ data, filterName, fil, setFil, multi, placeholder }) => {
  const [value, setValue] = useState([]);

  return (
    <div>
      <Autocomplete
        multiple={multi ? true : false}
        id="fixed-tags-demo"
        value={value}
        onChange={(event, newValue) => {
          Array.isArray(newValue)
            ? setValue([...newValue])
            : setValue(newValue);
          setFil({ ...fil, [filterName]: newValue });
        }}
        options={data}
        getOptionLabel={(option) =>
          filterName == "minJdSalary" ? option + " L" : option
        }
        style={{ width: 230, marginTop: "10px" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={placeholder}
            placeholder={placeholder}
            value={value}
          />
        )}
      />
    </div>
  );
};

export default FilterUi;

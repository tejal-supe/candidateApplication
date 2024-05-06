import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { FILTER } from "../../utils/FilterData";
import FilterUi from "./FilterUi";
import { applyFilter } from "../../store/filterSlice";

const Filter = () => {
  const [fil, setFil] = useState({});
  const dispatach = useDispatch();

  useEffect(() => {
    dispatach(applyFilter(fil));
  }, [fil]);

  return (
    <div className="filters-div">
      {FILTER.map((data, id) => {
        return (
          <FilterUi
            data={data.data}
            filterName={data.filterName}
            multi={data.multi}
            fil={fil}
            setFil={setFil}
            placeholder={data.placeholder}
          />
        );
      })}
      <TextField
        id="outlined-basic"
        label="Search Company Name"
        variant="outlined"
        value={fil.companyName}
        onChange={(e) => setFil({ ...fil, companyName: e.target.value })}
        style={{ width: 230, marginTop: "10px" }}
      />
    </div>
  );
};

export default Filter;

import React, { useEffect, useState } from 'react'
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch } from 'react-redux';
import { applyFilter } from '../../store/filterSlice';



const FilterUi = ({ data, filterName }) => {
  const fixedOptions = data;
  const dispatach = useDispatch();
  const [value, setValue] = useState([]);
  const [filters, setFilters] = useState({});
  console.log(value, "value", filters);
  useEffect(() => {
    dispatach(applyFilter(filters))
  }, [value])
  
  return (
    <div>
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue([...newValue]);
          setFilters({...filters,[filterName]:newValue})
        }}
        options={data}
        getOptionLabel={(option) => option}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} label={filterName} placeholder={filterName} />
        )}
      />
    </div>
  );
};
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];
export default FilterUi
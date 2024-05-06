import React, { useEffect, useState } from 'react'
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch } from 'react-redux';
import { applyFilter } from '../../store/filterSlice';



const FilterUi = ({ data, filterName,fil,setFil,multi,placeholder }) => {
  const fixedOptions = data;
  const dispatach = useDispatch();
  const [value, setValue] = useState([]);
 
  console.log(value);
  return (
    <div>
      <Autocomplete
        multiple={multi?true:false}
        id="fixed-tags-demo"
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue,'new ',value);
          Array.isArray(newValue)?setValue([...newValue]):setValue(newValue)
          setFil({...fil,[filterName]:newValue})
          
        }}
        options={data}
        getOptionLabel={(option) => filterName=="minJdSalary"?option+" L":option}
        style={{ width: 250 , marginTop:"10px"}}
        renderInput={(params) => (
          <TextField {...params} label={placeholder} placeholder={placeholder} />
        )}
      />
    </div>
  );
};

export default FilterUi
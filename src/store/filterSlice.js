import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filters: {
      roles: [],
      minExp: 0,
      location: [],
      type: [],
      minPay: 0,
      companyName: "",

    },
    jobsArray: []
  },
  reducers: {
    applyFilter: (state, action) => {
      state.filters= action.payload 
    }
  }

})
export const { applyFilter } = filterSlice.actions;

export const selectFilteredJobs = state => {
   const { roles, minExp, location, type, minPay, companyName } =
     state.jobsArray.filters;
   return state.jobsArray.filter((job) => {
     if (roles.length > 0 && !roles.includes(job.role)) return false;
     if (minExp && job.experience < minExp) return false;
     if (location.length > 0 && !location.includes(job.location)) return false;
     if (type.length > 0 && !type.includes(job.type)) return false;
     if (minPay && job.pay < minPay) return false;
     if (
       companyName &&
       job.companyName.toLowerCase() !== companyName.toLowerCase()
     )
       return false;
     return true;
   });
};

export default filterSlice.reducer;

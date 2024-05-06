import { createSelector, createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filters: {
      jobRole: [],
      minExp: 0,
      minJdSalary: 0,
      companyName: "",
      type: "",
      location: "",
    },
    jobsArray: [],
  },
  reducers: {
    applyFilter: (state, action) => {
      state.filters = action.payload;
    },
    getData: (state, action) => {
      state.jobsArray = action.payload;
    },
  },
});
export const { applyFilter, getData } = filterSlice.actions;
const selectJobs = (state) => state.filterSlice?.jobsArray || [];
const selectFilters = (state) => state.filterSlice.filters;

export const selectFilteredJobs = createSelector(
  [selectJobs, selectFilters],
  (jobs, filters) => {
    return jobs.filter((job) => {
      let keep = true;
      if (
        filters.jobRole?.length > 0 &&
        !filters.jobRole?.includes(job.jobRole)
      ) {
        keep = false;
      }
      if (
        filters.location?.length > 0 &&
        !filters.location?.includes(job.location)
      ) {
        keep = false;
      }
      if (
        filters.minExp > 0 &&
        (job.minExp === null || job.minExp > filters.minExp)
      ) {
        keep = false;
      }
      if (
        filters.minJdSalary > 0 &&
        (job.minJdSalary === null || job.minJdSalary < filters.minJdSalary)
      ) {
        keep = false;
      }
      if (
        filters?.companyName &&
        !job.companyName
          ?.toLowerCase()
          .includes(filters?.companyName.toLowerCase())
      ) {
        keep = false;
      }
      if (
        filters?.type &&
        !job.location?.toLowerCase().includes(filters?.type?.toLowerCase())
      ) {
        keep = false;
      }

      return keep;
    });
  }
);

export default filterSlice.reducer;

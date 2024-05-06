import React, { useEffect, useState } from 'react'
import { FILTER } from '../../utils/FilterData'
import FilterUi from './FilterUi'
import { useDispatch } from 'react-redux';
import { applyFilter } from '../../store/filterSlice';

const Filter = () => {
    const [fil, setFil] = useState({});
    const dispatach = useDispatch();
    useEffect(() => {
      dispatach(applyFilter(fil));
    }, [fil]);

  return (
    <div className='filters-div'> 
    {
        FILTER.map((data,id)=>{
            return (
                <FilterUi data={data.data} filterName={data.filterName} multi={data.multi} fil={fil} setFil={setFil} placeholder={data.placeholder}/>
            )
        })
    }
      <input
        type="text"
        value={fil.companyName}
        onChange={(e) => setFil({ ...fil, companyName: e.target.value })}
        placeholder='Company'
      />
    </div>
  )
}

export default Filter
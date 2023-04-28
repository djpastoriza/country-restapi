import React from 'react'
import { REGIONS } from './../constants/regions';
import { v4 as uuidv4 } from 'uuid';

const CountryForm = ({ handleSearcher, handleContinent, searcher, continent }) => {

    return (
        <div className='flex flex-col lg:flex-row items-start gap-7 lg:justify-between'>
            <input value={searcher} name="searcher" onChange={handleSearcher} className='custom-input w-full mb-7 lg:w-[525px]' type='text' placeholder='Search for a country...' />
            <select value={continent} name="continent" onChange={handleContinent} className='custom-input custom-select w-1/2 lg:w-[300px]'>
                <option value="">Filter by Region</option>
                {REGIONS.map((region) => (
                    <option key={uuidv4()} value={region.value}>{region.name}</option>
                ))}
            </select>
        </div>

    )
}

export default CountryForm
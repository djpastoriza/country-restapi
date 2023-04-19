import React, { useState } from 'react'
import CountryForm from '../components/CountryForm'
import CountryList from '../components/CountryList'

const HomePage = () => {
    const [searcher, setSearcher] = useState('');
    const [continent, setContinent] = useState('');

    const handleSearcher = (event) => {
        const { value } = event.target;
        setSearcher(value);
    }

    const handleContinent = (event) => {
        const { value } = event.target;
        setContinent(value);
    }

    return (
        <div className='px-7'>
            <CountryForm handleSearcher={handleSearcher} handleContinent={handleContinent} continent={continent} searcher={searcher} />
            <CountryList searcher={searcher} continent={continent} />
        </div>
    )
}

export default HomePage
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import CountryForm from '../components/CountryForm'
import CountryList from '../components/CountryList'
import debounce from 'just-debounce-it';
import { useCountries } from '../hooks/useCountries';
import { useSearcherFilter } from '../hooks/useSearcherFilter';

const HomePage = () => {
    const [searcher, setSearcher] = useState('');
    const [continent, setContinent] = useState('');
    const { countries, getCountries } = useCountries();
    const { filterData, handleFilterData } = useSearcherFilter({ searcher, data: countries || [] })

    useEffect(() => {
        getCountries({ continent });
    }, [])

    useEffect(() => {
        handleFilterData({ searcher, countries })
    }, [searcher, countries])

    const handleSearcher = (event) => {
        const { value } = event.target
        setSearcher(value);
        debounceCountries();
    }

    const handleContinent = (event) => {
        const { value } = event.target
        setContinent(value);
        getCountries({ continent: value })
    }

    const debounceCountries = useCallback(debounce(() => {
        getCountries({ continent })
    }, 300), [continent]);


    return (
        <div className='px-7'>
            <CountryForm handleSearcher={handleSearcher} handleContinent={handleContinent} continent={continent} searcher={searcher} />
            <CountryList searcher={searcher} countries={filterData} />
        </div>
    )
}

export default HomePage
import CountryCard from './CountryCard';
import { useCountries } from "../hooks/useCountries";
import { v4 as uuidv4 } from 'uuid';
import { useSearcherFilter } from '../hooks/useSearcherFilter';
import { useEffect, useState } from 'react';

const CountryList = ({ searcher, continent }) => {

    const { countries } = useCountries({ continent, searcher });
    const { filterData } = useSearcherFilter({ searcher, data: countries || [] })

    return (
        <section className='p-7 flex flex-col justify-center items-center gap-7
                            lg:flex-row lg:flex-wrap lg:px-0 md:py-7 lg:justify-start lg:basis-[25%] lg:gap-[6.6%]'>
            {
                countries ?
                    filterData.length !== 0
                        ?
                        filterData.map((country) => (
                            <CountryCard key={uuidv4()} {...country} />
                        ))
                        :
                        <div>No hay resultados de su busqueda</div>
                    : <div>Cargando...</div>
            }
        </section>
    )
}

export default CountryList
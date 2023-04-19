import React from 'react'
import ReturnButton from '../components/ReturnButton'
import { useParams } from 'react-router-dom'
import { useCountry } from '../hooks/useCountry'
import ItemCard from '../components/ItemCard'



const CountryPage = () => {

    const { name } = useParams()
    const { country } = useCountry({ name })

    return (
        <div className='px-7'>
            <ReturnButton />
            {
                country ?
                    <article className='flex flex-col mt-7 lg:flex-row'>
                        <img src={country.flags.png} alt={country.flags.alt} className="mb-7 object-contain w-full max-w-[600px] max-h-[480px] lg:w-1/2" />
                        <div className='lg:w-1/2 ml-7'>
                            <main>
                                <header className="font-bold mb-7 text-[28px]">{country.name.common}</header>
                                <section className='mb-7'>
                                    <div className='mb-3'><span className="font-bold">Population:</span> {country.population}</div>
                                    <div className='mb-3'><span className="font-bold">Region:</span> {country.region}</div>
                                    <div className='mb-3'><span className="font-bold">Sub Region:</span> {country.subregion}</div>
                                    <div className='mb-3'><span className="font-bold">Capital:</span> {country.capital}</div>
                                </section>
                                <section className='mb-7'>
                                    <div className='mb-3'><span className="font-bold">Top Level Domain:</span> {country.tld.join(',')}</div>
                                    <div className='mb-3'><span className="font-bold">Currencies:</span> {country.region}</div>
                                    <div className='mb-3'><span className="font-bold">Languages:</span> {country.languages.join(',')}</div>
                                </section>
                                {
                                    country?.borders &&
                                    <section className='mb-7'>
                                        <div>
                                            <span className="font-bold text-[18px]">Border Countries:</span>
                                            <div className='flex gap-3 mt-3'>
                                                {country.borders.map((b) => (
                                                    <ItemCard key={b} text={b} />
                                                ))}
                                            </div>
                                        </div>
                                    </section>
                                }

                            </main>
                        </div>
                    </article>
                    : <div>Cargando...</div>
            }
        </div>
    )
}

export default CountryPage
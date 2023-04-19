import axios from "axios"
import { useEffect, useState } from "react"


const COUNTRYAPI = 'https://restcountries.com/v3.1/name/'

export const useCountry = ({ name }) => {

    const [country, setCountry] = useState(null)

    useEffect(() => {
        axios.get(COUNTRYAPI + name).then(({ data }) => {
            if (data?.length) {
                const mappedData = { ...data[0], languages: Object.values(data[0].languages) }
                const countriesData = { ...mappedData };
                setCountry(countriesData)
            }
        })
    }, [name])


    return { country }


}


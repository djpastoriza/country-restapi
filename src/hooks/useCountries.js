import axios from "axios";
import { useState } from "react";


const ALCOUNTRYAPI = 'https://restcountries.com/v3.1/all?fields=name,flags,region,population'
const REGIONAPI = 'https://restcountries.com/v3.1/region/'

export const useCountries = () => {
    const [countries, setCountries] = useState(null);

    const getCountries = ({ continent }) => {
        let api = ALCOUNTRYAPI;
        if (continent) {
            api = REGIONAPI + `${continent}`
        }
        axios.get(api).then(({ data }) => {
            if (data) {
                const mappedData = data.map((d) => {
                    return { ...d, name: d.name.common }
                })
                const countriesData = [...mappedData];
                setCountries(countriesData)
            }
        })
    }

    return { countries, getCountries }
}

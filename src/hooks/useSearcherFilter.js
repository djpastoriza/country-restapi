import { useEffect, useState } from "react";

export const useSearcherFilter = ({ searcher, data, parameterToFind = 'name' }) => {
    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
        const filter = handleFilterData();
        setFilterData(filter);

    }, [searcher, data])

    const handleFilterData = () => {
        const search = searcher.toLowerCase(searcher)
        const result = data.filter(item => String(item[parameterToFind]).toLowerCase().includes(search));
        return result;
    }

    if (!searcher) return { filterData: data }

    return { filterData }
}

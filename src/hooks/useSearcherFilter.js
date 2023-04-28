import { useState } from "react";

export const useSearcherFilter = ({ parameterToFind = 'name' }) => {
    const [filterData, setFilterData] = useState([]);

    const handleFilterData = ({ searcher, countries }) => {
        const search = searcher.toLowerCase(searcher)
        const result = countries?.filter(item => String(item[parameterToFind]).toLowerCase().includes(search));
        setFilterData(!search ? countries : result);
    }

    return { filterData, handleFilterData }
}

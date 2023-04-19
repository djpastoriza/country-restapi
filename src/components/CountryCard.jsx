import { useNavigate } from "react-router-dom"

const CountryCard = ({ name, population, region, capital, flags }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${name}`)
    }


    return (
        <article onClick={handleClick} className="cursor-pointer drop-shadow-md bg-white rounded-lg overflow-hidden lg:w-[20%] lg:mb-7 dark:bg-[#2b3743]"
        >
            <img src={flags.png} alt={flags.alt} className="w-full h-[200px] object-cover" />
            <div className="p-7">
                <header className="font-bold mb-3">{name}</header>
                <main>
                    <div><span className="font-bold">Population:</span> {population}</div>
                    <div><span className="font-bold">Region:</span> {region}</div>
                    <div><span className="font-bold">Capital:</span> {capital}</div>
                </main>
            </div>
        </article >
    )
}

export default CountryCard
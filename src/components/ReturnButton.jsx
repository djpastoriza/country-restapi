import { useNavigate } from "react-router-dom"


const ReturnButton = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <button className="drop-shadow-md bg-white px-7 py-3 dark:bg-[#2b3743]" onClick={handleClick}>← Back</button>
    )
}

export default ReturnButton


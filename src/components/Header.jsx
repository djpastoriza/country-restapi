import { useEffect, useState } from "react";


const initialMode = localStorage.getItem('theme') === 'dark';
const Header = () => {

    const [darkMode, setDarkMode] = useState(initialMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark')
            return;
        }
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light')
    }, [darkMode]);

    return (
        <header className="px-7 py-7 bg-white drop-shadow-md flex justify-between align-middle dark:bg-[#2b3743]">
            <h1 className="font-bold">Where in the world</h1>
            <button onClick={() => setDarkMode(!darkMode)}>🌙 Dark Mode</button>
        </header>
    )
}

export default Header
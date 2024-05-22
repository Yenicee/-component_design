'use client';
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        setDarkMode(theme === 'light')
    }, []);

    useEffect(() => {
        const htmlElement = document.documentElement;
        if (darkMode) {
            htmlElement.classList.add('dark')
            htmlElement.classList.remove('light')
            localStorage.setItem('theme', 'dark')
        } else {
            htmlElement.classList.remove('dark')
            htmlElement.classList.add('light')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode]);

    return (

        <div className={`relative flex w-15 h-15 ${darkMode ? 'dark:bg-gray-900 text-white' : 'light:bg-white text-black'} bg-teal-500 cursor-pointer rounded-full p-1`}
        onClick={() => setDarkMode(!darkMode)}

        >
            <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#eab308" strokeDasharray="2" strokeLinecap="round" strokeWidth="2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="2;0" /></path><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="1.2s" values="2;0" /></path><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></g><mask id="IconifyId18f1b2093e6676db92"><circle cx="12" cy="12" r="12" fill="#fff" /><circle cx="12" cy="12" r="8"><animate fill="freeze" attributeName="r" dur="0.4s" values="8;4" /></circle><circle cx="18" cy="6" r="12" fill="#fff"><animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22" /><animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2" /><animate fill="freeze" attributeName="r" dur="0.4s" values="12;3" /></circle><circle cx="18" cy="6" r="10"><animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22" /><animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2" /><animate fill="freeze" attributeName="r" dur="0.4s" values="10;1" /></circle></mask><circle cx="12" cy="12" r="10" fill="#eab308" mask="url(#IconifyId18f1b2093e6676db92)"><animate fill="freeze" attributeName="r" dur="0.4s" values="10;6" /></circle></svg>
            <div className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300" style={darkMode ? { left: '2px' } : { right:'2px'}}>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="#666666" fillOpacity="0"><path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"><animate id="IconifyId18f1b2093e6676db97" fill="freeze" attributeName="fill-opacity" begin="0.7s;IconifyId18f1b2093e6676db97.begin+6s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f1b2093e6676db97.begin+2.2s" dur="0.4s" values="1;0" /></path><path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f1b2093e6676db97.begin+3s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f1b2093e6676db97.begin+5.2s" dur="0.4s" values="1;0" /></path><path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f1b2093e6676db97.begin+0.4s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f1b2093e6676db97.begin+2.8s" dur="0.4s" values="1;0" /></path><path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"><animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f1b2093e6676db97.begin+3.4s" dur="0.4s" values="0;1" /><animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f1b2093e6676db97.begin+5.6s" dur="0.4s" values="1;0" /></path></g><g fillOpacity="0" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path fill="#666666" strokeDasharray="56" strokeDashoffset="56" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><animate fill="freeze" attributeName="strokeDashoffset" dur="0.6s" values="56;0" /><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.5s" values="0;1" /></path></g></svg>
        </div>

    )
}

export default ThemeToggle;

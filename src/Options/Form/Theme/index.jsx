import { useEffect, useState } from "react"
import { BsBrightnessHigh, BsMoon, BsSquareFill } from "react-icons/bs"

const Theme = () => {
    const [theme, setTheme] = useState('auto')

    const handleTheme = (selectedTheme) => {
        setTheme(selectedTheme)
        console.log(selectedTheme)
        //  code for updating theme setting
    }
    const setThemeToDark = () => {
        const body = document.body
        body.classList.add('dark')
        setTheme('dark')
        localStorage.theme = 'dark'
    }
    const setThemeToLight = () => {
        const body = document.body
        body.classList.remove('dark')
        setTheme('light')
        localStorage.theme = 'light'

    }
    const setThemeToSystemDefault = () => {
        // console.log(localStorage.theme)
        localStorage.removeItem('theme')
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        setTheme('auto')
    }

    // useEffect(() => {

    // }, [])
    return (
        <div className='space-y-3'>
            <h3 className='text-theme-color text-2xl font-medium dark:text-white'>Theme</h3>
            <div className='flex border rounded-md overflow-hidden text-theme-color border-theme-bg-gray dark:border-theme-text-gray-light'>
                <button
                    className={`flex-1 ${theme === 'auto' ? 'bg-theme-bg-gray font-semibold dark:bg-gray-300' : 'bg-white dark:bg-theme-color-dark dark:text-gray-300'} py-2 pl-2 text-left border dark:border-theme-text-gray-light flex items-center gap-2`}
                    onClick={() => setThemeToSystemDefault()} >
                    <BsSquareFill size={15} />
                    Auto
                </button>
                <button
                    className={`flex-1 ${theme === 'light' ? 'bg-theme-bg-gray font-semibold dark:bg-gray-300' : 'bg-white dark:bg-theme-color-dark dark:text-gray-300'} py-2 pl-2 text-left border dark:border-theme-text-gray-light flex items-center gap-2`}
                    onClick={() => setThemeToLight()}>
                    <BsBrightnessHigh size={20} />
                    Light
                </button>
                <button
                    className={`flex-1 ${theme === 'dark' ? 'bg-theme-bg-gray font-semibold dark:bg-gray-300' : 'bg-white dark:bg-theme-color-dark dark:text-gray-300'} py-2 pl-2 text-left border dark:border-theme-text-gray-light flex items-center gap-2`}
                    onClick={() => setThemeToDark()} >
                    <BsMoon size={15} />
                    Dark
                </button>
            </div>
        </div>
    )
}
export default Theme
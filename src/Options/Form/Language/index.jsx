import { useState } from "react"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

const Language = () => {
    const [language, setLanguage] = useState('auto')
    const [showOptions, setShowOptions] = useState(false)

    const handleShowOptions = () => {
        setShowOptions(!showOptions)
    }

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value)
        console.log(e.target.value)
        setShowOptions(!showOptions)
        // code for changing language setting
    }

    const languages = [
        'auto',
        'english',
        'chinese',
        'spanish',
        'french',
        'korean',
        'japanese',
        'german',
        'portuguese',
    ]
    return (
        <div className='space-y-3'>
            <h3 className='text-theme-color text-2xl font-medium dark:text-white'>Language</h3>
            <p className='text-theme-text-gray-light text-sm'>Choose a language to be used in ChatGPT response. <em className="font-medium">Auto</em> is recommended.</p>
            {/* <select className='outline-none py-3 px-5 border border-theme-bg-gray dark:border-theme-text-gray-light rounded-md w-full text-theme-color dark:text-white bg-white dark:bg-theme-color-dark' onChange={(e) => handleLanguage(e)}>
                {languages.map((value) => {
                    return (
                        <option value={value} key={value} className="bg-gray-200 py-5">{value}</option>
                    )
                })}
            </select> */}
            <div className="relative">

                <button
                    className="flex font-medium items-center justify-between capitalize outline-none py-3 px-5 border border-theme-bg-gray dark:border-theme-text-gray-light rounded-md w-full text-theme-color dark:text-white bg-white dark:bg-theme-color-dark"
                    onClick={() => handleShowOptions()}>
                    <p>{language}</p>
                    {!showOptions && <MdOutlineKeyboardArrowDown size={25} />}
                    {showOptions && <MdOutlineKeyboardArrowUp size={25} />}
                </button>
                {
                    showOptions &&
                    <div className="absolute border border-theme-bg-gray w-full rounded-b-md overflow-hidden shadow-md shadow-gray-600 z-20">
                        {languages.map((value) => {
                            return (
                                <button
                                    className={`capitalize w-full text-left hover:bg-gray-200 hover:text-theme-color hover:dark:text-white hover:dark:bg-theme-color hover:font-medium px-5 py-2 items-center text-theme-text-gray-dark dark:text-theme-color ${language === value ? 'bg-gray-200' : 'bg-gray-100 dark:bg-black'}`}
                                    key={value}
                                    value={value}
                                    onClick={(e) => handleLanguageChange(e)}
                                >
                                    {value}
                                </button>
                            )
                        })}
                    </div>
                }

            </div>
        </div>
    )
}
export default Language
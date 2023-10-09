import { useState } from "react"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

const API = () => {
    const [showOptions, setShowOptions] = useState(false)
    const [AIModel, setAIModel] = useState('text-davinci-003')
    const [apiKey, setAPIKey] = useState(null)

    const handleShowOptions = () => {
        setShowOptions(!showOptions)
    }

    const handleAIModelChange = (e) => {
        setAIModel(e.target.value)
        console.log(e.target.value)
        setShowOptions(!showOptions)
        // code for changing language
    }
    const handleAPIKey = (e) => {
        setAPIKey(e.target.value)
        console.log(e.target.value)
    }
    const handleSave = () => {
        // code to save web
    }

    const ai_models = [
        'text-davinci-003',
        'gpt-3.5-turbo',
    ]
    return (
        <div className="space-y-5">
            <p className="text-sm text-theme-text-gray-light">OpenAI official API, more stable, <span className="text-theme-color dark:text-theme-text-gray-dark font-semibold">charge by usage</span></p>
            <div className="lg:flex space-y-5 lg:space-y-0 lg:gap-4 lg:h-12">
                {/* <select className='py-2 px-3 border w-full lg:w-min border-theme-bg-gray dark:border-theme-text-gray-light text-sm rounded-md text-theme-color dark:text-white bg-white dark:bg-theme-color-dark outline-none' onChange={(e) => handleAIModel(e)}>
                    {ai_models.map((value) => {
                        return (
                            <option
                                value={value}
                                apiKey={value}
                            >
                                {value}
                            </option>
                        )
                    })}
                </select> */}
                <div className="relative">
                    <button
                        className="flex w-full lg:w-max font-medium items-center justify-between outline-none py-3 px-5 border border-theme-bg-gray dark:border-theme-text-gray-light rounded-md text-theme-color dark:text-white bg-white dark:bg-theme-color-dark"
                        onClick={() => handleShowOptions()}>
                        <p>{AIModel}</p>
                        {!showOptions && <MdOutlineKeyboardArrowDown size={25} />}
                        {showOptions && <MdOutlineKeyboardArrowUp size={25} />}
                    </button>
                    {
                        showOptions &&
                        <div className="absolute border border-theme-bg-gray w-full rounded-b-md shadow-md overflow-hidden shadow-gray-600 z-10">
                            {ai_models.map((value) => {
                                return (
                                    <button
                                        className={`w-full text-left hover:bg-gray-200 hover:text-theme-color hover:dark:text-white hover:dark:bg-theme-color hover:font-medium px-5 py-2 items-center text-theme-text-gray-dark dark:text-theme-color ${AIModel === value ? 'bg-gray-200' : 'bg-gray-100 dark:bg-black'}`}
                                        key={value}
                                        value={value}
                                        onClick={(e) => handleAIModelChange(e)}
                                    >
                                        {value}
                                    </button>
                                )
                            })}
                        </div>
                    }

                </div>
                <div className="lg:flex border rounded-md h-full w-full overflow-hidden dark:border-theme-text-gray-light">
                    <div className="bg-theme-bg-gray/10 h-full items-center flex px-2 w-full lg:w-max dark:bg-theme-color/40">
                        <p className="text-sm text-theme-text-gray-light w-full lg:w-max dark:text-theme-color px-1">API Key</p>
                    </div>
                    <div className="h-full w-full overflow-hidden">
                        <input className="h-full w-full px-2 text-sm outline-none dark:bg-theme-color-dark dark:text-white" type="text" onChange={(e) => handleAPIKey(e)} />
                    </div>
                </div>
            </div>
                <p className="text-sm text-theme-text-gray-light"><em>You can find or create your API key <a className="underline font-medium" href="https://platform.openai.com/account/api-keys">here</a></em></p>
            <div className="flex justify-center">
                <button className="hover:bg-theme-color bg-theme-color/90 text-white rounded-md px-5 py-1 text-sm" onClick={() => handleSave()}>Save</button>
            </div>
        </div>
    )
}
export default API
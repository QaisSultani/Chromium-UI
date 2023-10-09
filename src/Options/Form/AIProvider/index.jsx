import { useState } from "react"
import Web from "./Web"
import API from "./API"

const AIProvider = () => {
    const [provider, setProvider] = useState('web')

    const handleProvider = (selectedProvider) => {
        setProvider(selectedProvider)
        console.log(selectedProvider)
        // any code to run when provider is changed
    }
    
    return (
        <div className='mb-10'>
            <h3 className='text-theme-color text-2xl font-medium pb-3 dark:text-white'>AI Provider</h3>
            <div className='border-b border-theme-text-gray-light dark:border-white space-x-8 mb-5'>
                <button
                    className={`py-2 ${provider === 'web' ? 'text-theme-color border-b-2 border-theme-color dark:text-white dark:border-white' : 'text-theme-text-gray-dark'}`}
                    onClick={() => handleProvider('web')}
                >
                    ChatGPT Web App
                </button>
                <button
                    className={`py-2 ${provider === 'api' ? 'text-theme-color border-b-2 border-theme-color dark:text-white dark:border-white' : 'text-theme-text-gray-dark'}`}
                    onClick={() => handleProvider('api')}
                >
                    OpenAI API
                </button>
            </div>
            <div>
                {/* component selector for AI Provider */}
                {provider === 'web' && <Web />}
                {provider === 'api' && <API />}
            </div>
        </div>
    )
}
export default AIProvider
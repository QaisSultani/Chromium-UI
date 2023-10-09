import { useState } from "react"
import { BsCheckSquareFill, BsSquare } from 'react-icons/bs'

const Captions = () => {
    const [caption, setCaption] = useState(null)

    const handleCaption = (selected_caption) => {
        setCaption(selected_caption)
        console.log(selected_caption)
        // code for changing caption setting
    }

    return (
        <div className='space-y-3'>
            <h3 className='text-theme-color text-2xl font-medium dark:text-white'>Captions</h3>
            <div className='md:flex md:gap-10'>
                {/* <div className='space-x-3 text-theme-text-gray-dark'>
                    <input type='radio' id='auto' name='caption' value='auto_caption' onClick={(e) => handleCaption(e)} />
                    <label htmlFor='auto'>Auto</label>
                </div>
                <div className='space-x-3 text-theme-text-gray-dark'>
                    <input type='radio' id='closed_caption' name='caption' value='closed_caption' onClick={(e) => handleCaption(e)} />
                    <label htmlFor='closed_caption'>Closed captions by zoom and meet</label>
                </div> */}
                <button className="flex items-center gap-3 text-theme-color" onClick={() => handleCaption('auto_caption')}>
                    {caption === 'auto_caption' ? <BsCheckSquareFill size={20} /> : <BsSquare size={20} />}
                    <p className={`${caption==='auto_caption' ? 'dark:text-gray-200 text-theme-text-gray-dark' : 'text-theme-text-gray-light'}`}>Auto</p>
                </button>
                <button className="flex items-center gap-3 text-theme-color" onClick={() => handleCaption('closed_caption')}>
                    {caption === 'closed_caption' ? <BsCheckSquareFill size={20} /> : <BsSquare size={20} />}
                    <p className={`${caption==='closed_caption' ? 'dark:text-gray-200 text-theme-text-gray-dark' : 'text-theme-text-gray-light'}`}>Closed captions by zoom and meet</p>
                </button>
            </div>
        </div>
    )
}
export default Captions
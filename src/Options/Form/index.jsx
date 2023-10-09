import Theme from "./Theme"
import Language from "./Language"
import Captions from "./Captions"
import AIProvider from "./AIProvider"

const Form = () => {
    return (
        <div className='flex-1 m-10 flex justify-center pt-5'>
            <div className='sm:w-[80%] md:w-[60%] lg:w-full xl:w-[90%] md:space-y-10 space-y-5'>
                <div className='space-y-5'>
                    <h1 className='text-3xl font-semibold dark:text-white'>Welcome to Chromium</h1>
                    <p className='text-sm font-normal text-theme-text-gray-light'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual</p>
                </div>
                <Theme />
                <Language />
                <Captions />
                <div>
                    <AIProvider />
                    <button className='hover:bg-theme-color bg-theme-color/90 text-white rounded-md w-full py-2'>Set Biography</button>
                </div>
            </div>
        </div>
    )
}
export default Form
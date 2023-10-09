import logo from '../../images/image 4.png'
import logo2 from '../../images/Frame 7.png'
const Chromium = () => {
    return (
        <div className="bg-options text-white lg:m-10 lg:rounded-2xl lg:overflow-hidden lg:h-[80vh] xl:h-[90vh] lg:w-[80vh]">
            <div className='lg:relative w-full h-full bg-theme-color/95 pt-10 pb-5 space-y-2 lg:px-14'>
                <div className='flex items-center justify-center gap-2 lg:justify-start'>
                    <img src={logo} alt='logo' />
                    <h4 className="text-center font-medium text-5xl">Chromium</h4>
                </div>
                
                <div>
                    <h5 className='text-center font-semibold text-lg lg:text-left lg:text-6xl lg:pt-28 xl:w-[55%] lg:w-[70%]'>Voice Based Chat GPT</h5>
                    <p className='text-center text-sm px-5 lg:px-0 lg:text-left xl:w-[55%] lg:pt-10 lg:w-[70%]'>In publishing and graphic design, Lorem ipsum  is a placeholder text commonly used to</p>
                </div>
                <img className='lg:absolute xl:left-0 xl:bottom-0 hidden lg:block lg:-left-14 lg:-bottom-14' src={logo2} alt='' />
                
            </div>
        </div>
    )
}
export default Chromium
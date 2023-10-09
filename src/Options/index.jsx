import Form from './Form'
import Chromium from './Chromium'

const Options = () => {
    return (
        <>
            <div className='lg:flex lg:justify-center dark:bg-theme-color-dark min-h-screen'>
                {/* <div> */}
                    <Chromium />
                {/* </div> */}
                {/* <div className='relative rounded-3xl overflow-hidden'>
                        <img className="object-contain" src={option_first_image} alt="" />
                        <div className='absolute bg-theme-color w-full h-full top-0 left-0 p-14 text-white'>
                            <div className='absolute bottom-0 left-0'>
                                <img src={logo2} alt='' />
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img src={logo} alt='logo' />captions
                                <h3 className='font-medium text-4xl'>Chromium</h3>
                            </div>
                            <div className='mt-36 text-6xl font-semibold space-y-4 w-[60%]'>
                                <h1>Voice Based Chat GPT</h1>
                            </div>
                            <div className='w-[60%] mt-8'>
                                <p>In publishing and graphic design, Lorem ipsum  is a placeholder text commonly used to</p>
                            </div>
                        </div>
                    </div> */}
                <div className=''>
                    <Form />
                </div>

            </div>
        </>
    )
}
export default Options
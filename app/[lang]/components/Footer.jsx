import React from 'react'
import { getDictionary } from '@/lib/dictionary'
import wave from "@/images/wave.svg"
import logo from '@/public/asserts/logo.png'
import Image from 'next/image'

export default async function Footer({ lang })  {
  const { footer } = await getDictionary(lang)

  return (
 <>
    <div className="relative  flex justify-start md:justify-center md:items-end ">
        <img className="absolute  object-cover top-10 h-full w-full xl:mt-10 z-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_5_marketing_background.png" alt="background"/>
        <div className="flex pt-36 md:pt-32 lg:pt-40 xl:pt-96   px-4 md:px-6  xl:px-20 flex-col justify-start items-start md:justify-center md:items-center relative z-10">
            <div className="flex  flex-col items-start justify-start xl:justify-center xl:space-x-8 xl:flex-row">
                <div className="flex justify-start items-center space-x-4">
                    <div className="cursor-pointer w-12">
                        <Image src={logo}
             width="180"
             height="90"
             style={{padding:"5px",}}
              alt="logo" />
                    </div>
                    <p className="w-60 text-xl xl:text-2xl font-semibold leading-normal text-white">Uinversity</p>
                </div>
                <div className="mt-12 xl:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8">
                    <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                        <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">{footer.community}</h2>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                            {footer.about}
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                        {footer.colleges}
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                        {footer.academic}
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                        {footer.research}
                        </button>
                    </div>

                    <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                        <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">    {footer.about} </h2>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                        {footer.hospital}
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                        {footer.colleges}
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                        {footer.academic}
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                        {footer.research}
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                        {footer.life}
                        </button>
                        <button className="text-left text-base hover:text-gray-400 leading-none text-gray-100">
                        {footer.hospital}
                        </button>
                    </div>

                    <div className=" xl:w-72 flex justify-start items-start flex-col space-y-6">
                        <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">  {footer.resources}</h2>
                        <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                        {footer.accessibility}
                        </button>
                        <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                        {footer.usability}
                        </button>
                        <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                        {footer.accessibility}
                        </button>
                        <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                        {footer.usability}
                        </button>
                        <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                        {footer.accessibility}
                        </button>
                    </div>
                </div>
            </div>  
            <div className="mt-12 flex  xl:justify-between xl:flex-row flex-col-reverse items-center xl:items-start w-full ">
                <p className="mt-10 md:mt-12 xl:mt-0 text-sm leading-none text-white" > {footer.allright}</p>
                <div className="mt-10 md:mt-12 xl:mt-0 md:flex-row flex-col flex md:justify-center w-full md:w-auto justify-start items-start space-y-4 md:space-y-0 md:items-center md:space-x-4 xl:space-x-6">
                    <button className="text-base leading-none text-white hover:text-gray-300">
                    {footer.terms}
                    </button>
                    <button className="text-base p-2 leading-none text-white hover:text-gray-300">
                    {footer.privacy}
                    </button>
                    <button className="text-base leading-none text-white hover:text-gray-300">
                    {footer.security}
                    </button>
                    <button className="text-base leading-none text-white hover:text-gray-300">
                    {footer.sitemap}
                    </button>
                </div>
                <div className="flex  justify-start md:justify-end items-start  w-full md:w-auto md:items-center space-x-8 ">
                 
                    <button className="text-white hover:text-gray-200 w-12">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22.5 12.0645C22.5 6.26602 17.7984 1.56445 12 1.56445C6.20156 1.56445 1.5 6.26602 1.5 12.0645C1.5 17.3051 5.33906 21.649 10.3594 22.4374V15.1005H7.69266V12.0645H10.3594V9.75117C10.3594 7.12008 11.9273 5.66555 14.3255 5.66555C15.4744 5.66555 16.6763 5.87086 16.6763 5.87086V8.45508H15.3516C14.048 8.45508 13.6402 9.26414 13.6402 10.0957V12.0645H16.552L16.087 15.1005H13.6406V22.4384C18.6609 21.6504 22.5 17.3065 22.5 12.0645Z" fill="currentColor"/>
                            </svg>                                      
                    </button>
                    <button className="text-white hover:text-gray-200 w-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1.5C6.20297 1.5 1.5 6.20297 1.5 12C1.5 17.797 6.20297 22.5 12 22.5C17.797 22.5 22.5 17.8022 22.5 12C22.5 6.19781 17.797 1.5 12 1.5ZM18.6666 6.33984C19.8815 7.76805 20.6046 9.54925 20.7291 11.4202C18.8367 11.3217 16.5727 11.3217 14.7572 11.4914C14.5275 10.9116 14.2922 10.343 14.0353 9.79594C16.1288 8.88844 17.7422 7.69594 18.6666 6.33984ZM12 3.24984C14.0395 3.24634 16.0156 3.95866 17.5837 5.26266C16.6322 6.46547 15.1392 7.51266 13.2797 8.30297C12.2625 6.42188 11.092 4.80328 9.84375 3.52875C10.5482 3.3469 11.2725 3.25322 12 3.24984V3.24984ZM8.04047 4.20703C9.30375 5.46469 10.4906 7.06641 11.5298 8.94141C9.55547 9.54469 7.29141 9.89062 4.875 9.89062C4.41562 9.89062 3.9675 9.87422 3.52453 9.84656C3.83266 8.63935 4.3949 7.5118 5.17367 6.53927C5.95244 5.56673 6.92981 4.77161 8.04047 4.20703V4.20703ZM3.26625 11.5842C3.76406 11.6063 4.26703 11.617 4.77562 11.6119C7.53187 11.5791 10.0969 11.1469 12.3009 10.44C12.5088 10.8722 12.7056 11.3152 12.8916 11.7689C12.6252 11.8272 12.3637 11.9056 12.1092 12.0033C9.09609 13.2689 6.72281 15.3084 5.4375 17.775C4.02813 16.1814 3.25007 14.1274 3.24984 12C3.24984 11.8594 3.25547 11.7211 3.26625 11.5842ZM12 20.7502C10.056 20.7525 8.16724 20.1036 6.63516 18.907C7.8 16.5994 9.87797 14.6883 12.4978 13.5037C12.7439 13.3889 13.072 13.2961 13.4494 13.2141C13.7619 14.0778 14.0408 14.9747 14.2861 15.9047C14.6525 17.3083 14.9223 18.7354 15.0938 20.1759C14.1061 20.5543 13.0576 20.7489 12 20.7502V20.7502ZM16.7306 19.3556C16.5595 17.9001 16.2871 16.4584 15.9155 15.0408C15.728 14.3297 15.5166 13.6406 15.2869 12.968C17.0039 12.8273 19.0603 12.8475 20.6953 12.968C20.5512 14.2606 20.1206 15.5047 19.4347 16.6097C18.7488 17.7148 17.825 18.6529 16.7306 19.3556V19.3556Z" fill="currentColor"/>
                            </svg>                              
                    </button>
                    <button className="text-white  hover:text-gray-200 w-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1.5C6.20156 1.5 1.5 6.32344 1.5 12.2672C1.5 17.025 4.50937 21.0562 8.68125 22.4812C8.73977 22.494 8.79949 22.5002 8.85938 22.5C9.24844 22.5 9.39844 22.2141 9.39844 21.9656C9.39844 21.7078 9.38906 21.0328 9.38437 20.1328C9.03705 20.2142 8.68173 20.2567 8.325 20.2594C6.30469 20.2594 5.84531 18.6891 5.84531 18.6891C5.36719 17.4469 4.67813 17.1141 4.67813 17.1141C3.76406 16.4719 4.67344 16.4531 4.74375 16.4531H4.74844C5.80313 16.5469 6.35625 17.5687 6.35625 17.5687C6.88125 18.4875 7.58437 18.7453 8.2125 18.7453C8.62783 18.737 9.03673 18.6412 9.4125 18.4641C9.50625 17.7703 9.77812 17.2969 10.0781 17.025C7.74844 16.7531 5.29688 15.8297 5.29688 11.7047C5.29688 10.5281 5.70469 9.56719 6.375 8.81719C6.26719 8.54531 5.90625 7.44844 6.47812 5.96719C6.55483 5.94883 6.63368 5.94095 6.7125 5.94375C7.09219 5.94375 7.95 6.08906 9.36563 7.07344C11.0857 6.59218 12.9049 6.59218 14.625 7.07344C16.0406 6.08906 16.8984 5.94375 17.2781 5.94375C17.357 5.94095 17.4358 5.94883 17.5125 5.96719C18.0844 7.44844 17.7234 8.54531 17.6156 8.81719C18.2859 9.57187 18.6937 10.5328 18.6937 11.7047C18.6937 15.8391 16.2375 16.7484 13.8984 17.0156C14.2734 17.3484 14.6109 18.0047 14.6109 19.0078C14.6109 20.4469 14.5969 21.6094 14.5969 21.9609C14.5969 22.2141 14.7422 22.5 15.1312 22.5C15.1942 22.5003 15.2571 22.494 15.3187 22.4812C19.4953 21.0562 22.5 17.0203 22.5 12.2672C22.5 6.32344 17.7984 1.5 12 1.5Z" fill="currentColor"/>
                            </svg>                                 
                    </button>
                </div>
            </div>
           
        </div>
    </div>
 </>

  )
}

import { CloudArrowUpIcon, BriefcaseIcon, LanguageIcon, WrenchIcon, PuzzlePieceIcon, CommandLineIcon, GlobeAltIcon } from '@heroicons/react/20/solid'


import sphImage from '../assets/sph-profile.png'
import blogImage from '../assets/p_blog.png'
import weatherApp from '../assets/weather-app.png'
import { Link } from 'react-router'


function Projects() {

    return (
        <div id='projects' className="bg-slate-900 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-purple-400">
                    Проекты
                </h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                    Моё творчество 
                </p>
                <p className="mt-6 text-xl/8 text-center text-gray-400">
                    Вот несколько проектов, над которыми я работал:
                </p>
                
                <div className="flex flex-col">
                    <div className="relative sm:block lg:inline-flex gap-x-10 my-5 -ml-10 p-10">
                        <div style={{backgroundImage: `url(${sphImage})`}} className="shadow-xl sm:relative lg:sticky mt-5 mb-2 h-min lg:top-40 w-full bg-center bg-cover aspect-16/9 rounded-xl hover:scale-110 transition duration-200 ease-in-out"></div>
                        <div className="lg:w-full pt-10lg:pt-0">
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-100 sm:text-5xl">
                                Sample Packs House
                            </h1>
                            <p className="mt-6 text-xl/8 text-gray-400">
                                Дипломная работа. Целью было создать альтернативу таким сервисам как: Splice и Looperman. 
                                Где пользователи могут загружать <span className='text-purple-400'>свою</span> не 
                                лицензированную музыку/звуки и развивать личный профиль. Исследовать общую библиотеку и брать идеи для свои будущих проектов. 
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-200">
                                <li className="flex gap-x-4">
                                    <LanguageIcon aria-hidden="true" className="size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Язык:</strong> JavaScript
                                    </span>
                                </li>
                                <li className="flex gap-x-4">
                                    <CloudArrowUpIcon aria-hidden="true" className="size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Frontend/UI:</strong> React, Bootstrap, Moment, React H5 Audio Player, React Icons
                                    </span>
                                </li>
                                <li className="flex gap-x-4">
                                    <CommandLineIcon aria-hidden="true" className="size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Backend:</strong> Npm, Express, MongoDB, PassportJS
                                    </span>
                                </li>
                                <li className="flex gap-x-4">
                                    <WrenchIcon aria-hidden="true" className="size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Api:</strong> Axios, Socket.IO, React Query
                                    </span>
                                </li>
                                <li className="flex gap-x-4">
                                    <BriefcaseIcon aria-hidden="true" className="size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">State Management:</strong> Redux, Redux Thunk
                                    </span>
                                </li>
                                <li className="flex gap-x-4">
                                    <PuzzlePieceIcon aria-hidden="true" className="size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Дополнительно:</strong> React Router, Cloudinary, Multer
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative sm:block lg:inline-flex gap-x-10 my-5 -ml-10 p-10">
                        <div className="lg:w-full pt-10lg:pt-0">
                            <div style={{backgroundImage: `url(${blogImage})`}} className="lg:hidden sm:relative lg:sticky mt-5 mb-2 h-min lg:top-40 w-full bg-center bg-cover aspect-16/9 rounded-xl hover:scale-110 transition duration-200 ease-in-out"></div>
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-100 sm:text-5xl">
                                Blog
                            </h1>
                            <p className="mt-6 text-xl/8 text-gray-400">
                                Простое приложение для понимания работы реляционных баз данных. 
                                И нового для меня стека <span className='text-purple-400'>Bun + Vite + Hono</span>.
                                Суть приложения - возможность создавать, редактировать и удалять посты, а так же дополнять их комментариями.
                            </p>

                            <ul role="list" className="mt-8 space-y-8 text-gray-200">
                                <li className="flex gap-x-4">
                                    <LanguageIcon aria-hidden="true" className="size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Язык:</strong> TypeScript
                                    </span>
                                </li>
                                <li className="flex gap-x-4">
                                    <CloudArrowUpIcon aria-hidden="true" className="size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Frontend/UI:</strong> React, React Router, React Suite, TailwindCSS
                                    </span>
                                </li>
                                <li className="flex gap-x-4">
                                    <CommandLineIcon aria-hidden="true" className="size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Backend:</strong> Bun, Hono, Postgres, DrizzleORM
                                    </span>
                                </li>
                                <li className="flex gap-x-4">
                                    <WrenchIcon aria-hidden="true" className="size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Api/State Management:</strong> Axios, Tanstack: Store
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div style={{backgroundImage: `url(${blogImage})`}} className="shadow-xl hidden sm:hidden lg:block sm:relative lg:sticky mt-5 mb-2 h-min lg:top-40 w-full bg-center bg-cover aspect-16/9 rounded-xl hover:scale-110 transition duration-200 ease-in-out"></div>
                    </div>
                    <div className="relative sm:block lg:inline-flex gap-x-10 my-5 -ml-10 p-10">
                        <div style={{backgroundImage: `url(${weatherApp})`}} className="shadow-xl sm:relative lg:sticky mt-5 mb-2 h-min lg:top-40 w-full bg-center bg-cover aspect-16/9 rounded-xl hover:scale-110 transition duration-200 ease-in-out"></div>
                        <div className="lg:w-full pt-10lg:pt-0">
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-100 sm:text-5xl">
                                Weather App
                            </h1>
                            <p className="mt-6 text-xl/8 text-gray-400">
                                После исследования рынка трудоустройства я понял, что 
                                <span className='text-purple-400'> знание NextJS </span> 
                                больше относиться к требованиям нежели к плюсам. Поэтому я решил собрать 
                                <span className='text-purple-400'> своё </span> 
                                мини-приложение прогноза погоды, используя сторонние API, накопленные знания и немного неизведанных библиотек.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-200">
                                <li className="flex gap-x-4">
                                    <GlobeAltIcon aria-hidden="true" className="size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Демо:</strong> <Link className='hover:text-purple-400' to='https://p-weather.vercel.app' target="_blank" rel="noopener noreferrer">https://p-weather.vercel.app</Link>
                                    </span>
                                </li>
                                <li className="flex gap-x-4">
                                    <LanguageIcon aria-hidden="true" className="size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Язык:</strong> TypeScript
                                    </span>
                                </li>
                                <li className="flex gap-x-4">
                                    <CloudArrowUpIcon aria-hidden="true" className="size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Frontend/UI:</strong> NextJS, Leaflet, Lucide React,
                                    </span>
                                </li>
                                <li className="flex gap-x-4">
                                    <WrenchIcon aria-hidden="true" className="size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Api:</strong> Ky, OpenWeather, GeoNames
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
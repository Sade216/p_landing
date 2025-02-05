import { CloudArrowUpIcon, BriefcaseIcon, CircleStackIcon, LanguageIcon, WrenchIcon, PuzzlePieceIcon, CommandLineIcon } from '@heroicons/react/20/solid'


import sphImage from '../assets/sph-profile.png'


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
                            <div style={{backgroundImage: `url(${sphImage})`}} className="sm:relative lg:sticky mt-5 h-min lg:top-40 w-full bg-center bg-cover aspect-16/9 rounded-xl "></div>
                            <div className="lg:w-full pt-10lg:pt-0">
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-100 sm:text-5xl">
                                    Sample Packs House
                                </h1>
                                <p className="mt-6 text-xl/8 text-gray-400">
                                    Меня зовут <span className='text-purple-400'>Влад</span>, и я занимаюсь веб-разработкой уже 4 года. 
                                    Моя страсть — это создание современных и удобных интерфейсов, которые решают реальные задачи.
                                </p>
                                <ul role="list" className="mt-8 space-y-8 text-gray-200">
                                    <li className="flex gap-x-3">
                                        <LanguageIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                                        <span>
                                            <strong className="font-semibold text-gray-400">Язык:</strong> JavaScript
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                                        <span>
                                            <strong className="font-semibold text-gray-400">Frontend/UI:</strong> React, Bootstrap, Moment, React H5 Audio Player, React Icons
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CommandLineIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                                        <span>
                                            <strong className="font-semibold text-gray-400">Backend:</strong> Npm, Express
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <WrenchIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                                        <span>
                                            <strong className="font-semibold text-gray-400">Api:</strong> Axios, Socket.IO, React Query
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <BriefcaseIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                                        <span>
                                            <strong className="font-semibold text-gray-400">State Management:</strong> Redux, Redux Thunk
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CircleStackIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                                        <span>
                                            <strong className="font-semibold text-gray-400">Базы данных:</strong> MongoDB, Mongoose,
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <PuzzlePieceIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                                        <span>
                                            <strong className="font-semibold text-gray-400">Дополнительно:</strong> React Router, Cloudinary, Multer, PassportJS
                                        </span>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    {/* <div className="relative sm:block lg:inline-flex gap-x-10 my-5 -ml-10 p-10">
                        <div className="lg:w-full pt-10lg:pt-0">
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-100 sm:text-5xl">
                                Sample Packs House
                            </h1>
                            <p className="mt-6 text-xl/8 text-gray-400">
                                Меня зовут <span className='text-purple-400'>Влад</span>, и я занимаюсь веб-разработкой уже 4 года. 
                                Моя страсть — это создание современных и удобных интерфейсов, которые решают реальные задачи.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-200">
                                <li className="flex gap-x-3">
                                    <LanguageIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Язык:</strong> JavaScript
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Frontend/UI:</strong> React, Bootstrap, Moment, React H5 Audio Player, React Icons
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CommandLineIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Backend:</strong> Npm, Express
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <WrenchIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Api:</strong> Axios, Socket.IO, React Query
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <BriefcaseIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">State Management:</strong> Redux, Redux Thunk
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CircleStackIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Базы данных:</strong> MongoDB, Mongoose,
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <PuzzlePieceIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                                    <span>
                                        <strong className="font-semibold text-gray-400">Дополнительно:</strong> React Router, Cloudinary, Multer, PassportJS
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div style={{backgroundImage: `url(${sphImage})`}} className="sm:relative lg:sticky mt-5 h-min lg:top-40 w-full bg-center bg-cover aspect-16/9 rounded-xl "></div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Projects
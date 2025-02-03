import { CloudArrowUpIcon, BriefcaseIcon, CircleStackIcon, LanguageIcon, WrenchIcon, PuzzlePieceIcon, CommandLineIcon } from '@heroicons/react/20/solid'



function About() {
    return (
        <div id='about' className="relative isolate overflow-hidden bg-gray-950 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                aria-hidden="true"
                className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-slate-800 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                <defs>
                    <pattern
                    x="50%"
                    y={-1}
                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                    >
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-900">
                    <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                    strokeWidth={0}
                    />
                </svg>
                <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                    <p className="text-base/7 font-semibold text-purple-400">Обо мне</p>
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-100 sm:text-5xl">
                        Привет!
                    </h1>
                    <p className="mt-6 text-xl/8 text-gray-400">
                     Меня зовут <span className='text-purple-400'>Влад</span>, и я занимаюсь веб-разработкой уже 4 года. Моя страсть — это создание современных и удобных интерфейсов, которые решают реальные задачи.
                    </p>
                    </div>
                </div>
                </div>
                <div className="-mt-10 -ml-10 p-25 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                    alt=""
                    src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                    className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
                />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base/8 text-gray-100 lg:max-w-lg">
                    <p>
                        Я работаю с современными инструментами и технологиями, чтобы создавать качественные продукты. Вот мой стек:
                    </p>
                    <ul role="list" className="mt-8 space-y-8 text-gray-200">
                        <li className="flex gap-x-3">
                            <LanguageIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                            <span>
                                <strong className="font-semibold text-gray-400">Языки программирования:</strong> JavaScript, TypeScript
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                            <span>
                                <strong className="font-semibold text-gray-400">Frontend/UI:</strong> React, Bootstrap, React Suite, TailwindCSS, TailwindUI
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CommandLineIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                            <span>
                                <strong className="font-semibold text-gray-400">Backend:</strong> Bun, Vite, Hono, Npm, Express
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <WrenchIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                            <span>
                                <strong className="font-semibold text-gray-400">Api:</strong> Axios, Socket.IO, TanStack: Query
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <BriefcaseIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                            <span>
                                <strong className="font-semibold text-gray-400">State Management:</strong> Redux, TanStack: Store
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CircleStackIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                            <span>
                                <strong className="font-semibold text-gray-400">Базы данных:</strong> PostgreSQL, Drizzle ORM, Sequelize, MongoDB, Mongoose,
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <PuzzlePieceIcon aria-hidden="true" className="mt-1 size-6 flex-none text-purple-400" />
                            <span>
                                <strong className="font-semibold text-gray-400">Дополнительно:</strong> React Router, Cloudinary, Multer, PassportJS
                            </span>
                        </li>
                    </ul>
                    <p className="mt-8 text-gray-100 text-base/8">
                        Я постоянно изучаю новые технологии и улучшаю свои навыки, чтобы оставаться в курсе последних трендов. В своей работе я ценю чистый код, модульность и внимание к деталям. Мой опыт включает разработку как небольших лендингов, так и сложных веб-приложений с использованием современных инструментов.
                    </p>
                    {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-100">No server? No problem.</h2>
                    <p className="mt-6 text-gray-100">
                        Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                        Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                        tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                        turpis ipsum eu a sed convallis diam.
                    </p> */}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About
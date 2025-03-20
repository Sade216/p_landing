import { NavLink } from "react-router"

function ErrorPage() {
    return (
        <>
            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <section className="text-center">
                    <h1 className="text-2xl font-semibold text-indigo-600">404</h1>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray sm:text-7xl">
                        Страница не найдена
                    </h1>
                    <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                        Страница, которую ты ищешь не существует.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <NavLink
                        to="/"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Вернуться на главную
                        </NavLink>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ErrorPage
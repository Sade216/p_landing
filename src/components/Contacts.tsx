import { AtSymbolIcon } from '@heroicons/react/24/outline'

function Contacts() {
    return (
        <>
            <div id='contacts' className="relative isolate overflow-hidden bg-gray-950 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg content-center">
                        <h2 className="text-4xl font-semibold tracking-tight text-white">Свяжитесь со мной:</h2>
                        <p className="mt-4 text-lg text-gray-300">
                            Если у вас есть идея для проекта, вы хотите обсудить сотрудничество или предложить работу, напишите мне!  
                        </p>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                        <div className="flex flex-col items-start cursor-pointer hover:bg-slate-900/50 rounded-xl p-5">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <AtSymbolIcon aria-hidden="true" className="size-6 text-white" />
                            </div>
                            <dt className="mt-4 text-base font-semibold text-white">Gmail</dt>
                            <dd className="mt-2 text-base/7 text-gray-400">
                                vlad.tok.1997.ds@gmail.com
                            </dd>
                        </div>
                        <div className="flex flex-col items-start cursor-pointer hover:bg-slate-900/50 rounded-xl p-5">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <AtSymbolIcon aria-hidden="true" className="size-6 text-white" />
                            </div>
                            <dt className="mt-4 text-base font-semibold text-white">Telegram</dt>
                            <dd className="mt-2 text-base/7 text-gray-400">
                                @oile_xd
                            </dd>
                        </div>
                    </dl>
                    </div>
                </div>
                <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
                    <div
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                </div>
            </div>
        </>
    )
}

export default Contacts
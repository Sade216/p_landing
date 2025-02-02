import './App.css'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Projects', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'About', href: '#about' },
]  

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
        <div>
            <header className="fixed backdrop-blur-xs bg-black/5 inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                        Logo
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        >
                        <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm/6 font-semibold">
                            {item.name}
                        </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {/* <a href="#" className="text-sm/6 font-semibold">
                        Log in <span aria-hidden="true">&rarr;</span>
                        </a>     */}
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50 backdrop-blur-xs" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            Logo
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                        </div>
                        <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-800"
                                >
                                {item.name}
                                </a>
                            ))}
                            </div>
                            <div className="py-6">
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold hover:bg-gray-800"
                            >
                                Log in
                            </a>
                            </div>
                        </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative isolate lg:px-8">
                <div className="mx-auto max-w-2xl py-48 sm:py-56 lg:py-64 h-auto sm:h-auto lg:h-screen">
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
                            Data to enrich your online business
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat.
                        </p>                        
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm/6 font-semibold">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id='about'>
                <div className='bg-black h-2000'></div>
            </div>
        </div>

        
    </>
  )
}

export default App

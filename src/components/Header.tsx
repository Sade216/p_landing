import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "Главная", href: "#" },
    { name: "Обо мне", href: "#about" },
    { name: "Проекты", href: "#projects" },
    { name: "Контакты", href: "#contacts" },
];

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed backdrop-blur-none bg-none lg:backdrop-blur-xs lg:bg-black/15 inset-x-0 top-0 z-50">
            <nav
                aria-label="Global"
                className="flex justify-end lg:justify-center p-6 lg:px-8">
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
                        <Bars3Icon
                            aria-hidden="true"
                            className="size-6"
                        />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm/6 font-semibold">
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden">
                <div className="fixed inset-0 z-50 backdrop-blur-xs" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a
                            href="#"
                            className="-m-1.5 p-1.5">
                            Logo
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon
                                aria-hidden="true"
                                className="size-6"
                            />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-800">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}

export default Header;

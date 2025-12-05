import { useState } from 'react'
import logo from '../assets/logo22.svg'

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const navItems: string[] = [
        'Эффективность',
        'Способ применения',
        'Механизм действия',
        'Безопасность'
    ]

    // Навигационные элементы для модалки (без "Мнения экспертов")
    const modalNavItems: string[] = [
        'Эффективность',
        'Способ применения',
        'Механизм действия',
        'Безопасность'
    ]

    // Маппинг названий пунктов меню к id компонентов
    const navItemToId: Record<string, string> = {
        'Эффективность': 'efficiency',
        'Способ применения': 'product-info',
        'Механизм действия': 'mechanism-of-action',
        'Безопасность': 'safety'
    }

    const scrollToSection = (itemName: string) => {
        const sectionId = navItemToId[itemName]
        if (sectionId) {
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, itemName: string) => {
        e.preventDefault()
        scrollToSection(itemName)
        closeModal()
    }

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 w-full backdrop-blur-[40px] shadow-[0_1px_48px_0_rgba(0,0,0,0.05)] z-50 bg-[rgba(255,255,255,0.80)]"
            >
                <div className="h-14 px-4 flex items-center justify-between md:py-4 md:px-6 md:h-auto md:flex-wrap md:gap-10">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-[100px] h-[28px] md:w-[165px] md:h-auto flex items-center justify-center">
                            <img
                                src={logo}
                                alt="Tibsovo_logo_new 1"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center lg:gap-7 md:gap-2 min-w-[240px] max-w-full flex-wrap">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                onClick={(e) => handleNavClick(e, item)}
                                className="text-[#151518] text-sm font-semibold leading-[1.4] hover:opacity-80 transition-opacity cursor-pointer"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={toggleModal}
                        className="md:hidden w-[26px] h-[26px] flex items-center justify-center cursor-pointer"
                        aria-label="Open menu"
                    >
                        <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.59961 5.19995H23.3996"
                                stroke="#151518"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M2.59961 13H23.3996"
                                stroke="#151518"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M2.59961 20.8H23.3996"
                                stroke="#151518"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-[60] md:hidden"
                    onClick={closeModal}
                />
            )}

            {/* Mobile Modal */}
            <div
                className={`fixed top-0 right-0 w-[295px] h-full bg-white rounded-l-2xl z-[70] md:hidden transition-transform duration-300 ease-out ${
                    isModalOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Close Icon */}
                <button
                    onClick={closeModal}
                    className="absolute right-4 top-[15px] w-[26px] h-[26px] flex items-center justify-center cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
                    aria-label="Close menu"
                >
                    <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.5">
                            <path
                                d="M5.5 5.5L20.5 20.5"
                                stroke="#151518"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20.5 5.5L5.5 20.5"
                                stroke="#151518"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                </button>

                {/* Navigation Items */}
                <nav className="absolute left-6 top-[99px] w-[233px] flex flex-col gap-6">
                    {modalNavItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            onClick={(e) => handleNavClick(e, item)}
                            className="text-[#151518] text-base font-semibold leading-[140%] cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    )
}

export default Header


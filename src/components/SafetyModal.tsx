import { useEffect } from "react";
import InfoIcon from "./InfoIcon";

interface SafetyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SafetyModal = ({ isOpen, onClose }: SafetyModalProps) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 z-[100] bg-black/20"
                onClick={onClose}
            />

            {/* Modal Content - Slides in from right */}
            <div
                className="fixed right-0 top-0 h-full w-full lg:w-2/3 2xl:w-1/2 z-[101] bg-white shadow-lg overflow-y-auto transform transition-transform duration-300 ease-out"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between gap-4 p-4 md:p-5 md:px-8 md:pt-10 border-b border-gray-200 sticky top-0 bg-white z-10">
                    <div className="flex items-end gap-3 flex-1">
                        <h2 className="text-2xl md:text-[32px] font-semibold leading-[120%] md:leading-[110%] tracking-[-0.72px] md:tracking-[-0.96px] text-[#151518]">
                            Нежелательные явления <br className="hidden md:block" /> в исследовании ClariDHy
                        </h2>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 opacity-50 hover:opacity-100 transition-opacity flex-shrink-0 cursor-pointer"
                        aria-label="Close modal"
                    >
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                        >
                            <g opacity="0.5">
                                <path
                                    d="M7.66602 7.66669L24.3327 24.3334"
                                    stroke="#151518"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.66602 24.3334L24.3327 7.66669"
                                    stroke="#151518"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </svg>
                    </button>
                </div>

                {/* Table Content */}
                <div className="p-4 md:p-8 md:px-10 md:pt-10">
                    <div className="overflow-x-auto">
                        <div className="min-w-[600px] md:min-w-0">
                            {/* Table Header Row 1 - Main Headers */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 md:px-8 bg-white"></div>
                                <div className="flex-1 flex items-center bg-[#61279E]">
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="text-center text-white text-base md:text-base font-semibold leading-[140%] py-4">
                                            ТИБСОВО® (n=124)
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center bg-[#87A9E2]">
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="text-center text-white text-base md:text-base font-semibold leading-[140%] py-4">
                                            Плацебо (n=61)
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Table Header Row 2 - Category */}
                            <div className="flex items-stretch">
                                <div className="w-[220px] md:w-[220px] p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%]">
                                        Нежелательные явления (≥ 10%)
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)] flex items-center justify-center">
                                    <div className="text-center text-white text-sm md:text-sm font-semibold leading-[140%]">
                                        Любой степени тяжести
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)] flex items-center justify-center">
                                    <div className="text-center text-white text-sm md:text-sm font-semibold leading-[140%]">
                                        3-й степени тяжести и выше
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)] flex items-center justify-center">
                                    <div className="text-center text-[#151518] text-sm md:text-sm font-semibold leading-[140%]">
                                        Любой степени тяжести
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)] flex items-center justify-center">
                                    <div className="text-center text-[#151518] text-sm md:text-sm font-semibold leading-[140%]">
                                        3-й степени тяжести и выше
                                    </div>
                                </div>
                            </div>

                            {/* Table Rows */}
                            {/* Тошнота */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-white flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Тошнота
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">41%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">3 (2%)</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">29%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">1 (2%)</div>
                                </div>
                            </div>

                            {/* Диарея */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%]">
                                        Диарея
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">35%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">17%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                            </div>

                            {/* Утомляемость */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-white flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Утомляемость
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">31%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">4 (3%)</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">17%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">1 (2%)</div>
                                </div>
                            </div>

                            {/* Кашель */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Кашель
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">25%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">3 (2%)</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">18%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">1 (2%)</div>
                                </div>
                            </div>

                            {/* Боль в животе */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-white flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Боль в животе
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">24%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">15%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                            </div>

                            {/* Пониженный аппетит */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%]">
                                        Пониженный аппетит
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">24%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">2 (2%)</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">19%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                            </div>

                            {/* Асцит */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-white flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Асцит
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">23%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">11 (9%)</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">15%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">4 (7%)</div>
                                </div>
                            </div>

                            {/* Рвота */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Рвота
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">23%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">3 (2%)</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">19%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                            </div>

                            {/* Анемия */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-white flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Анемия
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">18%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">8 (7%)</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">5%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                            </div>

                            {/* Запор */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Запор
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">15%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">1 (1%)</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">19%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                            </div>

                            {/* Переферический отек */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-white flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Переферический отек
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">14%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">10%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                            </div>

                            {/* Гипертермия */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Гипертермия
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">14%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">10%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">2 (3%)</div>
                                </div>
                            </div>

                            {/* Астения */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-white flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Астения
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">13%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">14%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">2 (3%)</div>
                                </div>
                            </div>

                            {/* Боль в спине */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Боль в спине
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">13%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">1 (1%)</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">12%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                            </div>

                            {/* Головная боль */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-white flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Головная боль
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">13%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">7%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                            </div>

                            {/* Повышенный уровень аспартатаминотрансферазы */}
                            <div className="flex items-stretch">
                                <div className="w-[220px] md:w-[220px] p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-left">
                                        Повышенный уровень аспартатаминотранс<br />феразы
                                    </div>
                                </div>
                                <div className="flex-1 h-[98px] p-4 bg-[rgba(97,39,158,0.55)] flex items-center justify-center">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">11%</div>
                                </div>
                                <div className="flex-1 h-[98px] p-4 bg-[rgba(97,39,158,0.55)] flex items-center justify-center">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">6 (5%)</div>
                                </div>
                                <div className="flex-1 h-[98px] p-4 bg-[rgba(135,169,226,0.55)] flex items-center justify-center">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">5%</div>
                                </div>
                                <div className="flex-1 h-[98px] p-4 bg-[rgba(135,169,226,0.55)] flex items-center justify-center">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">1 (2%)</div>
                                </div>
                            </div>

                            {/* Одышка */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-white flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Одышка
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">11%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">1 (1%)</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">17%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">2 (3%)</div>
                                </div>
                            </div>

                            {/* Вздутие живота */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Вздутие живота
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">11%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(97,39,158,0.55)]">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">1 (1%)</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">8%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.55)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">0</div>
                                </div>
                            </div>

                            {/* Гипонатриемия */}
                            <div className="flex items-center">
                                <div className="w-[220px] md:w-[220px] p-4 bg-white flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-center">
                                        Гипонатриемия
                                    </div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">11%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">5 (4%)</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">12%</div>
                                </div>
                                <div className="flex-1 p-4 bg-[rgba(135,169,226,0.15)]">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">5 (8%)</div>
                                </div>
                            </div>

                            {/* Повышенный уровень билирубина в крови */}
                            <div className="flex items-stretch">
                                <div className="w-[220px] md:w-[220px] p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%]">
                                        Повышенный уровень билирубина в крови
                                    </div>
                                </div>
                                <div className="flex-1 h-[76px] p-4 bg-[rgba(97,39,158,0.55)] flex items-center justify-center">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">11%</div>
                                </div>
                                <div className="flex-1 h-[76px] p-4 bg-[rgba(97,39,158,0.55)] flex items-center justify-center">
                                    <div className="text-center text-white text-base md:text-base font-semibold leading-[140%]">7 (6%)</div>
                                </div>
                                <div className="flex-1 h-[76px] p-4 bg-[rgba(135,169,226,0.55)] flex items-center justify-center">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">7%</div>
                                </div>
                                <div className="flex-1 h-[76px] p-4 bg-[rgba(135,169,226,0.55)] flex items-center justify-center">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">1 (2%)</div>
                                </div>
                            </div>

                            {/* Удлинение интервала QT на экг */}
                            <div className="flex items-stretch">
                                <div className="w-[220px] md:w-[220px] p-4 bg-white flex items-center">
                                    <div className="text-[#61279E] text-base md:text-base font-semibold leading-[140%] text-left">
                                        Удлинение интервала QT на экг
                                    </div>
                                </div>
                                <div className="flex-1 h-[76px] p-4 bg-[rgba(135,169,226,0.15)] flex items-center justify-center">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">10%</div>
                                </div>
                                <div className="flex-1 h-[76px] p-4 bg-[rgba(135,169,226,0.15)] flex items-center justify-center">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">НД</div>
                                </div>
                                <div className="flex-1 h-[76px] p-4 bg-[rgba(135,169,226,0.15)] flex items-center justify-center">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">3%</div>
                                </div>
                                <div className="flex-1 h-[76px] p-4 bg-[rgba(135,169,226,0.15)] flex items-center justify-center">
                                    <div className="text-center text-[#151518] text-base md:text-base font-semibold leading-[140%]">НД</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SafetyModal;


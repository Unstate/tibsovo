import { useEffect } from "react";

interface DemografiyaModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DemografiyaModal = ({ isOpen, onClose }: DemografiyaModalProps) => {
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
        <div className="fixed inset-0 z-[100] bg-black/20" onClick={onClose} />

        {/* Modal Content - Slides in from right */}
        <div
          className="fixed right-0 top-0 h-full w-full lg:w-2/3 2xl:w-1/2  z-[101] bg-white shadow-lg overflow-y-auto transform transition-transform duration-300 ease-out"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-1 md:gap-4 p-2 md:p-5 md:px-8 md:pt-10 border-b border-gray-200 sticky top-0 bg-white z-10">
            <h2 className="text-[10px] md:text-[28px] font-semibold leading-[120%] md:leading-[110%] tracking-[-0.2px] md:tracking-[-0.96px] text-[#151518] flex-1">
              Исходные демографические данные <br className="hidden md:block" /> и особенности заболевания
            </h2>

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
          <div className="p-1 md:p-8 md:px-10 md:pt-10">
            <div className="overflow-x-hidden md:overflow-x-auto -mx-1 md:mx-0">
              <div className="w-full md:min-w-0">
                {/* Table Header */}
                <div className="flex items-start mb-0">
                  <div className="w-1/4 min-w-0"></div>
                  <div className="w-1/4 min-w-0"></div>
                  <div
                    className="w-1/4 min-w-0 flex items-center justify-center p-1.5 md:p-4"
                    style={{ backgroundColor: "#61279E" }}
                  >
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%]">
                      ТИБСОВО®
                      <br />
                      (n=124)
                    </div>
                  </div>
                  <div
                    className="w-1/4 min-w-0 flex items-center justify-center p-1.5 md:p-4"
                    style={{ backgroundColor: "#87A9E2" }}
                  >
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%]">
                      Плацебо
                      <br />
                      (n=61)
                    </div>
                  </div>
                </div>

                {/* Table Rows */}
                {/* Пол */}
                <div className="flex items-stretch">
                  <div className="w-1/4 min-w-0 p-1.5 md:p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                    <div className="text-[#61279E] text-[10px] md:text-base font-semibold leading-[120%]">
                      Пол
                    </div>
                  </div>
                  <div className="w-1/4 min-w-0 p-1.5 md:p-4 bg-[rgba(224,219,244,0.40)]">
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%]">
                      Женский
                    </div>
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%] mt-0.5 md:mt-2">
                      Мужской
                    </div>
                  </div>
                  <div
                    className="w-1/4 min-w-0 p-1.5 md:p-4"
                    style={{ backgroundColor: "rgba(97, 39, 158, 0.55)" }}
                  >
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%]">
                      80 (65%)
                    </div>
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      44 (35%)
                    </div>
                  </div>
                  <div
                    className="w-1/4 min-w-0 p-1.5 md:p-4"
                    style={{ backgroundColor: "rgba(135, 169, 226, 0.55)" }}
                  >
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%]">
                      37 (61%)
                    </div>
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      24 (39%)
                    </div>
                  </div>
                </div>

                {/* Возраст */}
                <div className="flex items-stretch">
                  <div className="flex-1 min-w-0 p-1.5 md:p-4 flex items-center">
                    <div className="text-[#61279E] text-[10px] md:text-base font-semibold leading-[120%]">
                      Возраст (лет)
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 p-1.5 md:p-4"></div>
                  <div className="w-1/4 min-w-0 p-1.5 md:p-4 bg-[rgba(224,219,244,0.40)]">
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%]">
                      61 (33–80)
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 p-1.5 md:p-4">
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%]">
                      63 (40–83)
                    </div>
                  </div>
                </div>

                {/* Предшествующие линии терапии */}
                <div className="flex items-stretch">
                  <div className="flex-1 min-w-0 p-1.5 md:p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                    <div className="text-[#61279E] text-[10px] md:text-base font-semibold leading-[120%]">
                      Предшествующие линии терапии
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 p-1.5 md:p-4 bg-[rgba(224,219,244,0.40)]">
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%]">
                      1
                    </div>
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%] mt-0.5 md:mt-2">
                      2
                    </div>
                  </div>
                  <div
                    className="w-1/4 min-w-0 p-1.5 md:p-4"
                    style={{ backgroundColor: "rgba(97, 39, 158, 0.55)" }}
                  >
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%]">
                      66 (53%)
                    </div>
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      58 (47%)
                    </div>
                  </div>
                  <div
                    className="flex-1 min-w-0 p-1.5 md:p-4"
                    style={{ backgroundColor: "rgba(135, 169, 226, 0.55)" }}
                  >
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%]">
                      33 (54%)
                    </div>
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      28 (46%)
                    </div>
                  </div>
                </div>

                {/* ECOG */}
                <div className="flex items-stretch">
                  <div className="flex-1 min-w-0 p-1.5 md:p-4 flex items-center">
                    <div className="text-[#61279E] text-[10px] md:text-base font-semibold leading-[120%]">
                      ECOG
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 p-1.5 md:p-4">
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%]">
                      0
                    </div>
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%] mt-0.5 md:mt-2">
                      1
                    </div>
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%] mt-0.5 md:mt-2">
                      ≥ 2
                    </div>
                  </div>
                  <div className="w-1/4 min-w-0 p-1.5 md:p-4 bg-[rgba(224,219,244,0.40)]">
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%]">
                      49 (40%)
                    </div>
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      74 (60%)
                    </div>
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      1 (1%)
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 p-1.5 md:p-4">
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%]">
                      19 (31%)
                    </div>
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      41 (67%)
                    </div>
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      1 (2%)
                    </div>
                  </div>
                </div>

                {/* Тип ХКЦ на момент постановки диагноза */}
                <div className="flex items-stretch">
                  <div className="flex-1 min-w-0 p-1.5 md:p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                    <div className="text-[#61279E] text-[10px] md:text-base font-semibold leading-[120%]">
                      Тип ХКЦ на момент постановки диагноза
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 p-1.5 md:p-4 bg-[rgba(224,219,244,0.40)]">
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%]">
                      Внутрипеченочная
                    </div>
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%] mt-0.5 md:mt-2">
                      Внепееночная
                    </div>
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%] mt-0.5 md:mt-2">
                      Перихилярная
                    </div>
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%] mt-0.5 md:mt-2">
                      Неизвестно
                    </div>
                  </div>
                  <div
                    className="w-1/4 min-w-0 p-1.5 md:p-4"
                    style={{ backgroundColor: "rgba(97, 39, 158, 0.55)" }}
                  >
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%]">
                      111 (90%)
                    </div>
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      1 (1%)
                    </div>
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      4 (3%)
                    </div>
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      8 (6%)
                    </div>
                  </div>
                  <div
                    className="flex-1 min-w-0 p-1.5 md:p-4"
                    style={{ backgroundColor: "rgba(135, 169, 226, 0.55)" }}
                  >
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%]">
                      58 (95%)
                    </div>
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      1 (2%)
                    </div>
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      0
                    </div>
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      2 (3%)
                    </div>
                  </div>
                </div>

                {/* Распространенность заболевания */}
                <div className="flex items-stretch">
                  <div className="flex-1 min-w-0 p-1.5 md:p-4 flex items-center">
                    <div className="text-[#61279E] text-[10px] md:text-base font-semibold leading-[120%]">
                      Распространен-ность заболевания на момент скрининга
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 p-1.5 md:p-4">
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%]">
                      Местно-региональное
                    </div>
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%] mt-0.5 md:mt-2">
                      Метастатическое
                    </div>
                  </div>
                  <div className="w-1/4 min-w-0 p-1.5 md:p-4 bg-[rgba(224,219,244,0.40)]">
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%]">
                      9 (7%)
                    </div>
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      115 (93%)
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 p-1.5 md:p-4">
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%]">
                      5 (8%)
                    </div>
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      56 (92%)
                    </div>
                  </div>
                </div>

                {/* Цирроз печени */}
                <div className="flex items-stretch">
                  <div className="flex-1 min-w-0 p-1.5 md:p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                    <div className="text-[#61279E] text-[10px] md:text-base font-semibold leading-[120%]">
                      Цирроз печени при скрининге
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 p-1.5 md:p-4 bg-[rgba(224,219,244,0.40)]">
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%]">
                      Да
                    </div>
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%] mt-0.5 md:mt-2">
                      Нет
                    </div>
                  </div>
                  <div
                    className="w-1/4 min-w-0 p-1.5 md:p-4"
                    style={{ backgroundColor: "rgba(97, 39, 158, 0.55)" }}
                  >
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%]">
                      6 (5%)
                    </div>
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      118 (95%)
                    </div>
                  </div>
                  <div
                    className="flex-1 min-w-0 p-1.5 md:p-4"
                    style={{ backgroundColor: "rgba(135, 169, 226, 0.55)" }}
                  >
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%]">
                      3 (5%)
                    </div>
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      58 (95%)
                    </div>
                  </div>
                </div>

                {/* Мутация IDH1 */}
                <div className="flex items-stretch">
                  <div className="flex-1 min-w-0 p-1.5 md:p-4 flex items-center">
                    <div className="text-[#61279E] text-[10px] md:text-base font-semibold leading-[120%]">
                      Мутация IDH1
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 p-1.5 md:p-4">
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%]">
                      R132C
                    </div>
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%] mt-0.5 md:mt-2">
                      R132L
                    </div>
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%] mt-0.5 md:mt-2">
                      R132G
                    </div>
                    <div className="text-[#151518] text-[10px] md:text-base font-normal leading-[120%] mt-0.5 md:mt-2">
                      R132S или R132H
                    </div>
                  </div>
                  <div className="w-1/4 min-w-0 p-1.5 md:p-4 bg-[rgba(224,219,244,0.40)]">
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%]">
                      84 (68%)
                    </div>
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      21 (17%)
                    </div>
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      2 (2%)
                    </div>
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      2 (2%)
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 p-1.5 md:p-4">
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%]">
                      45 (74%)
                    </div>
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      7 (11%)
                    </div>
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      6 (10%)
                    </div>
                    <div className="text-center text-[#151518] text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      3 (5%)
                    </div>
                  </div>
                </div>

                {/* Концентрация CA19-9 */}
                <div className="flex items-stretch">
                  <div className="flex-[2] min-w-0 p-1.5 md:p-4 bg-[rgba(224,219,244,0.40)] flex items-center">
                    <div className="text-[#61279E] text-[10px] md:text-base font-semibold leading-[120%]">
                      Концентрация CA19-9 на исходном уровне*
                      <br />
                      (Ед/мл)
                    </div>
                  </div>
                  <div
                    className="w-1/4 min-w-0 p-1.5 md:p-4"
                    style={{ backgroundColor: "rgba(97, 39, 158, 0.55)" }}
                  >
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%]">
                      42,0
                    </div>
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      (0–8 560,0)
                    </div>
                  </div>
                  <div
                    className="w-1/4 min-w-0 p-1.5 md:p-4"
                    style={{ backgroundColor: "rgba(135, 169, 226, 0.55)" }}
                  >
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%]">
                      39,0
                    </div>
                    <div className="text-center text-white text-[10px] md:text-base font-semibold leading-[120%] mt-0.5 md:mt-2">
                      (0,1–11 529,0)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default DemografiyaModal;


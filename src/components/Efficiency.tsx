import { useState } from "react";
import GraphsMain from "./Graphs/Main";
import ClarIDHyModal from "./Clarl/ClarIDHyModal";
import DemografiyaModal from "./DemografiyaModal";
import AnimatedEffectBackground from "./AnimatedEffectBackground";

const Efficiency = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDemografiyaModalOpen, setIsDemografiyaModalOpen] = useState(false);

  return (
    <div id="efficiency" className="w-full max-w-full py-2 md:py-18 md:px-5 md:pb-24 bg-white">
      <div 
        className="mx-auto w-full max-w-[1360px] rounded-[16px] md:rounded-[20px] pt-8 md:pt-16 pb-2 md:pb-4 relative overflow-hidden bg-[#61279E]"
      >
        <AnimatedEffectBackground className="right-0 top-0" />

        <div
          className="flex flex-col gap-3 md:gap-6 px-4 md:px-16 pb-12 md:pb-0"
        >
          {/* Заголовок */}
          <h2 className="text-xs md:text-base font-semibold uppercase leading-[120%] tracking-[0.36px] md:tracking-[0.48px] text-white">
            Данные по эффективности
          </h2>

          {/* Контент с блоком mini справа */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-8 items-start">
            <div className="flex flex-col gap-8 md:gap-12 flex-1">
              {/* Текстовый блок */}
              <div className="flex flex-col gap-5 md:ap-6">
                <h3 className="w-full max-w-[949px] text-2xl md:text-[40px] font-semibold leading-[120%] md:leading-[110%] tracking-[-0.48px] md:tracking-[-1.2px] text-white">
                  Исследование ClarIDHy: международное двойное слепое
                  рандомизированное плацебо-контролируемое исследование III
                  фазы<sup>5,6</sup>
                </h3>
                <p className="w-full max-w-[949px] text-sm md:text-xl font-normal leading-[140%] text-white">
                    Цель исследования ClarIDHy: оценить эффективность и безопасность монотерапии ивосидениба
                    (ТИБСОВО®) в сравнении с плацебо у взрослых пациентов с холангиокарциномой на поздних
                    стадиях с мутацией в гене IDH1 (февраль 2017 – январь 2019).
                </p>
              </div>

              {/* Кнопки */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-3 flex-wrap">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#E74C39] px-8 py-4 md:px-8 whitespace-nowrap w-full md:w-auto cursor-pointer"
                >
                  <span className="text-sm md:text-base font-semibold leading-[140%] text-white">
                    Дизайн исследования ClarIDHy
                  </span>
                </button>
                <button
                  onClick={() => setIsDemografiyaModalOpen(true)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-white bg-white px-8 py-4 md:px-8 whitespace-nowrap w-full md:w-auto cursor-pointer"
                >
                  <span className="text-sm md:text-base font-semibold leading-[140%] text-[#151518]">
                    Исходные характеристики
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <GraphsMain />
      </div>

      {/* ClarIDHy Modal */}
      <ClarIDHyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Demografiya Modal */}
      <DemografiyaModal
        isOpen={isDemografiyaModalOpen}
        onClose={() => setIsDemografiyaModalOpen(false)}
      />
    </div>
  );
};

export default Efficiency;

import { useEffect } from "react";
import InfoIcon from "../InfoIcon";
import arrowSvg from "../../assets/arrow.svg";

interface ClarIDHyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ClarIDHyModal = ({ isOpen, onClose }: ClarIDHyModalProps) => {
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
      {/* Overlay and Modal Container */}
      <div
        className="fixed inset-0 z-[100] flex items-start md:items-center justify-center overflow-y-auto"
        onClick={onClose}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Modal Content */}
        <div
          className="relative w-full h-full bg-white flex flex-col items-center gap-16 md:gap-16 pb-[257px] md:pb-[257px] px-4 md:px-5 md:px-20 pt-4 md:pt-0 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - абсолютно позиционирован справа сверху */}
          <button
            onClick={onClose}
            className="absolute top-4 md:top-4 right-4 md:right-5 lg:right-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 opacity-50 hover:opacity-100 transition-opacity flex-shrink-0 cursor-pointer z-20"
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

          {/* Header */}
          <div className="w-full max-w-[1360px] h-auto md:h-[107px] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 p-4 md:p-0">
            <div className="flex items-end gap-3 w-full md:w-auto">
              <h2 className="text-2xl md:text-[32px] font-semibold leading-[120%] md:leading-[110%] tracking-[-0.72px] md:tracking-[-0.96px] text-[#151518]">
                Дизайн исследования ClarlDHy <sup>5,6</sup>
              </h2>
              {/* Info Icon */}
              <InfoIcon
                size={32}
                color="#151518"
                opacity={1}
                className="flex-shrink-0"
                text="ХК, холангиокарцинома; ПО, продолжительность ответа; ФС, функциональный статус; ECOG, Восточная объединенная группа онкологов; IDH, изоцитратдегидрогеназа; ЧОО, частота объективного ответа; ОВ, общая выживаемость; ФД, фармакодинамика; ВБП, выживаемость без прогрессирования; ФК, фармакокинетика; р/сут, раз в сутки; КЖ, качество жизни; RECIST v1.1, Критерии оценки ответа при солидных опухолях, версия 1,1; ВДО, время до ответа на лечение. 1. Abou-Alfa GK, et al. Lancet Oncol. 2020;21(6):796–807"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full max-w-[1360px] h-auto md:h-[472px] flex flex-col md:flex-row items-start gap-6 md:gap-6 relative">
            {/* Left Section - Criteria */}
            <div className="w-full md:w-[334px] flex flex-col items-start gap-5 rounded-xl">
              <div className="w-full flex flex-col items-start gap-6 p-5 md:p-6 rounded-[20px] bg-[rgba(224,219,244,0.40)]">
                <h3 className="w-full text-lg md:text-xl font-semibold leading-[120%] tracking-[-0.4px] text-[#151518]">
                  Основные критерии включения:
                </h3>
                <div className="w-full flex flex-col items-start gap-4">
                  <p className="text-sm md:text-base font-normal leading-[140%] text-[#151518]">
                    Измеряемый очаг (RECIST v1.1)
                  </p>
                  <p className="text-sm md:text-base font-normal leading-[140%] text-[#151518]">
                    Прогрессирование заболевания после 1 или 2 линий системной
                    терапии, вкл. гемцитабин или 5-фторурацил
                  </p>
                  <p className="text-sm md:text-base font-normal leading-[140%] text-[#151518]">
                    ECOG 0–1
                  </p>
                  <p className="text-sm md:text-base font-normal leading-[140%] text-[#151518]">
                    Без предшествующей терапии ингибитором IDH1
                  </p>
                  <p className="text-sm md:text-base font-normal leading-[140%] text-[#151518]">
                    Гистологически подтвержденный диагноз холангиокарциномы
                  </p>
                  <p className="text-sm md:text-base font-normal leading-[140%] text-[#151518]">
                    Наличие мутации IDH1 (методом NGS в центральной лаборатории)
                  </p>
                </div>
              </div>
            </div>

            {/* Randomization Info */}
            <div className="w-full md:w-[168px] flex flex-col items-start gap-4 md:mt-[123px]">
              <img src={arrowSvg} alt="Arrow" className="hidden md:block w-full" />
              <p className="text-sm md:text-base font-normal leading-[140%] text-[#151518]">
                Рандомизация (2:1)
              </p>
              <p className="text-sm md:text-base font-normal leading-[140%] text-[#151518]">
                N=185
              </p>
              <p className="text-sm md:text-base font-normal leading-[140%] text-[#151518]">
                Стратификация по кол-ву предшествующих линий терапии (1 или 2)
              </p>
            </div>

            {/* Treatment Boxes */}
            <div className="w-full md:w-[260px] flex flex-col items-start gap-2">
              {/* Ивосидениб Box */}
              <div className="w-full flex flex-col items-start">
                <div className="w-full flex flex-col items-start gap-6 p-5 md:p-6 rounded-[20px] bg-[#636466]">
                  <h4 className="w-full text-lg md:text-xl font-semibold leading-[120%] tracking-[-0.4px] text-white">
                    Ивосидениб 500 мг 1 раз в сутки
                  </h4>
                  <div className="w-full flex flex-col items-start gap-4">
                    <p className="text-sm md:text-base font-normal leading-[140%] text-white">
                      28-дневной цикл
                    </p>
                    <p className="text-sm md:text-base font-normal leading-[140%] text-white">
                      n=124; получавшие лечение n=121
                    </p>
                  </div>
                </div>
              </div>

              {/* Плацебо Box */}
              <div className="w-full flex flex-col items-start">
                <div className="w-full flex flex-col items-start gap-6 p-5 md:p-6 rounded-[20px] bg-[#636466]">
                  <h4 className="w-full text-lg md:text-xl font-semibold leading-[120%] tracking-[-0.4px] text-white">
                    Плацебо 1 раз в сутки
                  </h4>
                  <div className="w-full flex flex-col items-start gap-4">
                    <p className="text-sm md:text-base font-normal leading-[140%] text-white">
                      28-дневной цикл
                    </p>
                    <p className="text-sm md:text-base font-normal leading-[140%] text-white">
                      n= 61; получавшие лечение n=59
                    </p>
                    <p className="text-sm md:text-base font-normal leading-[140%] text-white">
                    n=124; получавшие лечение n=121
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Description */}
            <div className="w-full md:w-[168px] gap-4  text-sm md:text-base font-normal leading-[140%] text-[#151518] md:mt-[123px]">
              <img src={arrowSvg} alt="Arrow" className="hidden md:block w-full pb-6" />
              <p className="text-sm md:text-base font-normal leading-[140%] text-[#151518] pb-4">
              Лечение до прогрессирования заболевания, появления неприемлемой токсичности или отмены препарата.
              </p>
              <p className="text-sm md:text-base font-normal leading-[140%] text-[#151518]">
              Переход от плацебо на ивосидениб был разрешен при рентгенологическом прогрессировании заболевания
              </p>
            </div>

            {/* Right Section - Endpoints */}
            <div className="w-full md:w-[334px] flex flex-col items-start gap-8 rounded-xl bg-[#61279E] p-5 md:p-6">
              <div className="w-full flex flex-col items-start gap-6">
                <h3 className="w-full text-lg md:text-xl font-semibold leading-[120%] tracking-[-0.4px] text-white">
                  Первичная конечная точка:
                </h3>
                <p className="w-full text-sm md:text-base font-normal leading-[140%] text-white">
                  ВПБ (при оценке независимого радиологического центра)
                </p>
              </div>

              <div className="w-full h-px opacity-20 bg-white" />

              <div className="w-full flex flex-col items-start gap-6">
                <h3 className="w-full text-lg md:text-xl font-semibold leading-[120%] tracking-[-0.4px] text-white">
                  Вторичные конечные точки:
                </h3>
                <div className="w-full flex flex-col items-start gap-4">
                  <p className="text-sm md:text-base font-normal leading-[140%] text-white">
                  Общая выживаемость (ОВ):
                  </p>
                  <p className="text-sm md:text-base font-normal leading-[140%] text-white">
                  Объективная частота ответа по RECIST
                  </p>
                  <p className="text-sm md:text-base font-normal leading-[140%] text-white">
                  Продолжительность ответа и время до ответа
                  </p>
                  <p className="text-sm md:text-base font-normal leading-[140%] text-white">
                  ВБП по оценке исследователя
                  </p>
                  <p className="text-sm md:text-base font-normal leading-[140%] text-white">
                  Фармакокинетика <br /> и фармакодинамика
                  </p>
                  <p className="text-sm md:text-base font-normal leading-[140%] text-white">
                  Качество жизни (КЖ) по EOTC
                  </p>
                  <p className="text-sm md:text-base font-normal leading-[140%] text-white">
                  Безопасность
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClarIDHyModal;

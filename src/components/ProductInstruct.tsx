import tibsovo1 from "../assets/icons/1.svg";
import tibsovo2 from "../assets/icons/2.svg";
import tibsovo3 from "../assets/icons/3.svg";
import tibsovo4 from "../assets/icons/4.svg";
import tibsovo5 from "../assets/icons/5.svg";

const ProductInstruct = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-2 md:gap-2">
        {/* Блок 1 - Фиолетовый фон */}
        <div className="rounded-2xl md:rounded-[20px] bg-[#61279E] p-3 md:p-4 min-w-[240px] md:w-[334px] h-[164px] md:h-[488px] flex flex-col justify-between">
          <div className="w-12 h-12 md:w-[72px] md:h-[72px] rounded-xl md:rounded-2xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.08)] flex items-center justify-center flex-shrink-0">
            <img
              src={tibsovo1}
              alt="Доза препарата"
              className="w-7 h-7 md:w-auto md:h-auto"
            />
          </div>
          <p className="text-white text-xs md:text-base font-semibold md:font-semibold leading-[140%] md:leading-[22px] px-2 md:py-3 md:px-4 py-2">
            Рекомендуемая доза препарата ТИБСОВО
            <span className="text-xs md:text-base">®</span>:
            <br className="block md:hidden" />
            500 мг ТИБСОВО
            <span className="text-xs md:text-base">®</span> один раз в сутки
            <sup>7</sup>
          </p>
        </div>

        {/* Остальные 4 блока в два ряда */}
        <div className="flex-1 flex flex-col gap-2 md:gap-2">
          {/* Первый ряд - 2 блока */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-2 flex-1">
            {/* Блок 2 - Светлый фон */}
            <div className="rounded-2xl md:rounded-[20px] gap-13 md:gap-0 bg-[#F3F1FB] md:bg-[rgba(224,219,244,0.4)] p-3 md:p-4 min-w-[240px] flex-1 flex flex-col justify-between h-[164px] md:min-h-[240px]">
              <div className="w-12 h-12 md:w-[72px] md:h-[72px] rounded-xl md:rounded-2xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.08)] flex items-center justify-center flex-shrink-0">
                <img
                  src={tibsovo2}
                  alt="Доза препарата"
                  className="w-7 h-7 md:w-auto md:h-auto"
                />
              </div>
              <p className="text-[#151518] text-xs md:text-base font-normal leading-[140%] md:leading-[22px] px-2 md:px-4 md:py-3">
                2 таблетки принимают один раз в сутки,
                <br /> каждый раз примерно в одно и то же время<sup>7</sup>.
              </p>
            </div>

            {/* Блок 3 - Светлый фон */}
            <div className="rounded-2xl md:rounded-[20px] gap-13 md:gap-0 bg-[rgba(224,219,244,0.40)] p-3 md:p-4 min-w-[240px] flex-1 flex flex-col justify-between h-[164px] md:min-h-[240px] relative z-0">
              <div className="w-12 h-12 md:w-[72px] md:h-[72px] rounded-xl md:rounded-2xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.08)] flex items-center justify-center flex-shrink-0">
                <img
                  src={tibsovo3}
                  alt="Доза препарата"
                  className="w-7 h-7 md:w-auto md:h-auto"
                />
              </div>
              <p className="text-[#151518] text-xs md:text-base font-normal leading-[140%] md:leading-[22px] px-2 md:px-4 md:py-3">
                Таблетки следует проглатывать <br /> целиком, запивая водой
                <sup>7</sup>.
              </p>
            </div>
          </div>

          {/* Второй ряд - 2 блока */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-2 flex-1">
            {/* Блок 4 - Светлый фон */}
            <div className="rounded-2xl md:rounded-[20px] gap-13 md:gap-0 bg-[rgba(224,219,244,0.40)] p-3 md:p-4 min-w-[240px] flex-1 flex flex-col justify-between h-[164px] md:min-h-[240px]">
              <div className="w-12 h-12 md:w-[72px] md:h-[72px] rounded-xl md:rounded-2xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.08)] flex items-center justify-center flex-shrink-0">
                <img
                  src={tibsovo4}
                  alt="Доза препарата"
                  className="w-7 h-7 md:w-auto md:h-auto"
                />
              </div>
              <p className="text-[#151518] text-xs md:text-base font-normal leading-[140%] md:leading-[22px] px-2 md:px-4 md:py-3">
                Пациенты должны воздерживаться
                <br className="block md:hidden" /> от приема пищи в течение 2
                часов <br className="block md:hidden" /> до и 1 часа после
                приема ТИБСОВО
                <span className="text-xs md:text-base">®</span>.
              </p>
            </div>

            {/* Блок 5 - Светлый фон */}
            <div className="rounded-2xl md:rounded-[20px] gap-13 md:gap-0 bg-[rgba(224,219,244,0.40)] p-3 md:p-4 min-w-[240px] flex-1 flex flex-col justify-between h-[164px] md:min-h-[240px]">
              <div className="w-12 h-12 md:w-[72px] md:h-[72px] rounded-xl md:rounded-2xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.08)] flex items-center justify-center flex-shrink-0">
                <img
                  src={tibsovo5}
                  alt="Доза препарата"
                  className="w-7 h-7 md:w-auto md:h-auto"
                />
              </div>
              <p className="text-[#151518] text-xs md:text-base font-normal leading-[140%] md:leading-[22px] px-2 md:px-4 md:py-3">
                Пациенты должны отказаться от употребления грейпфрута и
                грейпфрутового сока во время лечения<sup>7</sup>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInstruct;

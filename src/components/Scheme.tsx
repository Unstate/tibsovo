import m1 from "../assets/ingib/1.svg";
import m2 from "../assets/ingib/2.svg";
import m3 from "../assets/ingib/3.svg";
import m4 from "../assets/ingib/4.svg";
import m5 from "../assets/ingib/5.svg";
import m6 from "../assets/ingib/6.svg";
import m7 from "../assets/ingib/7.svg";
import m8 from "../assets/ingib/8.svg";
import arrows from "../assets/ingib/arrows.svg";

const Scheme = () => {
  return (
    <div className="w-full bg-white rounded-[12px] md:rounded-[16px] overflow-hidden">
      {/* Фоновая область */}
      <div className="bg-[rgba(97,39,158,0.15)] px-4 py-4 md:px-5 md:py-12 lg:px-20 lg:py-[68px]">
        <div className="flex flex-col">
          {/* Заголовок схемы */}
          <h3 className="text-[#61279E] text-sm md:text-[28px] font-semibold leading-[120%] tracking-[-0.065px] md:tracking-[-0.98px]">
          Механизм действия ивосидениба (ТИБСОВО®)<sup>1,2</sup>
          </h3>

          {/* Схема: 4 блока сверху и 4 блока снизу */}
          <div className="flex flex-col gap-3 md:gap-6 mt-4 md:mt-11">
            {/* Верхний ряд - 4 блока */}
            <div className="flex flex-row items-end gap-1 md:gap-6 lg:gap-12">
              {/* Блок 1 - mIDH1 (фиолетовый) */}
              <div className="flex flex-col flex-1 gap-2 md:gap-3">
                <p className="text-[#151518] scheme-block-text font-normal leading-[140%] md:leading-[22px]">
                  Специфическое связывание <br/>с мутантным IDH1
                </p>
                <div className="flex items-center justify-center">
                  <img src={m1} alt="mIDH1" className="w-[70px] h-[19px] md:w-[260px] md:h-[82px]" />
                </div>
              </div>

              {/* Блок 2 - 2-ГГ (фиолетовый) */}
              <div className="flex flex-col flex-1 gap-2 md:gap-3">
                <p className="text-[#151518] scheme-block-text font-normal leading-[140%] md:leading-[22px]">
                    Тибсово ингибирует мутантный IDH1, блокирует выработку 2ГГ
                </p>
                <div className="flex items-center justify-center">
                  <img src={m2} alt="2-ГГ" className="w-[70px] h-[19px] md:w-[260px] md:h-[82px]" />
                </div>
              </div>

              {/* Блок 3 - α-КГ (фиолетовый) */}
              <div className="flex flex-col flex-1 gap-2 md:gap-3">
                <p className="text-[#151518] scheme-block-text font-normal leading-[140%] md:leading-[22px]">
                  Восстанавливаются механизмы <br/> клеточной дифференцировки
                </p>
                <div className="flex items-center justify-center">
                  <img src={m3} alt="КГ" className="w-[70px] h-[19px] md:w-[260px] md:h-[82px]" />
                </div>
              </div>

              {/* Блок 4 - mIDH1 (фиолетовый) */}
              <div className="flex flex-col flex-1 gap-2 md:gap-3">
                <p className="text-[#151518] scheme-block-text font-normal leading-[140%] md:leading-[22px]">
                  Контроль
                  <span className="hidden md:inline"><br /></span> заболевания
                </p>
                <div className="flex items-center justify-center">
                  <img src={m4} alt="mIDH1" className="w-[70px] h-[19px] md:w-[260px] md:h-[82px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Стрелки между блоками */}
      <div className="absolute mt-[-4px] flex items-center w-full px-4 md:px-5 lg:px-20 h-2 md:h-auto">
        {/* Структура точно как у блоков для правильного выравнивания */}
        <div className="flex flex-row w-full gap-1 md:gap-6 lg:gap-4">
          <div className="flex-1"></div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
        </div>
        {/* Стрелки абсолютно позиционированы от СЕРЕДИНЫ первого до СЕРЕДИНЫ последнего блока */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 px-4 md:px-5 lg:px-20">
          {/* Стрелки позиционируются от середины первого блока до середины последнего */}
          <div className="absolute left-[14%] right-[14%] flex items-center h-full">
            <img src={arrows} alt="arrows" className="w-full hidden md:block" />
            {/* Мобильная версия стрелок - горизонтальная линия с точками */}
            <div className="w-full h-[1px] bg-[#61279E] relative md:hidden">
              <div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-1 h-1 bg-[#61279E] rounded-full"></div>
              <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-1 h-1 bg-[#61279E] rounded-full"></div>
              <div className="absolute left-[75%] top-1/2 -translate-y-1/2 w-1 h-1 bg-[#61279E] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(135,169,226,0.15)] px-4 py-4 md:px-5 md:py-12 lg:px-20 lg:py-[68px]">
        <div className="flex flex-col">
          <div className="flex flex-col gap-3 md:gap-6">
            {/* Нижний ряд - 4 блока */}
            <div className="flex flex-row items-start gap-1 md:gap-6 lg:gap-12">
              {/* Блок 5 - α-КГ (голубой) */}
              <div className="flex flex-col flex-1 gap-2 md:gap-3">
                <div className="flex items-center justify-center">
                  <img src={m5} alt="α-КГ" className="w-[70px] h-[19px] md:w-[260px] md:h-[82px]" />
                </div>
                <p className="text-[#151518] scheme-block-text font-normal leading-[140%] md:leading-[22px]">
                  Мутация с приобретением <span className="hidden md:inline"><br /></span> функции
                </p>
              </div>

              {/* Блок 6 - 2-ГГ (голубой) */}
              <div className="flex flex-col flex-1 gap-2 md:gap-3">
                <div className="flex items-center justify-center">
                  <img src={m6} alt="2-ГГ" className="w-[70px] h-[19px] md:w-[260px] md:h-[82px]" />
                </div>
                <p className="text-[#151518] scheme-block-text font-normal leading-[140%] md:leading-[22px]">
                  Патологическая конверсия <span className="hidden md:inline"><br /></span> α-КГ (альфа-кетоглутарат) в 2-ГГ
                </p>
              </div>

              {/* Блок 7 - Итоговый результат (голубой) */}
              <div className="flex flex-col flex-1 gap-2 md:gap-3">
                <div className="flex items-center justify-center">
                  <img src={m7} alt="2-ГГ" className="w-[70px] h-[19px] md:w-[260px] md:h-[82px]" />
                </div>
                <p className="text-[#151518] scheme-block-text font-normal leading-[140%] md:leading-[22px]">
                  Накапливается онкометаболит, что приводит к нарушению эпигенетической регуляции
                </p>
              </div>

              {/* Блок 8 - Четвертый блок (голубой) */}
              <div className="flex flex-col flex-1 gap-2 md:gap-3">
                <div className="flex items-center justify-center">
                  <img src={m8} alt="2-ГГ" className="w-[70px] h-[19px] md:w-[260px] md:h-[82px]" />
                </div>
                <p className="text-[#151518] scheme-block-text font-normal leading-[140%] md:leading-[22px]">
                  Развитие опухоли: избыточная пролиферация и нарушение
                  дифференцировки
                </p>
              </div>
            </div>

            <div className="flex justify-start mt-2 md:mt-0">
              <h4 className="text-[#87A9E2] text-sm md:text-[28px] font-semibold leading-[120%] tracking-[-0.065px] md:tracking-[-0.48px]">
                Паталогическое состояние
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheme;

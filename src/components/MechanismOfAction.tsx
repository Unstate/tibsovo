import Scheme from "./Scheme";
import r1 from "../assets/roles/1.svg";
import r3 from "../assets/roles/3.svg";
import IconListItem from "./IconListItem";
import AnimatedEffectBackground from "./AnimatedEffectBackground";
import { useRef } from "react";

const MechanismOfAction = () => {
  const mechanismOfActionRef = useRef<HTMLDivElement>(null);
  const items = [
    {
      icon: r1,
      text: "Мутантный фермент IDH1 способствует онкогенезу, катализируя продукцию \n 2-гидроксиглутарата (2-ГГ), что приводит к нарушению эпигенетической регуляции \n и клеточного метаболизма<sup>1</sup>.",
    },
    {
      icon: r3,
      text: "Ивосидениб — мощный ингибитор мутантного фермента IDH1, целенаправленно \n воздействующий на все известные мутантные варианты IDH1<sup>1,2</sup>.",
    },
  ];
  return (
    <div id="mechanism-of-action" className="w-full pt-8 pb-2 md:py-18 md:px-5 md:pb-14" ref={mechanismOfActionRef}>
      <div className="px-2 md:px-0 mx-auto w-full md:max-w-[1360px] rounded-[16px] md:rounded-[20px] pt-8 md:pt-16 pb-2 md:pb-4 relative overflow-hidden bg-[#E74C39]">
        <AnimatedEffectBackground className="right-0 top-0" />
        <div className="flex flex-col gap-8 md:gap-12 px-0 md:px-4">
          {/* Первый блок - Текст */}
          <div className="flex flex-col w-full px-4 md:px-8 pb-0 md:pb-8">
            {/* Верхний заголовок */}
            <div className="flex flex-col gap-3 md:gap-0">
              <h3 className="text-white text-xs md:text-base font-semibold leading-[120%] tracking-[0.36px] md:tracking-[0.48px] uppercase">
                Механизм действия
              </h3>

              {/* Контент */}
              <div className="flex flex-col mt-0 md:mt-4 gap-4 md:gap-0">
                {/* Большой заголовок */}
                <h2 className="text-white text-2xl md:text-[40px] font-semibold leading-[120%] md:leading-[110%] tracking-[-0.48px] md:tracking-[-1.2px]">
                  Роль мутации в гене IDH1 при холангиокарциноме
                </h2>

                {/* Текст описания */}
                <p className="text-white text-sm md:text-xl font-normal leading-[140%] md:leading-[28px] mt-0 md:mt-6">
                  Мутации IDH1 диагностируются примерно в 10–20% случаев{" "}
                  <span className="hidden md:inline">
                    <br />
                  </span>
                  внутрипеченочной холангиокарциномы:
                </p>
              </div>
            </div>

            {/* Список пунктов */}
            <div className="flex flex-col gap-6 md:gap-10 mt-6 md:mt-12 w-full px-0 md:px-14 md:pr-0">
              {items.map((item, index) => (
                <IconListItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  color="#FFFFFF"
                  showGradient={true}
                  gradientOpacity={0.8}
                  textClassName="text-white text-xs md:text-xl leading-[140%] md:leading-[28px]"
                  boxShadow="0 0 20px 0 rgba(231, 76, 57, 0.08)"
                  iconSize={72}
                  parentRef={mechanismOfActionRef as RefObject<HTMLElement>}
                />
              ))}
            </div>
          </div>
          <Scheme />
        </div>
      </div>
    </div>
  );
};

export default MechanismOfAction;

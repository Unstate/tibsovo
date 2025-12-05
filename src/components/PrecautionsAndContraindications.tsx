import { RefObject, useRef } from "react";
import icon1 from "../assets/seventh/icons/1.svg";
import icon2 from "../assets/seventh/icons/2.svg";
import icon3 from "../assets/seventh/icons/3.svg";
import icon4 from "../assets/seventh/icons/4.svg";
import rectangle13Icon from "../assets/seventh/icons/Rectangle 13.svg";
import IconListItem from "./IconListItem";

function PrecautionsAndContraindications() {
  const precautionsAndContraindicationsRef = useRef<HTMLDivElement>(null);
  const precautions = [
    {
      text: "Перед началом лечения необходимо провести электрокардиографическое исследование (ЭКГ). ",
      boldText:
        "Продолжительность интервала QT, скорректированного \n по частоте сердечных сокращений (QTc), должен составлять менее 450 мс.",
      icon: icon1,
      },
    {
      text: "По возможности следует избегать совместного применения лекарственных препаратов, удлиняющих интервал QTc, умеренных и/или сильных ингибиторов CYP3A4.",
      icon: icon2,
    },
    {
      text: "Общий и биохимический анализы крови следует выполнять перед началом \n терапии препаратом ТИБСОВО®, по меньшей мере, один раз в неделю \n в течение первого месяца лечения.",
      icon: icon3,
    },
    {
      text: "Женщины, способные к деторождению, должны пройти тест на беременность перед началом лечения препаратом ТИБСОВО® и избегать возникновения беременности \n во время терапии и в течение не менее 1 месяца после приема последней дозы.",
      icon: icon4,
    },
  ];

  const contraindications = [
    {
      text: "Гиперчувствительность к ивосиденибу \n или к любому из вспомогательных веществ.",
      icon: rectangle13Icon,
    },
    {
      text: "Совместное применение сильных \n индукторов CYP3A4 или дабигатрана.",
      icon: rectangle13Icon,
    },
    {
      text: "Врожденный синдром \n удлиненного интервала QT.",
      icon: rectangle13Icon,
    },
    {
      text: "Семейный анамнез внезапной смерти \n или полиморфной желудочковой тахикардии.",
      icon: rectangle13Icon,
    },
    {
      text: "Продолжительность интервала QT/QTc > 500 мс, \n независимо от метода расчета корригированного интервала.",
      icon: rectangle13Icon,
    },
  ];

  return (
    <section
      className="w-full md:py-12 md:px-5 md:pb-12 "
    >
      {/* Основной контентный блок */}
      <div
        ref={precautionsAndContraindicationsRef}
        className="mx-auto w-full px-4 py-8 md:max-w-[1360px] bg-[rgba(224,219,244,0.4)] rounded-[16px] md:rounded-[20px] overflow-hidden"
      >
      <div
        className="mx-auto w-full md:max-w-[1360px]"
      >
        <div className="py-2 md:py-8 md:p-6 lg:px-11 lg:pt-10 md:pb-12 flex flex-col gap-8 md:gap-12">
          {/* БЛОК 1: ГЛАВНЫЙ ЗАГОЛОВОК */}
          <div
            className="w-full flex flex-col items-stretch justify-start md:pb-3"
          >
            <h2
              className="w-full text-left text-xl md:text-[28px] font-semibold tracking-[-0.4px] md:tracking-[-0.96px] leading-[120%] md:leading-[100%] text-[#151518]"
            >
              Перед началом приема препарата ТИБСОВО® требуется{" "}  
              <span className="hidden md:inline">
                <br /> подтвердить наличие у пациентов мутации в гене IDH1 R132 <br /> с использованием подходящего диагностического теста<sup>7</sup>
              </span>
              <span className="md:hidden">подтвердить наличие у пациентов мутации в гене IDH1 R132 с использованием подходящего диагностического теста<sup>7</sup></span>
            </h2> 
          </div>

          {/* БЛОК 2: МЕРЫ ПРЕДОСТОРОЖНОСТИ */}
          <div className="w-full flex flex-col items-stretch justify-start gap-6 md:gap-0 md:pb-5">
            {/* Заголовок раздела */}
            <div
              className="w-full flex items-center justify-start"
            >
              <h3
                className="flex-1 text-left text-base md:text-2xl font-semibold tracking-[-0.48px] leading-[140%] md:leading-[1.2] text-[#151518]"
              >
                Меры предосторожности перед применением<sup>7</sup>:
              </h3>
            </div>

            {/* Список пунктов мер предосторожности */}
            <div className="mt-0 md:mt-10 md:mt-12 pr-0 md:px-10 w-full flex flex-col items-stretch justify-start md:max-w-[82%]">
              {precautions.map((item, index) => (
                <div key={index} className={index > 0 ? "mt-6 md:mt-12" : ""}>
                  <IconListItem
                    icon={item.icon}
                    text={item.text}
                    boldText={item.boldText}
                    color="#6A19A4"
                    gradientOpacity={0.5}
                    className="pr-0"
                    textClassName="text-xs md:text-xl leading-[140%] md:leading-[28px]"
                    iconSize={72}
                    parentRef={precautionsAndContraindicationsRef as RefObject<HTMLElement>}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* БЛОК 3: ПРОТИВОПОКАЗАНИЯ */}
          <div className="w-full flex flex-col items-stretch justify-start gap-6 md:gap-0 md:pb-4">
            {/* Заголовок раздела */}
            <div
              className="w-full flex items-center justify-start px-4 md:px-0"
            >
              <h3
                className="flex-1 text-left text-base md:text-2xl font-semibold tracking-[-0.48px] leading-[140%] md:leading-[1.2] text-[#151518]"
              >
                Противопоказания к применению препарата ТИБСОВО®<sup>7</sup>:
              </h3>
            </div>

            {/* Список пунктов противопоказаний */}
            <div className="mt-0 md:mt-10 w-full flex flex-col items-stretch justify-start px-4 md:px-20">
              {contraindications.map((item, index) => (
                <div key={index} className={index > 0 ? "mt-6 md:mt-6" : ""}>
                  <IconListItem
                    icon={item.icon}
                    text={item.text}
                    color="#E74C39"
                    gradientOpacity={0.5}
                    className="pr-4 md:pr-0"
                    textClassName="text-xs md:text-xl leading-[140%] md:leading-[26px]"
                    iconSize={32}
                    parentRef={precautionsAndContraindicationsRef as RefObject<HTMLElement>}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default PrecautionsAndContraindications;

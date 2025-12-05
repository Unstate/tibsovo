import d1 from "../assets/drug/1.svg";
import d2 from "../assets/drug/2.svg";
import d3 from "../assets/drug/3.svg";
import d4 from "../assets/drug/4.svg";
import d5 from "../assets/drug/5.svg";
import IconListItem from "./IconListItem.tsx";
import {RefObject, useRef} from "react";

function DrugInteractions() {
  const drugInteractionsRef = useRef<HTMLDivElement>(null);
  const sections = [
    {
      title: "Сильные или умеренные ингибиторы CYP3A4<sup>7</sup>",
      icon: d1,
      items: [
        {
          text: "Совместное применение с умеренными или сильными ингибиторами CYP3A4 повышает концентрацию ивосидениба в плазме, что может увеличить риск удлинения интервала QTc.",
        },
        {
          text: "<strong>Умеренные ингибиторы CYP3A4:</strong> апрепитант, циклоспорин, дилтиазем, эритромицин, флуконазол, грейпфрут и грейпфрутовый сок, изавуконазол, верапамил.",
        },
        {
          text: "<strong>Сильные ингибиторы CYP3A4:</strong> кларитромицин, итраконазол, кетоконазол, позаконазол, ритонавир, вориконазол.",
        },
        {
          text: "Необходимо соблюдать осторожность при проведении лечения и тщательно контролировать параметры ЭКГ пациентов на предмет удлинения интервала QTc в отсутствие подходящего альтернативного лечения.",
        },
        {
          text: "При невозможности избежать применения умеренных или сильных ингибиторов CYP3A4 дозу ивосидениба следует снизить до 250 мг один раз в сутки.",
        },
      ],
    },
    {
      title: "Сильные индукторы CYP3A4<sup>7</sup>",
      icon: d2,
      items: [
        {
          text: "Ивосидениб является субстратом CYP3A4. Ожидается, что совместное применение сильных индукторов CYP3A4 (например, карбамазепина, фенобарбитала, фенитоина, рифампицина, препаратов зверобоя продырявленного (Hypericum perforatum)) снизит концентрацию ивосидениба в плазме, в связи с этим совместное применение вышеуказанных препаратов с препаратом ТИБСОВО® противопоказано.",
        },
      ],
    },
    {
      title: "Лекарственные препараты, удлиняющие интервал QTc",
      icon: d3,
      items: [
        {
          text: "Совместное применение лекарственных препаратов, удлиняющих интервал QTc (например, антиаритмических средств, фторхинолонов, антагонистов 5-HT3-рецепторов, противогрибковых средств группы триазолов), может повышать риск удлинения интервала QTc, такого применения следует по возможности избегать во время лечения препаратом ТИБСОВО®.",
        },
        {
          text: "Необходимо соблюдать осторожность при проведении лечения и тщательно контролировать параметры ЭКГ на предмет удлинения интервала QTc в отсутствие подходящего альтернативного лечения.",
        },
      ],
    },
    {
      title: "Влияние ТИБСОВО® на другие лекарственные препараты<sup>7</sup>",
      icon: d4,
      items: [
        {
          text: "Ивосидениб индуцирует CYP3A4, CYP2B6, CYP2C8, CYP2C9 и может индуцировать CYP2C19. Следовательно, он способен снизить системную экспозицию субстратов этих ферментов.",
        },
        {
          text: "При невозможности избежать применения таких лекарственных препаратов у пациентов следует контролировать утрату эффективности субстратов.",
        },
        {
          text: "К субстратам CYP3A4 с узким терапевтическим диапазоном относятся: алфентанил, циклоспорин, эверолимус, фентанил, пимозид, хинидин, сиролимус, такролимус.",
        },
        {
          text: "К субстратам CYP2B6 с узким терапевтическим диапазоном относятся: циклофосфамид, ифосфамид, метадон.",
        },
        {
          text: "К субстратам CYP2C8 с узким терапевтическим диапазоном относятся: паклитаксел, пиоглитазон, репаглинид.",
        },
        {
          text: "К субстратам CYP2C9 с узким терапевтическим диапазоном относятся: фенитоин, варфарин.",
        },
        {
          text: "К субстратам CYP2C19 относится: омепразол.",
        },
        {
          text: "Итраконазол или кетоконазол не следует совместно применять с ивосиденибом из-за ожидаемого снижения противогрибковой эффективности этих препаратов.",
        },
      ],
    },
      {
          title: "Взаимодействие с транспортерами<sup>7</sup>",
          icon: d5,
          items: [
              {
                  text: "Ивосидениб ингибирует P-gp и может индуцировать P-gp. Таким образом, он способен изменять системную экспозицию действующих веществ, транспортируемых преимущественно P-gp (например, дабигатран).",
              },
              {
                  text: "Совместное применение дабигатрана противопоказано.",
              },
              {
                  text: "Ивосидениб ингибирует OAT3, полипептид 1B1, транспортирующий органические анионы (OATP1B1), и полипептид 1B3, транспортирующий органические анионы (OATP1B3). Следовательно, он способен повысить системную экспозицию субстратов OAT3 или OATP1B1/1B3.",
              },
              {
                  text: "Совместного применения субстратов ОАТ3 (например, бензилпенициллина, фуросемида) или чувствительных субстратов ОАТР1В1/1В3 (например, аторвастатина, правастатина, розувастатина) во время лечения препаратом Тибсово следует по возможности избегать. Необходимо соблюдать осторожность при проведении лечения в отсутствие подходящих альтернатив.",
              },
              {
                  text: "Необходимо соблюдать осторожность при проведении лечения в отсутствие подходящих альтернатив.",
              },
          ],
      },
  ];

  return (
    <section ref={drugInteractionsRef} className="relative w-full flex flex-col items-stretch justify-start bg-white py-8 px-4 md:px-6 2xl:px-0 md:pt-0 md:pb-16 overflow-hidden">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-stretch justify-start px-0">
        {/* Заголовок секции - отдельный блок */}
        <div className="w-full">
          <div className="w-full max-w-[1243px] flex flex-col items-stretch justify-start pl-0">
            <h2 className="pb-6 text-[#151518] text-[20px] md:text-[28px] font-semibold leading-[120%] md:leading-[35px] tracking-[-0.4px] md:tracking-[-0.96px] max-w-[343px] md:max-w-none">
              Взаимодействие с другими лекарственными <br className="hidden md:block" /> препаратами и другие виды взаимодействия<sup>7</sup>
            </h2>
          </div>
        </div>

        {/* Главный контейнер */}
        <div className="w-full max-w-[1360px] ьвЖmx-auto flex flex-col items-stretch justify-start">
          {/* Внутренний контейнер с контентом */}
          <div className="w-full flex flex-col items-start justify-start text-[32px] text-[#151518] font-semibold tracking-[-0.96px] leading-[35px] pl-0">
            {/* Блок со списком секций */}
            <div className="w-full flex flex-col items-stretch justify-start md:px-16 md:py-9">
              {sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className={`relative w-full flex flex-col md:flex-row items-start justify-start overflow-visible gap-0 md:gap-6 ${
                    sectionIndex > 0 ? "mt-0 md:mt-12" : ""
                  }`}
                >
                  {/* Контейнер иконки */}
                  <div className="relative flex items-center flex-shrink-0 w-full md:w-auto">
                      <IconListItem
                          icon={section.icon}
                          iconSize={72}
                          text={section.title}
                          color="#87A9E2"
                          showGradient={true}
                          gradientOpacity={0.8}
                          textClassName="md:hidden text-[#151518] text-[14px] font-semibold leading-[140%] flex-1 ml-0"
                          parentRef={drugInteractionsRef as RefObject<HTMLElement>}
                      />
                  </div>

                  {/* Контейнер со списком элементов с padding для мобильной версии */}
                  <div className="w-full flex flex-col items-stretch justify-start pt-5 pb-8 px-0 md:py-0 md:px-0 md:pt-4 flex-1 min-w-0 md:max-w-[79%]">
                    {/* Заголовок секции для десктопной версии */}
                    <h3 className="hidden md:block text-[#151518] text-[24px] tracking-normal mb-5"
                        dangerouslySetInnerHTML={{ __html: section.title }} />

                    {/* Список элементов */}
                    <div className="w-full flex flex-col items-stretch justify-start gap-4 md:gap-0">
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`relative w-full flex items-start justify-start gap-2 md:gap-3 ${
                            itemIndex > 0 ? "mt-0 md:mt-5" : ""
                          }`}
                        >
                          {/* Буллет-точка */}
                          <div className="flex items-center justify-center flex-shrink-0 w-[17px] h-[17px] md:w-7 md:h-auto md:pl-1.5 md:pr-1.5 md:pt-2 md:pb-2">
                            <div className="rounded-full flex-shrink-0 w-[7px] h-[7px] md:w-3 md:h-3 bg-[#87A9E2]" />
                          </div>

                          {/* Текст элемента */}
                          <p
                            className="flex-1 min-w-0 text-[#151518] text-xs md:text-xl font-normal leading-[140%] md:leading-[28.2px] tracking-normal"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DrugInteractions;

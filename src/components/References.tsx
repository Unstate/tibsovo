import { useState } from "react";
import frame30Icon from "../assets/eighth/Frame 30.svg";

function References() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleList = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="w-full flex flex-col items-stretch justify-start bg-white py-6 md:pt-6 md:pb-20">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-stretch justify-start px-4 md:px-0">
        {/* Основной контейнер с фоном */}
        <div className="w-full flex flex-col items-stretch justify-start">
          <div className="w-full flex flex-col items-stretch justify-start px-6 md:px-12 py-6 md:py-12 rounded-[16px] md:rounded-2xl bg-[rgba(224,219,244,0.4)] gap-6 md:gap-0">
            {/* Заголовок с черным кружочком */}
            <div className="w-full flex items-center justify-start flex-wrap gap-6 md:gap-6">
              {/* Текст заголовка */}
              <h2 className="flex-1 text-[24px] md:text-[40px] text-[#151518] md:text-[#151518] font-semibold tracking-[-0.48px] md:tracking-[-1.2px] leading-[120%] md:leading-[1.1]">
                Список литературы
              </h2>

              {/* Черный кружочек - кликабельная иконка */}
              <button
                onClick={toggleList}
                className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full self-stretch relative my-auto cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center"
                aria-label={
                  isExpanded
                    ? "Свернуть список литературы"
                    : "Развернуть список литературы"
                }
              >
                <img
                  src={frame30Icon}
                  alt=""
                  className="w-full h-full object-contain"
                  style={{
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </button>
            </div>

            {/* Список литературы */}
            {isExpanded && (
              <div className="w-full flex flex-col items-stretch justify-start mt-0 md:mt-8 px-0 md:px-2 text-[#151518] text-xs md:text-base font-normal leading-[140%] md:leading-[1.4] lg:max-w-[72%] overflow-hidden transition-all duration-300 ease-in-out">
                <ol className="list-decimal list-outside ml-4 space-y-3 md:space-y-4">
                  <li>
                    Dhillon S. Ivosidenib: first global approval. Drugs.
                    2018;78:1509–16;
                  </li>
                  <li>
                    Popovici-Muller J, et al. ACS Med Chem Lett. 2018;9:300–5.
                  </li>
                  <li>
                    Vogel A, Bridgewater J, Edeline J, et al, on behalf of the
                    ESMO Guidelines Committee Biliary tract cancer: <br />
                    ESMO Clinical Practice Guideline for diagnosis, treatment
                    and follow-up Ann Oncol. 2023;34(2):127-140.
                  </li>
                  <li>
                    Benson A.B. et al. Biliary Tract Cancers NCCN guidelines v2.
                    2025,
                    https://www.nccn.org/professionals/physician_gls/pdf/btc.pdf
                  </li>
                  <li>Zhu AX et al. JAMA Oncol. 2021;7(11):1669-1677.</li>
                  <li>
                    Abou-Alfa GK, Macarulla T, Javle MM, Kelley RK, Lubner SJ,
                    Adeva J, et al. Ivosidenib in IDH1-mutant,
                    chemotherapy-refractory cholangiocarcinoma (ClarIDHy): a
                    multicentre, randomised, double-blind, placebo-controlled,
                    phase 3 study. Lancet Oncol. 2020;21(6):796-807.
                  </li>
                  <li className="cursor-pointer">
                    <a
                      href="https://servier.ru/wp-content/uploads/2025/12/20251023_spc-ru_tibsovo_rus_0003.pdf"
                      target="_blank"
                    >
                      ОБЩАЯ ХАРАКТЕРИСТИКА ЛЕКАРСТВЕННОГО ПРЕПАРАТА ТИБСОВО®
                      ЛП-№(012213)-(РГ-RU) от 23.10.2025.
                    </a>
                  </li>
                  <li>
                    Mondesir J, Wille-kens C, Touat M, de Botton S. IDH1 and
                    IDH2 mutations as novel therapeutic targets: current
                    perspectives. J Blood Med. 2016;7:171-180.
                    doi:10.2147/JBM.570716
                  </li>
                  <li>
                    Boscoe AN, Rolland C, Kelley RK. Frequency and prognostic
                    significance of isocitrate dehydrogenase 1 mutations in
                    cholangiocarcinoma: a systematic literature review. J
                    Gustrointesl Oncol. 2019;10(4);751-765.
                    doi:10.21037/jgo.2019.03.10
                  </li>
                  <li>
                    Abou-Alfa GK et al. Characterization of IDH-1 mutant
                    cholangiocarcinoma patients who have received ivosidenib
                    treatment longer than a year. Poster presented at
                    Cholangiocarcinoma Foundation 2023, Salt Lake City, US
                  </li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default References;

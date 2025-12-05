const NoProgressDescGraph = () => {
  return (
    <div className="w-full lg:w-[436px] flex-shrink-0 px-2 md:px-1 pt-12 md:pt-4 py-4 md:pr-4 max-w-full">
      <div className="rounded-xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.12)] px-5 py-5 md:px-8 md:pt-7 md:pb-7 flex flex-col gap-5 md:gap-6 h-full">
        <h3 className="text-[#151518] text-2xl md:text-[29px] font-semibold leading-[110%] tracking-[-0.48px] md:tracking-[-0.96px]">
          ТИБСОВО® способствует улучшению медианы
            ВБП приблизительно в 2 раза по сравнению
            с плацебо<sup>5,6</sup>

        </h3>
        <div className="text-[#151518] text-xs md:text-base font-normal leading-[140%] md:leading-[22px]">
          <p className="mb-0 md:mb-5">
              Только в группе ТИБСОВО® были пациенты с ВБП 6 месяцев или более: 32% ВБП в течение 6 мес и 22% ВБП в
              течение 12 мес в группе ТИБСОВО® по сравнению с 0 пациентов в группе плацебо.
          </p>
          <p className="mb-0 md:mb-5 mt-4 md:mt-0">
              Частота контроля заболевания составила в группе ивосидениба 53% (частичная ремиссия 2% и стабилизация заболевания 51%),
              по сравнению с частотой стабилизации заболевания в группе плацебо 28%.
          </p>
          <p className="mt-4 md:mt-0">
              Преимущества ТИБСОВО® были отмечены во всех подгруппах, в том числе у пациентов, получивших один или два режима терапии,
              а также у пациентов с функциональным статусом (ФС) 0 или 1 по классификации ECOG.
          </p>
        </div>
        <button className="mt-0 md:mt-[50px] w-full px-8 py-4 rounded-lg border border-[#151518] text-[#151518] text-sm md:text-base font-semibold leading-[140%] hover:opacity-90 transition-opacity cursor-pointer">
          Скачать брошюру
        </button>
      </div>
    </div>
  );
};

export default NoProgressDescGraph;

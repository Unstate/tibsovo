const CommonDescGraph = () => {
  return (
    <div className="w-full lg:w-[436px] flex-shrink-0 px-2 md:px-1 pt-12 md:pt-4 py-4 md:pr-4 max-w-full">
      <div className="rounded-xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.12)] px-5 py-5 md:px-8 md:pt-7 md:pb-7 flex flex-col gap-5 md:gap-6 h-full">
        <h3 className="text-[#151518] text-2xl md:text-[28px] font-semibold leading-[120%] md:leading-[35px] tracking-[-0.02em] md:tracking-[-0.96px]">
          ТИБСОВО® способствует улучшению медианы ВБП&nbsp;приблизительно
          в&nbsp;2&nbsp;раза по сравнению с&nbsp;плацебо<sup>5,6</sup>
        </h3>
        <div className="text-[#151518] text-xs md:text-base font-normal leading-[140%] md:leading-[22px]">
          <p className="mb-0 md:mb-5 mt-4 md:mt-0 text-[14px] md:text-[16px]">
            {`Применение ТИБСОВО® в абсолютных числах повысило общую выживаемость (ОВ), по сравнению с плацебо, в популяции рандомизированных пациентов, начавших лечение (ITT), и статистически значимо улучшило ОВ по сравнению с плацебо с учетом поправки на переход с плацебо на активное лечение (с использованием метода RPSFT; p <0,001).`}
          </p>
          <p className="mt-4 md:mt-0 text-[14px] md:text-[16px]">
            Из 61 пациента в группе плацебо 70% перешли на терапию ТИБСОВО®.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommonDescGraph;

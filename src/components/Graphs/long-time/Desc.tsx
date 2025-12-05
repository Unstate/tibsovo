const LongTimeDescGraph = () => {
  return (
    <div className="w-full lg:w-[436px] flex-shrink-0 px-2 md:px-1 pt-12 md:pt-4 py-4 md:pr-4 max-w-full">
      <div className="rounded-xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.12)] px-5 py-5 md:px-8 md:pt-7 md:pb-7 flex flex-col gap-5 md:gap-6 h-full">
        <h3 className="text-[#151518] text-2xl md:text-[29px] font-semibold leading-[110%] tracking-[-0.48px] md:tracking-[-0.96px]">
          1 из 6 пациентов достигли длительного ответа на терапии ТИБСОВО®<sup>10</sup>
        </h3>
        <div className="text-[#151518] text-xs md:text-base font-normal leading-[140%] md:leading-[22px]">
          <p className="mb-0 md:mb-5">
            16% пациентов (26/162) в исследовании ClarlDHy продолжали получать
            ТИБСОВО® <strong>в течение ≥ 1 года</strong>
          </p>
          <p className="mb-0 md:mb-5">
            Среди пациентов, продолжавших лечение препаратом ТИБСОВО® в течение
            1 года и более,{" "}
            <strong>
              92% пациентов были живы через 2 года. Таким образом, терапия
              ТИБСОВО® способствует достижению длительных ответов.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LongTimeDescGraph;

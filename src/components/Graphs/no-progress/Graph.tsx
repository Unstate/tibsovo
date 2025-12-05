import graphImage from "../../../assets/graphs/222.svg";
import InfoIcon from "../../InfoIcon";

const NoProgressGraphsImage = () => {
  return (
    <div>
      <div className="flex flex-col px-4 md:px-0 pb-4">
        <div className="flex flex-col relative">
          <div className="flex items-start justify-between">
            <div className="text-[#61279E] text-[56px] md:text-[80px] font-medium leading-[120%] md:leading-[110%] tracking-[-1.92px] md:tracking-[-4px]">
              63%
            </div>
            {/* Info Icon - visible on mobile only, positioned to the right */}
            <div className="md:hidden">
              <InfoIcon
                size={24}
                color="#9D9CA2"
                opacity={1}
                className="flex-shrink-0"
                text="Tibsovo. Инструкция по применению. Servier Pharmaceuticals LLC; 2023."
              />
            </div>
          </div>
          <div className="text-[#151518] text-sm md:text-base font-normal leading-[140%] md:leading-[22px] md:mt-1 md:max-w-[100%]">
            снижение риска прогрессирования заболевания или смерти<br /> (ОР, 0.37 [95% ДИ, 0.25-0.54]; P&lt;0.0001)
          </div>
        </div>
      </div>
      {/* Graph Image */}
      <div className="flex flex-col px-1 pt-8 md:px-1 md:pb-4">
        <img src={graphImage} alt="Graph" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default NoProgressGraphsImage;

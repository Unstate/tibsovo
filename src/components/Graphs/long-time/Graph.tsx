import graphImage from "../../../assets/graphs/333.svg";
import InfoIcon from "../../InfoIcon";

const LongTimeGraphsImage = () => {
  return (
    <div>
      <div className="flex flex-col px-4 md:px-0 pb-4">
        <div className="flex flex-row relative gap-4 items-center">
          <div className="md:hidden absolute right-[-20px] top-0">
            <InfoIcon
              size={24}
              color="#9D9CA2"
              opacity={1}
              className="flex-shrink-0"
              text="Tibsovo. Инструкция по применению. Servier Pharmaceuticals LLC; 2023."
            />
          </div>
          <div className="flex items-start justify-between">
            <div className="text-[#e74c39] text-[72px] md:text-[104px] font-medium leading-[120%] md:leading-[110%] tracking-[-1.92px] md:tracking-[-4px]">
              92%
            </div>
            {/* Info Icon - visible on mobile only, positioned to the right */}
          </div>
          <div className="text-[#151518] text-sm md:text-base font-normal leading-[140%] md:leading-[22px] md:mt-1 md:max-w-[48%] relative">
            пациентов были
            <br /> живы через 2 года.
          </div>
        </div>
      </div>
      {/* Graph Image */}
      <div className="flex flex-col px-1 pt-8 md:px-2 md:pb-4">
        <img src={graphImage} alt="Graph" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default LongTimeGraphsImage;

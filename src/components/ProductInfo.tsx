import tibsovoImage from '../assets/product-tbs.png'
import ProductInstruct from './ProductInstruct'
import IconListItem from './IconListItem'
import warnIcon from '../assets/icons/warn.svg'
import { RefObject, useRef } from 'react'

const ProductInfo = () => {
  const productInfoRef = useRef<HTMLDivElement>(null);
  return (
    <div id="product-info" className="w-full px-0 md:px-4 bg-white relative" ref={productInfoRef}>
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="flex flex-col relative">
          {/* Мобильная версия - абсолютное позиционирование */}
          {/* Первый ряд - Первый блок и Третий блок рядом */}
          <div className="flex flex-col lg:flex-row md:gap-48 relative">
            {/* Первый блок - Текст и кнопка */}
            <div className="flex-1 pt-12 pb-6 md:pt-6 flex flex-col px-4 md:px-0 relative z-10">
              <div className="flex flex-col gap-3 md:gap-0">
                {/* Верхний заголовок */}
                <h3 className="text-[#61279E] text-xs md:text-base font-semibold leading-[120%] tracking-[0.36px] md:tracking-[0.48px] uppercase">
                  Способ применения
                </h3>
                
                {/* Контент */}
                <div className="flex flex-col gap-4 md:gap-0 md:mt-2">
                  {/* Большой заголовок */}
                  <h2 className="text-[#61279E] text-2xl md:text-[40px] font-semibold leading-[120%] md:leading-[44px] tracking-[-0.48px] md:tracking-[-1.2px]">
                    Режим дозирования ТИБСОВО<span className="text-2xl md:text-[40px]">®</span>: один раз в день<sup>7</sup>
                  </h2>
                  
                  {/* Текст описания */}
                  <p className="text-[#151518] text-sm md:text-xl font-normal leading-[140%] md:leading-[28px] md:mt-6">
                    Препарат ТИБСОВО<span className="text-sm md:text-xl">®</span> в режиме монотерапии показан для лечения взрослых пациентов с местнораспространенной или метастатической холангиокарциномой
                     с мутацией в гене IDH1 R132, ранее получавших лечение, как минимум, в рамках 
                     одной линии системной терапии<sup>7</sup>.
                  </p>
                </div>
              </div>
              
              {/* Кнопка */}
              <button className="mt-8 md:mt-12 self-stretch md:self-start px-7  md:px-8 py-4 rounded-lg border border-[#151518] text-[#151518] text-sm md:text-base font-semibold leading-[140%] hover:opacity-90 transition-opacity cursor-pointer">
              Скачать брошюру: режим дозирования
              </button>
            </div>

            {/* Третий блок - Фотография препарата - только на десктопе */}
            <div className="md:flex flex-1 lg:flex-none bg-white pt-5 px-6 items-end justify-center relative">
              <div className="w-full h-[267px] md:h-[444px] rounded-xl flex items-end justify-center overflow-hidden relative z-10">
                <img 
                  src={tibsovoImage} 
                  alt="Препарат ТИБСОВО"
                  className="w-full h-full object-contain max-w-full"
                />
              </div>
            </div>
          </div>
          
          {/* ProductInstruct - с отступами для мобильных */}
          <div className="px-4 md:px-0 relative z-10">
            <ProductInstruct />
          </div>
          {/* Блок с предупреждением */}
          <div className="p-4 md:p-12 md:pb-12 relative z-10">
            <IconListItem
              icon={warnIcon}
              iconSize={56}
              text=""
              boldText={`Лечение следует продолжать до прогрессии заболевания \n или до тех пор, пока пациент не перестанет переносить терапию.<sup>7</sup>`}
              color="#87A9E2"
              showGradient={true}
              gradientOpacity={0.8}
              textClassName="text-xs md:text-base font-semibold md:font-normal leading-[140%] md:leading-[22px]"
              parentRef={productInfoRef as RefObject<HTMLElement>}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo


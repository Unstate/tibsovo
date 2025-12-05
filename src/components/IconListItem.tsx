import { useState, useEffect, useRef, RefObject } from 'react'

interface IconListItemProps {
  icon: string;
  text: string;
  boldText?: string;
  color: string;
  showGradient?: boolean;
  className?: string;
  textClassName?: string;
  gradientOpacity?: number; // Опциональная прозрачность градиента (0-1)
  boxShadow?: string; // Опциональная кастомная тень
  iconSize?: number; // Размер иконки (ширина и высота) в пикселях
  parentRef?: RefObject<HTMLElement>; // Опциональный ref родителя, до границ которого нужно растянуть градиент
}

function IconListItem({
  icon,
  text,
  boldText,
  color,
  showGradient = true,
  className = "",
  textClassName = "",
  gradientOpacity = 0.8,
  boxShadow = "0 0 20px 0 rgba(97, 39, 158, 0.08)",
  iconSize = 72,
  parentRef: externalParentRef,
}: IconListItemProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [gradientLeft, setGradientLeft] = useState(0)
  const internalParentRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  
  // Используем переданный ref или внутренний
  const parentRef = externalParentRef || internalParentRef

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const updateGradientPosition = () => {
      if (parentRef?.current && innerRef.current) {
        const parentRect = parentRef.current.getBoundingClientRect()
        const innerRect = innerRef.current.getBoundingClientRect()
        // Вычисляем расстояние от левой границы родителя до левой границы внутреннего контейнера
        const leftOffset = innerRect.left - parentRect.left
        setGradientLeft(-leftOffset)
      }
    }

    updateGradientPosition()
    window.addEventListener('resize', updateGradientPosition)
    window.addEventListener('scroll', updateGradientPosition, true)
    
    return () => {
      window.removeEventListener('resize', updateGradientPosition)
      window.removeEventListener('scroll', updateGradientPosition, true)
    }
  }, [parentRef])

  // Применяем деление на 1.5 для мобильных устройств
  const adjustedIconSize = isMobile ? iconSize / 1.5 : iconSize

  // Убираем переносы строк на мобильных устройствах
  const processedText = isMobile ? text.replace(/\n/g, ' ') : text
  const processedBoldText = isMobile && boldText ? boldText.replace(/\n/g, ' ') : boldText

  // Парсим цвет для градиента
  const getRgbaColor = (hexColor: string, opacity: number) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  // Вычисляем размер иконки пропорционально iconSize
  // iconSize = 72 -> iconImageSize = 40
  // iconSize = 56 -> iconImageSize = 32
  // Линейная интерполяция: iconImageSize = 0.5 * iconSize + 4
  const iconImageSize = Math.round(0.5 * adjustedIconSize + 4);

  return (
    <div
      ref={externalParentRef ? undefined : internalParentRef}
      className={`relative w-full flex items-center gap-3 md:gap-6 justify-start overflow-visible ${className}`}
    >
      {/* Единый блок: прямоугольник с кругом и текст */}
      <div
        ref={innerRef}
        className="relative flex items-center flex-1 min-w-0 gap-3 md:gap-6"
      >
        {/* Прямоугольник, растянутый влево с градиентом прозрачности */}
        {showGradient && (
          <div
            className="absolute pointer-events-none"
            style={{
              left: `${gradientLeft}px`,
              right: `calc(100% - ${adjustedIconSize}px)`,
              top: "50%",
              transform: "translateY(-50%)",
              height: `${adjustedIconSize}px`,
              background: `linear-gradient(to right, ${getRgbaColor(
                color,
                0.1
              )} 0%, ${getRgbaColor(color, gradientOpacity)} 100%)`,
              borderTopRightRadius: `${adjustedIconSize / 2}px`,
              borderBottomRightRadius: `${adjustedIconSize / 2}px`,
            }}
          />
        )}

        {/* Круглый блок с иконкой */}
        <div
          className="relative rounded-full flex items-center justify-center flex-shrink-0 z-10"
          style={{
            width: `${adjustedIconSize}px`,
            height: `${adjustedIconSize}px`,
            backgroundColor: color,
            boxShadow: boxShadow,
          }}
        >
          <img
            src={icon}
            alt=""
            style={{
              width: `${iconImageSize}px`,
              height: `${iconImageSize}px`,
              objectFit: "contain",
            }}
          />
        </div>

        {/* Текст элемента списка */}
        <p
          className={`text-[#151518] text-xl font-normal leading-[28px] flex-1 min-w-0 relative z-10 ${isMobile ? 'whitespace-normal' : 'whitespace-pre-line'} break-words ${textClassName}`}
        >
          <span dangerouslySetInnerHTML={{ __html: processedText }}/>
          {processedBoldText && (
            <>
              {" "}
              <strong className="font-bold" dangerouslySetInnerHTML={{ __html: processedBoldText }}/>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default IconListItem;


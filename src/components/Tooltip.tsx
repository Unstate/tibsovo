import { useEffect, useRef, useState } from 'react';

interface TooltipProps {
  text: string;
  onClose: () => void;
}

const Tooltip = ({ text, onClose }: TooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    // Вычисляем позицию относительно иконки
    const updatePosition = () => {
      if (tooltipRef.current) {
        const parent = tooltipRef.current.parentElement;
        if (parent) {
          // Ищем SVG элемент внутри родителя (это и есть иконка)
          const svg = parent.querySelector('svg');
          const iconElement = svg || parent;
          const iconRect = iconElement.getBoundingClientRect();
          
          // Получаем реальную ширину tooltip
          const tooltipRect = tooltipRef.current.getBoundingClientRect();
          // Используем реальную ширину или fallback на 448px (десктоп) или вычисляем из max-w
          let tooltipWidth = tooltipRect.width;
          if (!tooltipWidth || tooltipWidth === 0) {
            // Если tooltip еще не отрендерился, используем приблизительную ширину
            const isMobile = window.innerWidth < 768;
            tooltipWidth = isMobile ? Math.min(448, window.innerWidth * 0.95) : 448;
          }
          
          // Размещаем tooltip снизу, выровненный по центру иконки
          // Центр tooltip совпадает с центром иконки
          const left = iconRect.left + iconRect.width / 2;
          const top = iconRect.bottom + 8; // снизу с отступом 8px
          
          setPosition({ top, left });
        }
      }
    };

    // Используем requestAnimationFrame для обновления позиции после рендера
    requestAnimationFrame(() => {
      updatePosition();
      // Повторный вызов для использования реальной ширины tooltip
      requestAnimationFrame(() => {
        updatePosition();
      });
    });
    
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [onClose]);

  // Форматируем текст, заменяя переносы строк на <br>
  const formattedText = text.split('\n').map((line, index, array) => {
    if (index === array.length - 1 && !line.trim()) {
      return null;
    }
    if (index === array.length - 1) {
      return <span key={index}>{line}</span>;
    }
    return (
      <span key={index}>
        {line}
        <br />
      </span>
    );
  }).filter(Boolean);

  return (
    <div
      ref={tooltipRef}
      className="fixed z-[9999] w-[448px] min-w-[300px] max-w-[95%] md:max-w-[90%] md:w-[448px] bg-white rounded-xl p-3 md:p-4 shadow-[0_0_54px_0_rgba(21,21,24,0.06)]"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        right: 'auto',
        transform: 'translateX(-50%)',
        maxHeight: '344px',
        overflowY: 'auto',
        pointerEvents: 'auto',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="text-[#151518] text-xs md:text-sm font-normal leading-[140%] font-['Geist',-apple-system,Roboto,Helvetica,sans-serif]">
        {formattedText}
      </div>
    </div>
  );
};

export default Tooltip;


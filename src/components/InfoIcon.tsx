import { useState, useRef, useEffect } from 'react';
import Tooltip from './Tooltip';

interface InfoIconProps {
  text: string;
  size?: 20 | 24 | 32;
  color?: string;
  className?: string;
  strokeWidth?: number;
  opacity?: number;
}

const InfoIcon = ({ 
  text, 
  size = 24, 
  color = '#636466',
  className = '',
  strokeWidth = 1.5,
  opacity = 0.5
}: InfoIconProps) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isTooltipOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (iconRef.current && !iconRef.current.contains(target)) {
        setIsTooltipOpen(false);
      }
    };

    // Небольшая задержка, чтобы не закрыть сразу после открытия
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isTooltipOpen]);

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsTooltipOpen(!isTooltipOpen);
  };

  // Определяем viewBox в зависимости от размера
  const viewBox = size === 32 ? '0 0 32 32' : size === 24 ? '0 0 24 24' : '0 0 20 20';
  
  // Параметры для разных размеров
  const iconParams = {
    32: {
      circle: { cx: '16.0001', cy: '16', r: '12.005' },
      path1: { d: 'M14.666 20.6686H17.7464' },
      path2: { d: 'M16.2127 20.6686V14.9996H14.6787' },
      path3: { d: 'M16.1332 10.9943C16.1332 11.1784 15.9839 11.3277 15.7998 11.3277C15.6156 11.3277 15.4663 11.1784 15.4663 10.9943C15.4663 10.8101 15.6156 10.6608 15.7998 10.6608' },
      path4: { d: 'M15.8 10.6608C15.9842 10.6608 16.1335 10.8101 16.1335 10.9943' },
      strokeWidth: 2
    },
    24: {
      circle: { cx: '11.9998', cy: '12', r: '9.00375' },
      path1: { d: 'M10.998 15.5014H13.3083' },
      path2: { d: 'M12.1583 15.5015V11.2497H11.0078' },
      path3: { d: 'M12.0999 8.24569C12.0999 8.38382 11.9879 8.4958 11.8498 8.4958C11.7117 8.4958 11.5997 8.38382 11.5997 8.24569C11.5997 8.10756 11.7117 7.99559 11.8498 7.99559' },
      path4: { d: 'M11.8498 7.99558C11.9879 7.99558 12.0999 8.10755 12.0999 8.24568' },
      strokeWidth: 1.5
    },
    20: {
      circle: { cx: '10.0002', cy: '9.99995', r: '7.50312' },
      path1: { d: 'M9.1665 12.9178H11.0918' },
      path2: { d: 'M10.1326 12.9179V9.37476H9.17383' },
      path3: { d: 'M10.0838 6.87143C10.0838 6.98654 9.99044 7.07985 9.87534 7.07985C9.76023 7.07985 9.66692 6.98654 9.66692 6.87143C9.66692 6.75632 9.76023 6.66301 9.87534 6.66301' },
      path4: { d: 'M9.87513 6.66297C9.99024 6.66297 10.0836 6.75628 10.0836 6.87139' },
      strokeWidth: 1.5
    }
  };

  const params = iconParams[size as keyof typeof iconParams];
  const finalStrokeWidth = size === 32 ? 2 : strokeWidth;
  const finalColor = size === 32 ? '#151518' : color;

  return (
    <div ref={iconRef} className="relative">
      <svg
        onClick={handleIconClick}
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`cursor-pointer ${className}`}
        style={{ opacity }}
      >
        <g opacity={opacity}>
          <circle
            cx={params.circle.cx}
            cy={params.circle.cy}
            r={params.circle.r}
            stroke={finalColor}
            strokeWidth={finalStrokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={params.path1.d}
            stroke={finalColor}
            strokeWidth={finalStrokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={params.path2.d}
            stroke={finalColor}
            strokeWidth={finalStrokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={params.path3.d}
            stroke={finalColor}
            strokeWidth={finalStrokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={params.path4.d}
            stroke={finalColor}
            strokeWidth={finalStrokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      
      {isTooltipOpen && (
        <Tooltip text={text} onClose={() => setIsTooltipOpen(false)} />
      )}
    </div>
  );
};

export default InfoIcon;


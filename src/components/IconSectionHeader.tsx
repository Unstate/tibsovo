interface IconSectionHeaderProps {
  icon?: string;
  color: string;
  gradientOpacity?: number;
  className?: string;
}

function IconSectionHeader({
  icon,
  color,
  gradientOpacity = 0.8,
  className = "",
}: IconSectionHeaderProps) {
  // Парсим цвет для градиента
  const getRgbaColor = (hexColor: string, opacity: number) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <div
      className={`relative flex items-start flex-shrink-0 gap-8 ${className}`}
    >
      {/* Прямоугольник, растянутый влево с градиентом прозрачности */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "calc((100vw - 1360px) / 2 * -1)",
          right: "calc(100% - 72px)",
          top: "0",
          height: "72px",
          background: `linear-gradient(to right, ${getRgbaColor(
            color,
            0
          )} 0%, ${getRgbaColor(color, gradientOpacity)} 100%)`,
          borderTopRightRadius: "36px",
          borderBottomRightRadius: "36px",
        }}
      />

      {/* Круглый блок с иконкой */}
      <div
        className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center flex-shrink-0 z-10"
        style={{
          backgroundColor: color,
          boxShadow: "0 0 20px 0 rgba(97, 39, 158, 0.08)",
        }}
      >
        {icon && (
          <img
            src={icon}
            alt=""
            className="w-10 h-10 object-contain"
          />
        )}
      </div>
    </div>
  );
}

export default IconSectionHeader;


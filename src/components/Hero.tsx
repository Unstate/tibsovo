import heroImageMob from "../assets/hero-mob.svg";
import { useEffect, useRef } from "react";

function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Добавляем класс для запуска анимации после монтирования
    const timer = setTimeout(() => {
      if (svgRef.current) {
        svgRef.current.classList.add('animate');
      }
    }, 500); // Небольшая задержка после загрузки

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Применяем отступы для диапазона 1360-1400px
    const updatePadding = () => {
      if (containerRef.current) {
        const width = window.innerWidth;
        if (width >= 1360 && width <= 1400) {
          containerRef.current.style.paddingLeft = '20px';
          containerRef.current.style.paddingRight = '20px';
        } else {
          containerRef.current.style.paddingLeft = '';
          containerRef.current.style.paddingRight = '';
        }
      }
    };

    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  const scrollToEfficiency = () => {
    const element = document.getElementById('efficiency');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    {
      value: "до 63%",
      description:
        "снижение риска прогрессирования заболевания <br /> или смерти (ОР, 0.37 [95% ДИ, 0.25-0.54]; P<0.0001)<sup>5,6</sup>",
      fullWidth: true,
    },
    {
      value: "32%",
      description: "12-мес ВБП на терапии \n ТИБСОВО®<sup>5,6</sup>",
      fullWidth: false,
    },
    {
      value: "22%",
      description: "6-мес ВБП на терапии \n ТИБСОВО®<sup>5,6</sup>",
      fullWidth: false,
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden min-h-[594px] md:min-h-auto">
      {/* Background Image - Mobile */}
      <img
        src={heroImageMob}
        alt=""
        className="absolute top-[38px] max-h-[200px] right-0 h-auto object-contain pointer-events-none md:hidden"
        aria-hidden="true"
      />
      {/* Background Image - Desktop */}
      <div className="absolute max-w-[35%] top-[0] right-0 h-auto object-contain pointer-events-none hidden md:block hero-image-container">
        <svg
          ref={svgRef}
          width="666"
          height="900"
          viewBox="0 0 666 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto hero-lines-svg"
        >
          {/* Line 1 */}
          <g className="hero-line hero-line-1">
            <g className="hero-line-content">
              <path
                d="M59.0816 445.114L1000.49 -321.862C1012.39 -331.551 1014.17 -349.048 1004.48 -360.941L1002.02 -363.957C992.335 -375.851 974.839 -377.637 962.946 -367.947L21.5351 399.028C9.64169 408.717 7.85515 426.214 17.5448 438.107L20.0021 441.123C29.6917 453.017 47.1882 454.803 59.0816 445.114Z"
                fill="url(#paint8_linear_644_14718)"
              />
              <path
                d="M43.7645 451.509C61.57 451.509 76.0041 437.075 76.0041 419.27C76.0041 401.464 61.57 387.03 43.7645 387.03C25.9591 387.03 11.5249 401.464 11.5249 419.27C11.5249 437.075 25.9591 451.509 43.7645 451.509Z"
                fill="#6A19A4"
              />
            </g>
          </g>
          {/* Line 2 */}
          <g className="hero-line hero-line-2">
            <g className="hero-line-content">
              <path
                d="M1076.46 -335.687L135.046 431.288C123.152 440.978 121.366 458.474 131.055 470.368L133.513 473.384C143.202 485.277 160.699 487.064 172.592 477.374L1114 -289.601C1125.9 -299.291 1127.68 -316.787 1117.99 -328.681L1115.54 -331.697C1105.85 -343.59 1088.35 -345.377 1076.46 -335.687Z"
                fill="url(#paint7_linear_644_14718)"
              />
              <path
                d="M157.275 483.749C175.081 483.749 189.515 469.314 189.515 451.509C189.515 433.704 175.081 419.269 157.275 419.269C139.47 419.269 125.036 433.704 125.036 451.509C125.036 469.314 139.47 483.749 157.275 483.749Z"
                fill="#E74C39"
              />
            </g>
          </g>

          {/* Line 3 */}
          <g className="hero-line hero-line-3">
            <g className="hero-line-content">
              <path
                d="M962.945 -118.247L21.5348 648.728C9.64146 658.418 7.85497 675.914 17.5446 687.808L20.0019 690.824C29.6915 702.717 47.188 704.504 59.0813 694.814L1000.49 -72.1611C1012.39 -81.8507 1014.17 -99.3472 1004.48 -111.241L1002.02 -114.257C992.335 -126.15 974.839 -127.937 962.945 -118.247Z"
                fill="url(#paint0_linear_644_14718)"
              />
              <path
                d="M43.7889 701.18C61.5944 701.18 76.0285 686.746 76.0285 668.94C76.0285 651.135 61.5944 636.701 43.7889 636.701C25.9835 636.701 11.5493 651.135 11.5493 668.94C11.5493 686.746 25.9835 701.18 43.7889 701.18Z"
                fill="#87A9E2"
              />
            </g>
          </g>

          {/* Line 4 */}
          <g className="hero-line hero-line-4">
            <g className="hero-line-content">
              <path
                d="M205.807 694.814L1147.22 -72.1612C1159.11 -81.8508 1160.9 -99.3473 1151.21 -111.241L1148.75 -114.257C1139.06 -126.15 1121.56 -127.937 1109.67 -118.247L168.261 648.728C156.367 658.418 154.581 675.914 164.27 687.808L166.728 690.824C176.417 702.717 193.914 704.504 205.807 694.814Z"
                fill="url(#paint1_linear_644_14718)"
              />
              <path
                d="M190.488 701.187C208.293 701.187 222.727 686.753 222.727 668.947C222.727 651.142 208.293 636.708 190.488 636.708C172.682 636.708 158.248 651.142 158.248 668.947C158.248 686.753 172.682 701.187 190.488 701.187Z"
                fill="#61279E"
              />
            </g>
          </g>

          {/* Line 5 */}
          <g className="hero-line hero-line-5">
            <g className="hero-line-content">
              <path
                d="M1299.76 -157.26L358.348 609.715C346.455 619.405 344.668 636.901 354.358 648.795L356.815 651.811C366.505 663.704 384.001 665.491 395.895 655.801L1337.31 -111.174C1349.2 -120.864 1350.99 -138.36 1341.3 -150.253L1338.84 -153.27C1329.15 -165.163 1311.65 -166.949 1299.76 -157.26Z"
                fill="url(#paint2_linear_644_14718)"
              />
              <path
                d="M380.606 662.197C398.411 662.197 412.845 647.762 412.845 629.957C412.845 612.151 398.411 597.717 380.606 597.717C362.8 597.717 348.366 612.151 348.366 629.957C348.366 647.762 362.8 662.197 380.606 662.197Z"
                fill="#E74C39"
              />
            </g>
          </g>

          {/* Line 6 */}
          <g className="hero-line hero-line-6">
            <g className="hero-line-content">
              <path
                d="M317.688 835.702L1259.1 68.7265C1270.99 59.0369 1272.78 41.5404 1263.09 29.647L1260.63 26.6309C1250.94 14.7375 1233.45 12.951 1221.55 22.6407L280.141 789.616C268.248 799.306 266.462 816.802 276.151 828.695L278.608 831.712C288.298 843.605 305.795 845.391 317.688 835.702Z"
                fill="url(#paint4_linear_644_14718)"
              />
              <path
                d="M302.341 842.079C320.147 842.079 334.581 827.645 334.581 809.84C334.581 792.034 320.147 777.6 302.341 777.6C284.536 777.6 270.102 792.034 270.102 809.84C270.102 827.645 284.536 842.079 302.341 842.079Z"
                fill="#87A9E2"
              />
            </g>
          </g>

          {/* Line 7 */}
          <g className="hero-line hero-line-7">
            <g className="hero-line-content">
              <path
                d="M570.095 747.038L1511.51 -19.9368C1523.4 -29.6264 1525.19 -47.1229 1515.5 -59.0162L1513.04 -62.0325C1503.35 -73.9258 1485.85 -75.7123 1473.96 -66.0227L532.548 700.953C520.655 710.642 518.868 728.139 528.558 740.032L531.015 743.048C540.705 754.942 558.201 756.728 570.095 747.038Z"
                fill="url(#paint3_linear_644_14718)"
              />
              <path
                d="M554.787 753.436C572.592 753.436 587.027 739.001 587.027 721.196C587.027 703.39 572.592 688.956 554.787 688.956C536.981 688.956 522.547 703.39 522.547 721.196C522.547 739.001 536.981 753.436 554.787 753.436Z"
                fill="#61279E"
              />
            </g>
          </g>

          {/* Line 8 */}
          <g className="hero-line hero-line-8">
            <g className="hero-line-content">
              <path
                d="M1456.95 66.0527L515.535 833.028C503.641 842.718 501.855 860.214 511.545 872.107L514.002 875.123C523.691 887.017 541.188 888.803 553.081 879.114L1494.49 112.139C1506.39 102.449 1508.17 84.9523 1498.48 73.059L1496.02 70.0428C1486.34 58.1495 1468.84 56.3631 1456.95 66.0527Z"
                fill="url(#paint5_linear_644_14718)"
              />
              <path
                d="M537.76 885.486C555.566 885.486 570 871.052 570 853.247C570 835.441 555.566 821.007 537.76 821.007C519.955 821.007 505.521 835.441 505.521 853.247C505.521 871.052 519.955 885.486 537.76 885.486Z"
                fill="#E74C39"
              />
            </g>
          </g>

          <defs>
            <linearGradient
              id="paint0_linear_644_14718"
              x1="1003.25"
              y1="-112.749"
              x2="18.7732"
              y2="689.316"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8DABDF" />
              <stop offset="0.48" stopColor="#90ADE0" stopOpacity="0.99" />
              <stop offset="0.66" stopColor="#9BB5E3" stopOpacity="0.95" />
              <stop offset="0.78" stopColor="#AEC4E8" stopOpacity="0.88" />
              <stop offset="0.88" stopColor="#CAD8F0" stopOpacity="0.79" />
              <stop offset="0.97" stopColor="#EDF2FA" stopOpacity="0.66" />
              <stop offset="1" stopColor="white" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_644_14718"
              x1="165.477"
              y1="689.334"
              x2="1149.96"
              y2="-112.731"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.6" />
              <stop offset="0.02" stopColor="#F3EDF8" stopOpacity="0.63" />
              <stop offset="0.08" stopColor="#CFB4E2" stopOpacity="0.73" />
              <stop offset="0.14" stopColor="#AF84CE" stopOpacity="0.81" />
              <stop offset="0.22" stopColor="#965CBF" stopOpacity="0.88" />
              <stop offset="0.31" stopColor="#823EB3" stopOpacity="0.94" />
              <stop offset="0.42" stopColor="#7429AA" stopOpacity="0.97" />
              <stop offset="0.57" stopColor="#6C1CA5" stopOpacity="0.99" />
              <stop offset="1" stopColor="#6A19A4" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_644_14718"
              x1="1340.09"
              y1="-151.78"
              x2="355.609"
              y2="650.285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E74C39" />
              <stop offset="0.46" stopColor="#E34E3C" stopOpacity="0.99" />
              <stop offset="0.63" stopColor="#DF5F50" stopOpacity="0.96" />
              <stop offset="0.75" stopColor="#D97266" stopOpacity="0.9" />
              <stop offset="0.84" stopColor="#E8A095" stopOpacity="0.83" />
              <stop offset="0.93" stopColor="#F2CAC4" stopOpacity="0.73" />
              <stop offset="1" stopColor="white" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_644_14718"
              x1="529.764"
              y1="741.558"
              x2="1514.24"
              y2="-60.5063"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.6" />
              <stop offset="0.02" stopColor="#F3EDF8" stopOpacity="0.63" />
              <stop offset="0.08" stopColor="#CFB4E2" stopOpacity="0.73" />
              <stop offset="0.14" stopColor="#AF84CE" stopOpacity="0.81" />
              <stop offset="0.22" stopColor="#965CBF" stopOpacity="0.88" />
              <stop offset="0.31" stopColor="#823EB3" stopOpacity="0.94" />
              <stop offset="0.42" stopColor="#7429AA" stopOpacity="0.97" />
              <stop offset="0.57" stopColor="#6C1CA5" stopOpacity="0.99" />
              <stop offset="1" stopColor="#6A19A4" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_644_14718"
              x1="277.38"
              y1="830.203"
              x2="1261.86"
              y2="28.139"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.6" />
              <stop offset="0.03" stopColor="#EDF2FA" stopOpacity="0.66" />
              <stop offset="0.12" stopColor="#CAD8F0" stopOpacity="0.79" />
              <stop offset="0.22" stopColor="#AEC4E8" stopOpacity="0.88" />
              <stop offset="0.34" stopColor="#9BB5E3" stopOpacity="0.95" />
              <stop offset="0.52" stopColor="#90ADE0" stopOpacity="0.99" />
              <stop offset="1" stopColor="#8DABDF" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_644_14718"
              x1="1497.28"
              y1="71.5329"
              x2="512.795"
              y2="873.597"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E74C39" />
              <stop offset="0.46" stopColor="#E34E3C" stopOpacity="0.99" />
              <stop offset="0.63" stopColor="#DF5F50" stopOpacity="0.96" />
              <stop offset="0.75" stopColor="#D97266" stopOpacity="0.9" />
              <stop offset="0.84" stopColor="#E8A095" stopOpacity="0.83" />
              <stop offset="0.93" stopColor="#F2CAC4" stopOpacity="0.73" />
              <stop offset="1" stopColor="white" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_644_14718"
              x1="1616.23"
              y1="318.642"
              x2="631.751"
              y2="1120.71"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6A19A4" />
              <stop offset="0.43" stopColor="#6C1CA5" stopOpacity="0.99" />
              <stop offset="0.58" stopColor="#7429AA" stopOpacity="0.97" />
              <stop offset="0.69" stopColor="#823EB3" stopOpacity="0.94" />
              <stop offset="0.78" stopColor="#965CBF" stopOpacity="0.88" />
              <stop offset="0.86" stopColor="#AF84CE" stopOpacity="0.81" />
              <stop offset="0.92" stopColor="#CFB4E2" stopOpacity="0.73" />
              <stop offset="0.98" stopColor="#F3EDF8" stopOpacity="0.63" />
              <stop offset="1" stopColor="white" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_644_14718"
              x1="1116.79"
              y1="-330.207"
              x2="132.306"
              y2="471.858"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E74C39" />
              <stop offset="0.46" stopColor="#E34E3C" stopOpacity="0.99" />
              <stop offset="0.63" stopColor="#DF5F50" stopOpacity="0.96" />
              <stop offset="0.75" stopColor="#D97266" stopOpacity="0.9" />
              <stop offset="0.84" stopColor="#E8A095" stopOpacity="0.83" />
              <stop offset="0.93" stopColor="#F2CAC4" stopOpacity="0.73" />
              <stop offset="1" stopColor="white" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_644_14718"
              x1="18.7513"
              y1="439.633"
              x2="1003.23"
              y2="-362.431"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.6" />
              <stop offset="0.02" stopColor="#F3EDF8" stopOpacity="0.63" />
              <stop offset="0.08" stopColor="#CFB4E2" stopOpacity="0.73" />
              <stop offset="0.14" stopColor="#AF84CE" stopOpacity="0.81" />
              <stop offset="0.22" stopColor="#965CBF" stopOpacity="0.88" />
              <stop offset="0.31" stopColor="#823EB3" stopOpacity="0.94" />
              <stop offset="0.42" stopColor="#7429AA" stopOpacity="0.97" />
              <stop offset="0.57" stopColor="#6C1CA5" stopOpacity="0.99" />
              <stop offset="1" stopColor="#6A19A4" />
            </linearGradient>
          </defs>
        </svg>
        <style>{`
          /* Элементы изначально на своих местах - видимы полностью */
          .hero-line-content {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }

          /* Анимация укорачивания на 10% по длине диагональной линии с эффектом волны */
          .hero-lines-svg.animate .hero-line-content {
            animation: 
              heroShortenDiagonal 1.5s ease-in-out forwards,
              heroWave 2s ease-in-out infinite;
          }

          .hero-lines-svg.animate .hero-line-1 .hero-line-content {
            animation-delay: 0.3s, 0.3s;
          }
          .hero-lines-svg.animate .hero-line-2 .hero-line-content {
            animation-delay: 0.5s, 0.5s;
          }
          .hero-lines-svg.animate .hero-line-3 .hero-line-content {
            animation-delay: 0.7s, 0.7s;
          }
          .hero-lines-svg.animate .hero-line-4 .hero-line-content {
            animation-delay: 0.9s, 0.9s;
          }
          .hero-lines-svg.animate .hero-line-5 .hero-line-content {
            animation-delay: 1.1s, 1.1s;
          }
          .hero-lines-svg.animate .hero-line-6 .hero-line-content {
            animation-delay: 1.3s, 1.3s;
          }
          .hero-lines-svg.animate .hero-line-7 .hero-line-content {
            animation-delay: 1.5s, 1.5s;
          }
          .hero-lines-svg.animate .hero-line-8 .hero-line-content {
            animation-delay: 1.7s, 1.7s;
          }

          /* Анимация укорачивания на 10% по длине линии */
          /* Обрезает только дальний конец линии (справа вверху), окружность остается нетронутой (слева внизу) */
          @keyframes heroShortenDiagonal {
            0% {
              clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            }
            100% {
              /* Обрезаем 10% от длины - убираем дальний конец (справа вверху) */
              /* Окружность находится слева внизу (0% 100%) - эта область полностью сохраняется */
              /* Обрезаем правый верхний угол по диагонали, сохраняя всю левую и нижнюю часть */
              clip-path: polygon(0% 0%, 90% 0%, 91.4% 8.6%, 100% 100%, 0% 100%);
            }
          }

          /* Волновая анимация - плавное движение по диагонали (вверх-вправо) */
          @keyframes heroWave {
            0%, 100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(8px, -8px);
            }
          }
        `}</style>
      </div>

      {/* Content Container */}
      <div
        ref={containerRef}
        className="hero-content-container relative z-10 mx-auto w-full max-w-[1360px] pl-4 pr-4  mt-[56px] pt-[24px] pb-10 md:pt-[100px] lg:pt-[71px]"
      >
        {/* Text Content */}
        <div className="flex flex-col items-start gap-1 md:gap-1">
          <h1 className="max-w-[55%] md:max-w-[66%] text-[#61279E] text-[32px] md:text-4xl lg:text-[64px] font-semibold leading-[110%] tracking-[-0.96px] md:tracking-[-2.56px]">
            ТИБСОВО
            <span className="text-[32px] md:text-4xl lg:text-[64px]">®</span>
          </h1>
          <p className="text-[#61279E] text-[24px] md:text-[40px] font-semibold leading-[110%] md:max-w-[63%] md:tracking-[-0.96px] tracking-[-0.02em] hyphens-manual pb-4">
            Ивосидениб: мощный ингибитор мутантного фермента
            изоцитратдегид&shy;рогеназы первого типа (IDH1)
          </p>
          <p className="text-[#151518] text-sm md:text-xl font-normal leading-[140%] max-w-full md:max-w-[675px]">
            Ивосидениб (ТИБСОВО®) является единственным препаратом таргетной
            терапии, направленной на мутацию IDH1, который включен в клинические
            рекомендации ESMO (I-A) и NCCN (категория 1) для пациентов с
            холангиокарциномой<sup>3,4</sup>.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mt-8 md:mt-10 lg:mt-[125px] flex flex-col gap-2 w-full md:max-w-[560px]">
          {/* First large card */}
          <h2 className="text-[#61279E] text-[16px] md:text-xl font-semibold leading-[120%] tracking-[-0.36px] md:tracking-[-0.48px] mb-2">
            Исследование ClarIDHy
          </h2>
          <div
            className="group relative rounded-2xl md:rounded-[20px] bg-[rgba(224,219,244,0.4)] p-4 md:p-5 lg:p-5.5 flex flex-col justify-center items-start gap-2 md:gap-3 cursor-pointer transition-all duration-300 hover:bg-[#61279E] hover:scale-[1.02] hover:shadow-lg"
            onClick={scrollToEfficiency}
          >
            <div className="text-[#61279E] group-hover:text-white text-2xl md:text-[44px] font-semibold leading-[110%] tracking-[-0.72px] md:tracking-[-1.32px] transition-colors duration-300">
              {stats[0].value}
            </div>
            <div
              className="text-[#151518] group-hover:text-white text-xs md:text-base font-normal leading-[140%] transition-colors duration-300"
              dangerouslySetInnerHTML={{ __html: stats[0].description }}
            />

            {/* Info Icon */}
            <div className="absolute right-5 top-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-[#636466] group-hover:stroke-white transition-colors duration-300"
              >
                <path
                  d="M6.00098 15V1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.002 9.99902L6.001 15L1 9.99902"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Two smaller cards - always in row, 1/2 width each on mobile */}
          <div className="flex flex-row items-stretch gap-2">
            {stats.slice(1).map((stat, index) => (
              <div
                key={index}
                className="group relative rounded-2xl md:rounded-[20px] bg-[rgba(224,219,244,0.4)] p-4 md:p-5 lg:p-5 flex flex-col justify-center items-start gap-2 md:gap-3 w-1/2 flex-1 cursor-pointer transition-all duration-300 hover:bg-[#61279E] hover:scale-[1.02] hover:shadow-lg"
                onClick={scrollToEfficiency}
              >
                <div
                  className="text-[#61279E] group-hover:text-white text-2xl md:text-[44px] font-semibold leading-[110%] tracking-[-0.72px] md:tracking-[-1.32px] transition-colors duration-300"
                  dangerouslySetInnerHTML={{ __html: stat.value }}
                />
                <div
                  className="text-[#151518] group-hover:text-white text-xs md:text-base font-normal leading-[140%] transition-colors duration-300"
                  dangerouslySetInnerHTML={{ __html: stat.description }}
                />
                {/* Info Icon */}
                <div className="absolute right-5 top-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-[#636466] group-hover:stroke-white transition-colors duration-300"
                  >
                    <path
                      d="M6.00098 15V1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.002 9.99902L6.001 15L1 9.99902"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <div className="relative py-4 md:py-2 flex flex-col justify-center items-start gap-2 md:gap-3">
            <div className="text-[#636466] text-[10px] md:text-xs font-normal leading-[140%]">
              ОР — отношение рисков, ДИ — доверительный интервал, <br />
              ВБП — выживаемость без прогрессирования
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

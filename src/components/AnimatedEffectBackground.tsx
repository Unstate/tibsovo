import React, { useEffect, useRef } from 'react';

interface AnimatedEffectBackgroundProps {
  className?: string;
}

const AnimatedEffectBackground: React.FC<AnimatedEffectBackgroundProps> = ({ className = '' }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const groups = svg.querySelectorAll('g[data-circle]');
    let animationFrame: number;
    let startTime = Date.now();

    // Центры кругов (приблизительные координаты центров из path данных)
    const circleCenters = [
      { cx: 193.908, cy: 59.6035, radius: 65 }, // Первый круг (приблизительный радиус)
      { cx: 331.473, cy: 172.858, radius: 75 }, // Второй круг
      { cx: 168.556, cy: 235.978, radius: 70 }, // Третий круг
    ];

    // Периодичность генерации волн для каждого круга (в секундах)
    const wavePeriods = [2.5, 3.0, 2.0]; // разная периодичность
    const lastWaveTime = [0, 0, 0]; // время последней волны для каждого круга

    // Массив активных волн: { circleIndex, radius, opacity, startTime }
    interface Wave {
      circleIndex: number;
      radius: number;
      opacity: number;
      startTime: number;
    }
    const waves: Wave[] = [];

    const animate = () => {
      const elapsed = (Date.now() - startTime) * 0.001; // время в секундах

      // Анимация основных кругов
      groups.forEach((group, index) => {
        const center = circleCenters[index];
        if (!center) return;

        // Плавное движение по кругу
        const speed = 0.2 + index * 0.08; // разная скорость для каждого круга
        const radius = 5 + index * 2; // разный радиус движения
        
        const offsetX = Math.cos(elapsed * speed + index * 2.1) * radius;
        const offsetY = Math.sin(elapsed * speed + index * 1.7) * radius;
        
        // Пульсация размера
        const scale = 1 + Math.sin(elapsed * 0.6 + index * 1.2) * 0.08;
        
        // Применяем трансформацию относительно центра круга
        group.setAttribute(
          'transform',
          `translate(${center.cx + offsetX}, ${center.cy + offsetY}) scale(${scale}) translate(${-center.cx}, ${-center.cy})`
        );

        // Генерируем новые волны с разной периодичностью
        // Волна начинается от границы круга (от его радиуса)
        if (elapsed - lastWaveTime[index] >= wavePeriods[index]) {
          const circleRadius = circleCenters[index].radius;
          waves.push({
            circleIndex: index,
            radius: circleRadius, // начинаем от радиуса круга, а не от нуля
            opacity: 1.0, // начальная opacity (будет умножена на общую opacity SVG)
            startTime: elapsed,
          });
          lastWaveTime[index] = elapsed;
        }
      });

      // Обновляем и удаляем волны
      const waveSpeed = 50; // скорость распространения волны (пикселей в секунду)

      for (let i = waves.length - 1; i >= 0; i--) {
        const wave = waves[i];
        const center = circleCenters[wave.circleIndex];
        const circleRadius = center.radius;
        const waveAge = elapsed - wave.startTime;
        
        // Волна начинается от границы круга и расходится наружу
        wave.radius = circleRadius + waveAge * waveSpeed;
        
        // Максимальный радиус волны (от центра круга)
        const maxWaveRadius = circleRadius + 100;
        
        // Вычисляем opacity: максимальная у границы круга, уменьшается по мере удаления
        const distanceFromCircle = wave.radius - circleRadius;
        const maxDistance = maxWaveRadius - circleRadius;
        wave.opacity = Math.max(0, 1.0 * (1 - distanceFromCircle / maxDistance));

        // Удаляем волны, которые вышли за пределы или стали невидимыми
        if (wave.radius > maxWaveRadius || wave.opacity <= 0) {
          waves.splice(i, 1);
        }
      }

      // Отрисовываем волны
      let wavesGroup = svg.querySelector('g[data-waves]') as SVGGElement;
      if (!wavesGroup) {
        wavesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        wavesGroup.setAttribute('data-waves', 'true');
        // Размещаем волны поверх основных кругов с увеличенной opacity
        const mainGroup = svg.querySelector('g[opacity="1"]');
        if (mainGroup) {
          mainGroup.appendChild(wavesGroup);
        } else {
          svg.appendChild(wavesGroup);
        }
      }
      // Устанавливаем повышенную opacity для группы волн
      wavesGroup.setAttribute('opacity', '20');

      // Очищаем старые круги волн
      wavesGroup.innerHTML = '';

      // Рисуем активные волны
      waves.forEach((wave) => {
        const center = circleCenters[wave.circleIndex];
        if (!center) return;

        // Получаем текущую позицию круга
        // const group = groups[wave.circleIndex];
        const speed = 0.2 + wave.circleIndex * 0.08;
        const radius = 5 + wave.circleIndex * 2;
        const offsetX = Math.cos(elapsed * speed + wave.circleIndex * 2.1) * radius;
        const offsetY = Math.sin(elapsed * speed + wave.circleIndex * 1.7) * radius;

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', (center.cx + offsetX).toString());
        circle.setAttribute('cy', (center.cy + offsetY).toString());
        circle.setAttribute('r', wave.radius.toString());
        circle.setAttribute('fill', 'none');
        circle.setAttribute('stroke', 'white');
        circle.setAttribute('stroke-width', '4'); // увеличиваем толщину для видимости
        // Opacity будет умножена на opacity группы (20) и общую opacity SVG (0.05)
        circle.setAttribute('opacity', wave.opacity.toString());
        wavesGroup.appendChild(circle);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width="322"
      height="400"
      viewBox="0 0 322 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute top-0 right-0 pointer-events-none ${className}`}
      style={{
        zIndex: 0,
        opacity: 0.05,
      }}
    >
      <g opacity="1">
        <g data-circle="1">
          <path
            d="M193.908 59.6035C228.899 46.0468 246.274 6.69114 232.718 -28.2997C219.161 -63.2905 179.805 -80.6663 144.815 -67.1096C109.824 -53.5529 92.4479 -14.1974 106.005 20.7935C119.561 55.7843 158.917 73.1602 193.908 59.6035Z"
            fill="white"
          />
        </g>
        <g data-circle="2">
          <path
            d="M331.473 172.858C366.464 159.301 383.84 119.946 370.283 84.9549C356.726 49.9641 317.371 32.5884 282.38 46.1451C247.389 59.7018 230.013 99.0573 243.57 134.048C257.127 169.039 296.482 186.415 331.473 172.858Z"
            fill="white"
          />
        </g>
        <g data-circle="3">
          <path
            d="M168.556 235.978C203.547 222.421 220.923 183.065 207.366 148.075C193.809 113.084 154.454 95.708 119.463 109.265C84.4721 122.821 67.0963 162.177 80.653 197.168C94.2097 232.159 133.565 249.534 168.556 235.978Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
};

export default AnimatedEffectBackground;


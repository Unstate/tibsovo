import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

const IntegratedP5Background: React.FC = () => {
  let nodes: Array<{ x: number; y: number; vx: number; vy: number; color: p5Types.Color }> = [];
  let isInitialized = false;
  const width = 400; // 15% от 1350
  const height = 700;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const canvas = p5.createCanvas(width, height);
    canvas.parent(canvasParentRef);
    canvas.style('position', 'absolute');
    canvas.style('top', '0');
    canvas.style('right', '0');
    canvas.style('z-index', '1');
    
    // Инициализация узлов
    for (let i = 0; i < 18; i++) {
      nodes.push({
        x: p5.random(width),
        y: p5.random(height),
        vx: p5.random(-0.2, 0.2),
        vy: p5.random(-0.2, 0.2),
        color: p5.color(
          p5.random(150, 200),
          p5.random(150, 200),
          p5.random(200, 255),
          150
        )
      });
    }
    
    isInitialized = true;
  };

  const draw = (p5: p5Types) => {
    if (!isInitialized) return;
    
    // Прозрачный фон
    p5.clear(0, 0, 0, 0);
    
    // Обновление узлов
    nodes.forEach(node => {
      // Взаимодействие с мышью
      const dx = p5.mouseX - node.x;
      const dy = p5.mouseY - node.y;
      const distance = p5.dist(p5.mouseX, p5.mouseY, node.x, node.y);
      
      if (distance < 100) {
        const force = 0.01 * (1 - distance / 100);
        node.vx += dx * force;
        node.vy += dy * force;
      }
      
      // Движение
      node.x += node.vx;
      node.y += node.vy;
      node.vx *= 0.98;
      node.vy *= 0.98;
      
      // Границы
      if (node.x < 0 || node.x > width) node.vx *= -0.9;
      if (node.y < 0 || node.y > height) node.vy *= -0.9;
    });
    
    // Рисуем соединения
    p5.strokeWeight(1);
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = p5.dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
        if (d < 150) {
          p5.stroke(
            p5.red(nodes[i].color),
            p5.green(nodes[i].color),
            p5.blue(nodes[i].color),
            100 * (1 - d / 150)
          );
          p5.line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
        }
      }
    }
    
    // Рисуем узлы
    p5.noStroke();
    nodes.forEach(node => {
      p5.fill(node.color);
      p5.circle(node.x, node.y, 3);
    });
  };

  const windowResized = (p5: p5Types) => {
    // Сохраняем размеры для боковой панели
    p5.resizeCanvas(width, height);
  };

  return (
    <div
        className="integrate"
        style={{
      position: 'absolute',
      top: 0,
      right: 0,
      width: `${width}px`,
      height: `${height}px`,
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      <Sketch
        setup={setup}
        draw={draw}
        windowResized={windowResized}
      />
    </div>
  );
};

export default IntegratedP5Background;
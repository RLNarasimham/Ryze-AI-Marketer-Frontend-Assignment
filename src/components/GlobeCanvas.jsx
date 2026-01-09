import React, { useEffect, useRef } from "react";

export default function GlobeCanvas() {
  const canvasRef = useRef(null);
  const animationRef = useRef({ rotation: 0, particleFloat: 0 });
  const nodes = useRef(generateNodes(20)).current;
  const orbits = useRef(generateOrbits()).current;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;

    // Initial size setup
    const updateSize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    updateSize();

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;

    const drawGlobe = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const minDimension = Math.min(width, height);

      // Strict responsive multipliers to ensure NO cutoff
      // Calculation: (Orbit Extent 1.4x) + (Particle Extent ~1.8x)
      // Must fit in half width (0.5). 0.5 / 1.8 ≈ 0.27
      let radiusMultiplier;

      if (width <= 320) {
        radiusMultiplier = 0.26; // iPhone SE (1st gen), very small Androids
      } else if (width <= 375) {
        radiusMultiplier = 0.28; // iPhone SE (2nd gen), standard mobile
      } else if (width <= 425) {
        radiusMultiplier = 0.30; // Large phones
      } else {
        radiusMultiplier = 0.34; // Tablets and Desktop
      }

      const globeRadius = minDimension * radiusMultiplier;

      // Clear canvas
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      const rotation = animationRef.current.rotation;
      const particleFloat = animationRef.current.particleFloat;

      // Draw globe sphere with gradient
      const globeGradient = ctx.createRadialGradient(
        centerX - globeRadius * 0.3,
        centerY - globeRadius * 0.3,
        0,
        centerX,
        centerY,
        globeRadius * 1.2
      );
      globeGradient.addColorStop(0, "rgba(59, 130, 246, 0.8)");
      globeGradient.addColorStop(0.5, "rgba(29, 78, 216, 0.9)");
      globeGradient.addColorStop(1, "rgba(15, 23, 42, 0.95)");

      ctx.fillStyle = globeGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.fill();

      // Draw dotted world map pattern
      ctx.fillStyle = "rgba(96, 165, 250, 0.4)";
      const dotSize = globeRadius * 0.04;
      for (let lat = -80; lat <= 80; lat += 20) {
        for (let lon = -180; lon <= 180; lon += 30) {
          const phi = (lat * Math.PI) / 180;
          const theta = (lon * Math.PI) / 180;

          let x = Math.sin(phi) * Math.cos(theta);
          let y = Math.cos(phi);
          let z = Math.sin(phi) * Math.sin(theta);

          const cosRot = Math.cos(rotation);
          const sinRot = Math.sin(rotation);
          const xRot = x * cosRot - z * sinRot;
          const zRot = x * sinRot + z * cosRot;

          if (zRot > -0.3) {
            const screenX = centerX + xRot * globeRadius;
            const screenY = centerY + y * globeRadius;
            const brightness = Math.max(0.3, (zRot + 1) / 1.5);

            ctx.fillStyle = `rgba(96, 165, 250, ${brightness * 0.5})`;
            ctx.beginPath();
            ctx.arc(screenX, screenY, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Draw continents outline
      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
      ctx.lineWidth = 1.5;
      drawContinents(ctx, centerX, centerY, globeRadius, rotation);

      // Draw orbital rings
      orbits.forEach((orbit) => {
        orbit.angle += orbit.speed;

        ctx.strokeStyle = orbit.color;
        ctx.lineWidth = 2;
        ctx.beginPath();

        const points = 120;
        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2 + orbit.angle;
          let x = Math.cos(angle) * globeRadius * 1.4;
          let z = Math.sin(angle) * globeRadius * 1.4;
          const y = Math.sin(orbit.tilt) * globeRadius * 1.4;

          const cosRot = Math.cos(rotation);
          const sinRot = Math.sin(rotation);
          const xRot = x * cosRot - z * sinRot;
          const zRot = x * sinRot + z * cosRot;
          const yRot = y;

          const screenX = centerX + xRot;
          const screenY = centerY + yRot;

          if (i === 0) ctx.moveTo(screenX, screenY);
          else ctx.lineTo(screenX, screenY);
        }
        ctx.stroke();
      });

      // Draw network nodes
      nodes.forEach((node) => {
        const cosRot = Math.cos(rotation);
        const sinRot = Math.sin(rotation);
        const xRot = node.x * cosRot - node.z * sinRot;
        const zRot = node.x * sinRot + node.z * cosRot;
        const yRot = node.y;

        if (zRot > -0.2) {
          const screenX = centerX + xRot * globeRadius;
          const screenY = centerY + yRot * globeRadius;
          const brightness = Math.max(0.4, (zRot + 1) / 1.5);

          const glowGradient = ctx.createRadialGradient(
            screenX,
            screenY,
            0,
            screenX,
            screenY,
            12
          );
          glowGradient.addColorStop(
            0,
            `rgba(6, 182, 212, ${brightness * 0.8})`
          );
          glowGradient.addColorStop(
            0.5,
            `rgba(6, 182, 212, ${brightness * 0.3})`
          );
          glowGradient.addColorStop(1, `rgba(6, 182, 212, 0)`);

          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(screenX, screenY, 12, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
          ctx.beginPath();
          ctx.arc(screenX, screenY, 3.5, 0, Math.PI * 2);
          ctx.fill();

          const pulsePhase = (particleFloat * 0.003 + node.brightness) % 1;
          const ringRadius = 8 + pulsePhase * 6;
          ctx.strokeStyle = `rgba(6, 182, 212, ${brightness * (1 - pulsePhase) * 0.5})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(screenX, screenY, ringRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Draw floating particles - RESPONSIVE POSITIONING
      for (let i = 0; i < 15; i++) {
        const angle =
          ((i / 15) * Math.PI * 2 + particleFloat * 0.001) % (Math.PI * 2);

        // Dynamic distance based on globe radius instead of fixed pixels
        const baseDistance = globeRadius * 1.5;
        const variation = globeRadius * 0.3;
        const distance = baseDistance + Math.sin(particleFloat * 0.0005 + i) * variation;

        // Keep vertical float roughly within bounds
        const y = (Math.sin(particleFloat * 0.0003 + i) - 0.5) * globeRadius * 1.2;

        const x = Math.cos(angle) * distance;

        const brightness = Math.max(
          0.2,
          Math.sin(particleFloat * 0.001 + i) * 0.5 + 0.5
        );
        const size = brightness * 2;

        ctx.fillStyle = `rgba(139, 92, 246, ${brightness * 0.6})`;
        ctx.beginPath();
        ctx.arc(centerX + x, centerY + y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current.rotation += 0.0008;
      animationRef.current.particleFloat += 1;

      animationId = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    const handleResize = () => {
      updateSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}

// Helper functions moved outside component
const generateNodes = (count) => {
  const nodes = [];
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    nodes.push({
      theta,
      phi,
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.cos(phi),
      z: Math.sin(phi) * Math.sin(theta),
      brightness: Math.random() * 0.5 + 0.5,
    });
  }
  return nodes;
};

const generateOrbits = () => {
  return [
    {
      angle: 0,
      tilt: Math.PI * 0.3,
      speed: 0.0003,
      color: "rgba(139, 92, 246, 0.4)",
    },
    {
      angle: 0,
      tilt: Math.PI * -0.25,
      speed: -0.0005,
      color: "rgba(6, 182, 212, 0.3)",
    },
    {
      angle: 0,
      tilt: Math.PI * 0.5,
      speed: 0.0002,
      color: "rgba(139, 92, 246, 0.2)",
    },
  ];
};


function drawContinents(ctx, centerX, centerY, radius, rotation) {
  const continents = [

    {
      points: [
        [250, 120],
        [280, 140],
        [290, 160],
        [280, 180],
        [250, 160],
        [240, 140],
      ],
    },

    {
      points: [
        [260, 200],
        [280, 210],
        [285, 240],
        [270, 250],
        [255, 230],
        [250, 210],
      ],
    },

    {
      points: [
        [300, 100],
        [330, 110],
        [340, 130],
        [320, 140],
        [300, 120],
      ],
    },

    {
      points: [
        [320, 140],
        [350, 150],
        [360, 190],
        [340, 200],
        [310, 170],
      ],
    },

    {
      points: [
        [340, 100],
        [380, 110],
        [400, 140],
        [390, 180],
        [350, 170],
        [340, 140],
      ],
    },
  ];

  continents.forEach((continent) => {
    ctx.beginPath();
    let first = true;
    continent.points.forEach((point) => {

      const lon = (point[0] - 200) * 1.8;
      const lat = (point[1] - 160) * 1.8;

      const phi = (lat * Math.PI) / 180;
      const theta = (lon * Math.PI) / 180;

      let x = Math.sin(phi) * Math.cos(theta);
      let y = Math.cos(phi);
      let z = Math.sin(phi) * Math.sin(theta);


      const cosRot = Math.cos(rotation);
      const sinRot = Math.sin(rotation);
      const xRot = x * cosRot - z * sinRot;
      const yRot = y;
      const zRot = x * sinRot + z * cosRot;


      if (zRot > -0.3) {
        const screenX = centerX + xRot * radius;
        const screenY = centerY + yRot * radius;

        if (first) {
          ctx.moveTo(screenX, screenY);
          first = false;
        } else {
          ctx.lineTo(screenX, screenY);
        }
      }
    });
    ctx.closePath();
    ctx.stroke();
  });
}

import confetti from 'canvas-confetti';

export const triggerCyberCelebration = () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 50 * (timeLeft / duration);
    
    // Flower-like colors: Soft pinks, whites, and light cyan
    const colors = ['#FFB7C5', '#FFD1DC', '#FFFFFF', '#00f2ff', '#B0E0E6'];

    try {
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: colors,
        shapes: ['circle'],
        scalar: randomInRange(0.4, 0.8),
        drift: randomInRange(-0.5, 0.5),
        gravity: randomInRange(0.6, 0.8),
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: colors,
        shapes: ['circle'],
        scalar: randomInRange(0.4, 0.8),
        drift: randomInRange(-0.5, 0.5),
        gravity: randomInRange(0.6, 0.8),
      });
    } catch (err) {
      // Just catch potential canvas errors gracefully
    }
  }, 250);

  return () => clearInterval(interval);
};

export const triggerWelcomeConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 100,
    colors: ['#FFB7C5', '#FFD1DC', '#FFFFFF', '#00f2ff']
  };

  function fire(particleRatio: number, opts: any) {
    try {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        shapes: ['circle'],
        scalar: 0.7,
      });
    } catch (err) {
      // Catch potential canvas errors gracefully
    }
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

import initAOS from './library/aos.js';
import initSmoothScroll from './library/smoothScroll.js';
import initTypedTexts from './library/typed.js';
initAOS(1800); // 1000 === 1 segundo
initSmoothScroll(0, 2000);
initTypedTexts(['one', 'two', 'tree'], 300, 300, 400);
